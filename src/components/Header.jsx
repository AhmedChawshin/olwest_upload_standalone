import { Box, Flex, Image, Select, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

function Header() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || 'en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage);
      setLanguage(savedLanguage);
    }
  }, [i18n]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng).then(() => {
      setLanguage(lng);
      localStorage.setItem('language', lng);
    });
  };

  return (
<Box
  as="header"
  bg="#1e1e1e" // dark rocky cave background
  color="#d3c4a3" // bone white text
  px={6}
  py={4}
  position="sticky"
  top={0}
  zIndex={10}
  boxShadow="0 6px 10px rgba(0, 0, 0, 0.9)"  // stronger black shadow below
  fontFamily="'Cinzel', serif"
>

      <Flex align="center" justify="space-between" maxW="1200px" mx="auto">
        <Flex align="center" gap={3}>
          <Image
            src="delteriaLogo.webp"
            width={55}
            alt="Graal Online"
            style={{
              objectFit: 'contain',
              transition: 'transform 0.3s ease-in-out, filter 0.3s ease-in-out',
              cursor: 'pointer',
              filter: 'drop-shadow(0 0 6px rgba(139, 115, 85, 0.6))',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.filter = 'drop-shadow(0 0 10px rgba(210, 180, 140, 0.7))';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.filter = 'drop-shadow(0 0 6px rgba(139, 115, 85, 0.6))';
            }}
            draggable="false"
          />
          <Text
            fontSize="xl"
            fontWeight="bold"
            textShadow="2px 2px 4px rgba(0, 0, 0, 0.7)"
          >
            GraalOnline Delteria
          </Text>
        </Flex>

        <Flex alignItems="center">
          <Select
            onChange={(e) => changeLanguage(e.target.value)}
            value={language}
            width="120px"
            bg="#2a2a2a"
            color="#d3c4a3"
            borderColor="#8b7d6b"
            borderRadius="md"
            fontFamily="'Cinzel', serif"
            _hover={{ borderColor: '#a89f91', bg: '#353535' }}
            _focus={{ borderColor: '#a89f91', boxShadow: '0 0 0 2px #a89f91' }}
          >
            <option value="en">English</option>
            <option value="pt">Português</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
          </Select>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Header;
