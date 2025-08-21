import { useState, useRef } from 'react';
import { Box, Heading, useToast } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import OlwestForm from './components/OlwestForm';
import Layout from './components/Layout';
import './App.css';

function App() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    email: '',
    file: null,
    type: 'head',
    race: 'human',      // Default race
    transed: false,
    invalidCheck: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef(null);
  const toast = useToast();

  const uploadPrices = {
    head: '20 000 Gralats',
    body: '10 000 Gralats',
    shield: '2 500 Gralats',
    ganglogo: 'Free',
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.file) {
      toast({
        title: t('upload.errorTitle'),
        description: t('upload.noFile'),
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    setIsSubmitting(true);

    const data = new FormData();
    data.append('email', formData.email);
    data.append('file', formData.file);
    data.append('type', formData.type);
    data.append('race', formData.race);  // Append selected race
    if (!["guild_logo"].includes(formData.type)) {
      data.append('transed', formData.transed ? 'on' : 'off');
    }
    data.append('submit', 'Upload');

    try {
      const response = await fetch('https://delteriaupload.graalonline.com/upload.gs', {
        method: 'POST',
        body: data,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseText = await response.text();
      let message = '';

      try {
        const decodedText = atob(responseText);
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = decodedText;
        const messageElement = tempDiv.querySelector('center') || tempDiv;
        message = messageElement.textContent.trim() || 'Message not found';
      } catch (e) {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = responseText;
        const messageElement = tempDiv.querySelector('center') || tempDiv;
        message = messageElement.textContent.trim() || 'Message not found';
      }

      const isSuccess = message.toLowerCase().includes('thanks for submitting the file!');

      toast({
        title: isSuccess ? t('upload.successTitle') : t('upload.errorTitle'),
        description: message,
        status: isSuccess ? 'success' : 'error',
        duration: 5000,
        isClosable: true,
      });

      if (isSuccess) {
        setFormData({
          email: '',
          file: null,
          type: 'head',
          race: 'human',
          transed: false,
          invalidCheck: false,
        });
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      }
    } catch (error) {
      toast({
        title: t('upload.errorTitle'),
        description: error.message || t('upload.errorTitle'),
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <Box
        minH="100vh"
        bgImage="url('bg.webp')"
        bgRepeat="no-repeat"
        bgSize="cover"
        color="white"
        px={{ base: 4, md: 8 }}
        py={12}
        position="relative"
        overflow="hidden"
        className="flex items-center justify-center"
      >
        <Box
          maxW="1000px"
          w="full"
          bg="rgba(30, 30, 30, 0.9)"
          p={8}
          borderRadius="md"
          boxShadow="0 4px 12px rgba(0, 0, 0, 0.8)"
          backgroundBlendMode="overlay"
        >
          <Heading
            as="h1"
            size="xl"
            textAlign="center"
            color="#F5DEB3"
            mb={6}
            transition="text-shadow 0.3s ease-in-out"
          >
            GraalOnline Delteria - {t('upload.submit')}
          </Heading>
          <Box mt={8}>
            <OlwestForm
              formData={formData}
              setFormData={setFormData}
              handleSubmit={handleSubmit}
              isSubmitting={isSubmitting}
              uploadPrices={uploadPrices}
              fileInputRef={fileInputRef}
            />
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}

export default App;
