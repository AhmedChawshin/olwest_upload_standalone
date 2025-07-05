import { FormControl, FormLabel, Input, VStack, Button, HStack, Image, Text } from '@chakra-ui/react';
import {useState} from "react"
import { useTranslation } from 'react-i18next';
import CustomCheckbox from './CustomCheckbox';
import UploadRules from './UploadRules';

function OlwestForm({ formData, setFormData, handleSubmit, isSubmitting, uploadPrices, fileInputRef }) {
  const { t } = useTranslation();
  const [Upload, setUpload] = useState("head")
  const uploadTypes = [
    { value: 'head', label: t('upload.head'), icon: '/upload/head.png' },
    { value: 'body', label: t('upload.body'), icon: '/upload/body.png' },
    { value: 'shield', label: t('upload.shield'), icon: '/upload/shield.png' },
    { value: 'guild_logo', label: t('upload.logo'), icon: '/upload/guildlogo.png' }
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
    setUpload(value)
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
          bg="rgba(255, 255, 255, 0.05)"
          color="white"
          border="1px solid"
          borderColor="gray.500"
          _hover={{ borderColor: '#D2B48C' }}
          _focus={{ borderColor: '#D2B48C', boxShadow: '0 0 0 1px #D2B48C' }}
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
          accept="image/*"
          onChange={handleInputChange}
          ref={fileInputRef}
          bg="rgba(255, 255, 255, 0.05)"
          color="white"
          border="1px solid"
          borderColor="gray.500"
          _hover={{ borderColor: '#D2B48C' }}
          _focus={{ borderColor: '#D2B48C', boxShadow: '0 0 0 1px #D2B48C' }}
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
          size="md"
          borderRadius="md"
          bg={formData.type === type.value ? '#4A3728' : '#3B2F2F'} 
          color="#F5DEB3" 
          border="2px solid"
          borderColor={formData.type === type.value ? '#D2B48C' : '#D2B48C'} 
          _hover={{
            bg: '#4A3728', 
            borderColor: '#FFD700', 
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3), 0 0 10px rgba(255, 215, 0, 0.5)',
          }}
          transition="all 0.3s ease"
          leftIcon={<Image src={type.icon} boxSize="24px" filter="drop-shadow(0 0 3px rgba(210, 180, 140, 0.7))" draggable="false" />}
          height="70px"
          width={{ base: '100%', md: 'auto' }}
        >
          <VStack spacing={1} align="start">
            <Text
              fontSize="sm"
              fontWeight="bold"
            >
            {type.label}
            </Text>
            <Text
              fontSize="xs"
              color="#D2B48C" 
            >
              {uploadPrices[type.value] || 'Upload'}
            </Text>
          </VStack>
        </Button>
      ))}
        </HStack>
      </FormControl>

        {Upload !== "guild_logo" || Upload !== "shield"  &&(
          <FormControl>
            <CustomCheckbox name="transed" isChecked={formData.transed} onChange={handleInputChange}>
              {t('upload.setTransparency')}
            </CustomCheckbox>
            <Text fontSize="sm" color="gray.400" mt={1}>
              {t('upload.transparencyHelp')}
            </Text>
          </FormControl>
        )} 

      <UploadRules/>
      <FormControl isRequired>
        <CustomCheckbox name="invalidCheck" isChecked={formData.invalidCheck} onChange={handleInputChange}>
          {t('upload.agreeRules')}
        </CustomCheckbox>
      </FormControl>
    <Button
      type="submit"
      size="lg"
      isDisabled={!formData.invalidCheck || isSubmitting}
      isLoading={isSubmitting}
      bg="#3B2F2F" 
      color="#F5DEB3" 
      border="2px solid #D2B48C" 
      borderRadius="md"

      _hover={{
        bg: '#4A3728', 
        borderColor: '#FFD700',
        transform: 'translateY(-2px)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3), 0 0 10px rgba(255, 215, 0, 0.5)', 
      }}
      _disabled={{
        bg: '#2F2525', 
        color: '#A89B8C', 
        borderColor: '#A89B8C', 
        opacity: 0.6,
        cursor: 'not-allowed',
      }}
      transition="all 0.3s ease"
    >
      <Text > 
        Upload For {submitButtonText}
      </Text>
    </Button>
    </VStack>
  );
}

export default OlwestForm;