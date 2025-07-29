import { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  VStack,
  Button,
  HStack,
  Image,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useTranslation } from 'react-i18next';
import CustomCheckbox from './CustomCheckbox';
import UploadRules from './UploadRules';

function OlwestForm({ formData, setFormData, handleSubmit, isSubmitting, uploadPrices, fileInputRef }) {
  const { t } = useTranslation();

  const races = [
    { value: 'human', label: 'Human', img: 'https://delteriaupload.graalonline.com/images/delt_human.png' },
    { value: 'elf', label: 'Elf', img: 'https://delteriaupload.graalonline.com/images/delt_elf.png' },
    { value: 'faerie', label: 'Faerie', img: 'https://delteriaupload.graalonline.com/images/delt_faerie.png' },
    { value: 'dragonkin', label: 'Dragonkin', img: 'https://delteriaupload.graalonline.com/images/delt_dragonkin.png' },
  ];

  const [Upload, setUpload] = useState(formData.type || 'head');
  const [race, setRace] = useState(formData.race || races[0].value);

  const uploadTypes = [
    { value: 'head', label: t('upload.head'), icon: 'upload/head.png' },
    { value: 'body', label: t('upload.body'), icon: 'upload/body.png' },
    // { value: 'shield', label: t('upload.shield'), icon: 'upload/shield.png' },
    { value: 'ganglogo', label: t('upload.logo'), icon: 'upload/guildlogo.png' },
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
    setUpload(value);
  };

  const handleRaceSelect = (value) => {
    setRace(value);
    setFormData((prev) => ({ ...prev, race: value }));
  };

  const submitButtonText = uploadPrices[formData.type] || t('upload.submit');

  return (
    <VStack spacing={6} align="stretch" as="form" onSubmit={handleSubmit} encType="multipart/form-data">
<FormControl isRequired width="100%">
  <FormLabel 
    color="gray.300" 
    fontSize="sm" 
    fontWeight="semibold"
    letterSpacing="wide"
    mb={2}
  >
    Select Race
  </FormLabel>
  <Menu matchWidth>
    <MenuButton
      as={Button}
      rightIcon={<Icon as={ChevronDownIcon} boxSize={6} />}
      bg="rgba(30, 30, 30, 0.95)"
      color="gray.200"
      border="1px solid rgba(210, 180, 140, 0.5)"
      _hover={{ 
        bg: 'rgba(60, 60, 60, 0.95)', 
        borderColor: 'rgba(210, 180, 140, 0.8)',
        transform: 'translateY(-2px)',
        transition: 'all 0.2s ease'
      }}
      _active={{ 
        bg: 'rgba(50, 50, 50, 0.95)', 
        transform: 'translateY(0)',
      }}
      width="100%"
      height={"200px"}
      textAlign="left"
      justifyContent="space-between"
      px={5}
      py={4}
      borderRadius="lg"
      boxShadow="0 2px 8px rgba(0, 0, 0, 0.3)"
      transition="all 0.2s ease"
    >
      <HStack spacing={5} flex="1" overflow="hidden" alignItems="center">
        <Image
          src={races.find(r => r.value === race)?.img}
          width="100px"
          height="auto"
          flexShrink={0}
          objectFit="contain"
          filter="drop-shadow(0 0 4px rgba(210, 180, 140, 0.6))"
          borderRadius="lg"
          bg="rgba(210, 180, 140, 0.1)"
          p={2}
        />
        <Text
          isTruncated
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
          flex="1"
          fontSize="lg"
          fontWeight="medium"
          color="gray.200"
        >
          {races.find(r => r.value === race)?.label || 'Select a race'}
        </Text>
      </HStack>
    </MenuButton>
    <MenuList
      bg="rgba(30, 30, 30, 0.95)"
      borderColor="rgba(210, 180, 140, 0.5)"
      boxShadow="0 4px 12px rgba(210, 180, 140, 0.3)"
      borderRadius="lg"
      py={2}
      width="100%"
      minWidth="unset"
      maxWidth="100%"
      maxHeight="400px"
      overflowY="auto"
      overflowX="hidden"
      zIndex={10}
    >
      {races.map(({ value, label, img }) => (
        <MenuItem
          key={value}
          onClick={() => handleRaceSelect(value)}
          _hover={{ 
            bg: 'rgba(60, 60, 60, 0.95)',
            transition: 'all 0.2s ease'
          }}
          bg={race === value ? 'rgba(80, 60, 40, 0.8)' : 'transparent'}
          color={race === value ? '#D2B48C' : 'gray.200'}
          borderRadius="md"
          py={3}
          px={5}
          width="100%"
        >
          <HStack spacing={5} w="100%" alignItems="center">
            <Image
              src={img}
              width="100px"
              height="auto"
              objectFit="contain"
              filter="drop-shadow(0 0 4px rgba(210, 180, 140, 0.5))"
              borderRadius="lg"
              bg="rgba(210, 180, 140, 0.1)"
              p={2}
              flexShrink={0}
            />
            <Text 
              fontSize="lg" 
              fontWeight="medium" 
              flex="1"
              whiteSpace="normal"
              wordBreak="break-word"
            >
              {label}
            </Text>
          </HStack>
        </MenuItem>
      ))}
    </MenuList>
  </Menu>
</FormControl>




      {/* Email */}
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

      {/* Image Upload */}
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
  <HStack spacing={4} flexWrap="wrap" width="100%">
    {uploadTypes.map((type) => {
      const isSelected = formData.type === type.value;
      return (
        <Button
          key={type.value}
          onClick={() => handleTypeChange(type.value)}
          variant={isSelected ? 'solid' : 'outline'}
          size="md"
          borderRadius="md"
          bg={isSelected ? '#3B2F2F' : 'rgba(30, 30, 30, 0.9)'}
          color="#F5DEB3"
          border="2px solid"
          borderColor={isSelected ? '#D2B48C' : '#4A3728'}
          _hover={{
            bg: '#4A3728',
            borderColor: '#FFD700',
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.7), 0 0 10px rgba(255,215,0,0.7)',
          }}
          transition="all 0.3s ease"
          leftIcon={
            <Image
              src={type.icon}
              boxSize="28px"
              filter="drop-shadow(0 0 5px rgba(210, 180, 140, 0.8))"
              draggable="false"
              borderRadius="md"
              objectFit="contain"
            />
          }
          height="70px"
          width={{ base: '100%', md: 'auto' }}
          justifyContent="flex-start"
          px={4}
        >
          <VStack spacing={1} align="start" flex="1" overflow="hidden">
            <Text
              fontSize="sm"
              fontWeight="bold"
              isTruncated
              color="#F5DEB3"
            >
              {type.label}
            </Text>
            <Text fontSize="xs" color="#D2B48C">
              {uploadPrices[type.value] || 'Upload'}
            </Text>
          </VStack>
        </Button>
      );
    })}
  </HStack>
</FormControl>



      {/* Transparency Checkbox (if applicable) */}
      {!['ganglogo'].includes(Upload) && (
        <FormControl>
          <CustomCheckbox name="transed" isChecked={formData.transed} onChange={handleInputChange}>
            {t('upload.setTransparency')}
          </CustomCheckbox>
          <Text fontSize="sm" color="gray.400" mt={1}>
            {t('upload.transparencyHelp')}
          </Text>
        </FormControl>
      )}

      {/* Upload Rules */}
      <UploadRules />

      {/* Agree Rules Checkbox */}
      <FormControl isRequired>
        <CustomCheckbox name="invalidCheck" isChecked={formData.invalidCheck} onChange={handleInputChange}>
          {t('upload.agreeRules')}
        </CustomCheckbox>
      </FormControl>

      {/* Submit Button */}
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
        {submitButtonText}
      </Button>
    </VStack>
  );
}

export default OlwestForm;
