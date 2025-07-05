import { Box, Flex, Image, Select } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

function Header() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    // Initialize language from localStorage or i18n
    const savedLanguage = localStorage.getItem('language') || i18n.language || 'en';
    setLanguage(savedLanguage);
    i18n.changeLanguage(savedLanguage);
  }, [i18n]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
    localStorage.setItem('language', lng); // Store language in localStorage
  };

  return (
    <Box
      as="header"
      bg="slate.800"
      color="slate.100"
      px={6}
      py={4}
      position="sticky"
      top={0}
      zIndex={10}
      boxShadow="lg"
      borderBottom="2px solid #57cbf8"
    >
      <Flex align="center" justify="space-between" maxW="1200px" mx="auto">
        <Image
          src="/logograalonline.webp"
          alt="Graal Online"
          style={{
            objectFit: 'contain',
            transition: 'transform 0.3s ease-in-out',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          draggable="false"
        />



        <Flex  alignItems="center">
          <Select
            onChange={(e) => changeLanguage(e.target.value)}
            value={language}
            width="120px"
            bg="slate.700"
            color="slate.100"
            borderColor="slate.600"
            _hover={{ borderColor: 'brand.500' }}
            _focus={{ borderColor: 'brand.500', boxShadow: '0 0 0 1px #667eea' }}
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
          </Select>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Header;