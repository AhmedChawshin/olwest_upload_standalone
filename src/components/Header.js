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
      bgColor="rgba(59, 47, 47)"
      color="#F5DEB3"
      px={6}
      py={4}
      position="sticky"
      top={0}
      zIndex={10}
      boxShadow="0 4px 6px rgba(0, 0, 0, 0.3)"
      borderBottom="4px double #D2B48C"
      fontFamily="'Cinzel', serif"
      backgroundSize="cover, 40px, 40px"
      backgroundRepeat="repeat, no-repeat, no-repeat"
      backgroundBlendMode="overlay"
    >
      <Flex align="center" justify="space-between" maxW="1200px" mx="auto">
        <Flex align="center" gap={3}>
          <Image
            src="/logo192.png"
            width={55}
            alt="Graal Online"
            style={{
              objectFit: 'contain',
              transition: 'transform 0.3s ease-in-out, filter 0.3s ease-in-out',
              cursor: 'pointer',
              filter: 'drop-shadow(0 0 5px rgba(210, 180, 140, 0.7))',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.filter = 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.8))';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.filter = 'drop-shadow(0 0 5px rgba(210, 180, 140, 0.7))';
            }}
            draggable="false"
          />
          <Text
            fontSize="xl"
            fontWeight="bold"
            color="#F5DEB3"
            textShadow="2px 2px 4px rgba(0, 0, 0, 0.4), 0 0 10px rgba(255, 215, 0, 0.3)"
            transition="transform 0.3s ease-in-out, text-shadow 0.3s ease-in-out"
          >
            GraalOnline Ol'west
          </Text>
        </Flex>

        <Flex alignItems="center">
          <Select
            onChange={(e) => changeLanguage(e.target.value)}
            value={language}
            width="120px"
            bg="#3C2F2F"
            color="#F5DEB3"
            borderColor="#D2B48C"
            borderRadius="md"
            fontFamily="'Cinzel', serif"
            sx={{
              '& option': {
                color: '#F5DEB3',
                opacity: 0.9,
              },
            }}
            _hover={{ borderColor: '#FFD700', bg: '#4A3728' }}
            _focus={{ borderColor: '#FFD700', boxShadow: '0 0 0 2px #FFD700' }}
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
