import { FormControl, FormLabel, Input, VStack, Button, HStack, Image, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import CustomCheckbox from './CustomCheckbox';
import UploadRules from './UploadRules';

function OlwestForm({ formData, setFormData, handleSubmit, isSubmitting, uploadPrices, fileInputRef }) {
  const { t } = useTranslation();

  const uploadTypes = [
    { value: 'head', label: t('upload.head'), icon: '/upload/head.png' },
    { value: 'body', label: t('upload.body'), icon: '/upload/body.png' },
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
    }));
  };

  const handleTypeChange = (value) => {
    setFormData((prev) => ({ ...prev, type: value }));
  };

  const submitButtonText = uploadPrices[formData.type] || t('upload.submitOlwest');

  return (
    <VStack spacing={6} align="stretch" as="form" onSubmit={handleSubmit} encType="multipart/form-data">
      <FormControl isRequired>
        <FormLabel color="gray.200" fontSize="sm" fontWeight="medium">
          {t('upload.email')}
        </FormLabel>
        <Input
          type="email"
          name="email"
          placeholder={t('upload.emailPlaceholder')}
          value={formData.email}
          onChange={handleInputChange}
          bg="gray.800"
          color="white"
          border="1px solid"
          borderColor="gray.500"
          _hover={{ borderColor: '#7f9cf5' }}
          _focus={{ borderColor: '#7f9cf5', boxShadow: '0 0 0 1px #7f9cf5' }}
          borderRadius="md"
          size="lg"
          autoComplete="off"
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel color="gray.200" fontSize="sm" fontWeight="medium">
          {t('upload.image')}
        </FormLabel>
        <Input
          type="file"
          name="file"
          onChange={handleInputChange}
          ref={fileInputRef}
          bg="gray.800"
          color="white"
          border="1px solid"
          borderColor="gray.500"
          _hover={{ borderColor: '#7f9cf5' }}
          _focus={{ borderColor: '#7f9cf5', boxShadow: '0 0 0 1px #7f9cf5' }}
          borderRadius="md"
          size="lg"
          p={1}
        />
      </FormControl>
      <FormControl>
        <FormLabel color="gray.200" fontSize="sm" fontWeight="medium">
          {t('upload.fileType')}
        </FormLabel>
        <HStack spacing={4} flexWrap="wrap">
          {uploadTypes.map((type) => (
            <Button
              key={type.value}
              onClick={() => handleTypeChange(type.value)}
              variant={formData.type === type.value ? 'solid' : 'outline'}
              colorScheme="brand"
              size="md"
              borderRadius="md"
              bg={formData.type === type.value ? '#7f9cf5' : 'gray.700'}
              color="white"
              border="1px solid"
              borderColor={formData.type === type.value ? '#7f9cf5' : 'gray.600'}
              _hover={{
                bg: formData.type === type.value ? '#667eea' : 'gray.600',
                borderColor: '#7f9cf5',
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
              }}
              transition="all 0.3s ease"
              leftIcon={<Image src={type.icon} boxSize="24px" />}
              height="70px"
              width={{ base: '100%', md: 'auto' }} 

            >
              <VStack spacing={1} align="start">
                <Text fontSize="sm" fontWeight="medium">{type.label}</Text>
                <Text fontSize="xs" color="gray.300">{uploadPrices[type.value] || 'Upload'}</Text>
              </VStack>
            </Button>
          ))}
        </HStack>
      </FormControl>
      <FormControl>
        <CustomCheckbox name="transed" isChecked={formData.transed} onChange={handleInputChange}>
          {t('upload.setTransparency')}
        </CustomCheckbox>
        <Text fontSize="sm" color="gray.400" mt={1}>
          {t('upload.transparencyHelp')}
        </Text>
      </FormControl>
      <UploadRules/>
      <FormControl isRequired>
        <CustomCheckbox name="invalidCheck" isChecked={formData.invalidCheck} onChange={handleInputChange}>
          {t('upload.agreeRules')}
        </CustomCheckbox>
      </FormControl>
      <Button
        type="submit"
        colorScheme="brand"
        size="lg"
        isDisabled={!formData.invalidCheck || isSubmitting}
        isLoading={isSubmitting}
        bg="#7f9cf5"
        _hover={{ bg: '#667eea', transform: 'translateY(-2px)', boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)' }}
        transition="all 0.3s"
        borderRadius="md"
        fontWeight="medium"
      >
        Upload For {submitButtonText}
      </Button>
    </VStack>
  );
}

export default OlwestForm;