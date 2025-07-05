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
    transed: false,
    invalidCheck: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef(null);
  const toast = useToast();

  const uploadPrices = {
    head: '20 000 Gralats',
    body: '10 000 Gralats',
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
    data.append('transed', formData.transed ? 'on' : 'off');
    data.append('submit', 'Upload');

    try {
      const response = await fetch('/upload.gs', {
        method: 'POST',
        body: data,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseText = await response.text();
      let message = '';

      // Check if response is Base64-encoded
      try {
        const decodedText = atob(responseText);
        // If decoding succeeds, parse the decoded HTML
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = decodedText;
        const messageElement = tempDiv.querySelector('center') || tempDiv;
        message = messageElement.textContent.trim() || 'Message not found';
      } catch (e) {
        // If not Base64, parse the response as HTML
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
        bgImage="url('/bg.png')"
        bgRepeat="repeat"
        bgSize="auto"
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
          bg="rgba(26, 32, 44, 0.9)"
          p={8}
          borderRadius="md"
          boxShadow="0 4px 12px rgba(0, 0, 0, 0.3)"
          border="1px solid"
          borderColor="gray.700"
        >
          <Heading
            as="h1"
            size="xl"
            textAlign="center"
            color="white"
            fontWeight="bold"
            mb={6}
          >
            GraalOnline Ol'West Upload
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