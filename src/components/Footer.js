import { Box, Text, HStack, Link as ChakraLink, VStack, Icon } from '@chakra-ui/react';
import { FaTwitter, FaDiscord, FaFacebook, FaTiktok } from 'react-icons/fa';
import { TiSocialYoutube } from 'react-icons/ti';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <Box
      as="footer"
      bg="rgba(59, 47, 47, 0.9)" 
      color="#F5DEB3"
      py={10}
      px={6}
      borderTop="4px double #D2B48C" 
      backgroundRepeat="repeat, no-repeat"
      backgroundBlendMode="overlay"
    >
      <VStack spacing={6}>
        <HStack spacing={8} justify="center">
          <ChakraLink href="https://twitter.com/GraalOnline" isExternal>
            <Icon
              as={FaTwitter}
              _hover={{ color: '#FFD700', filter: 'drop-shadow(0 0 5px rgba(255, 215, 0, 0.5))' }} // Golden glow on hover
              transition="all 0.3s"
              w={6}
              h={6}
            />
          </ChakraLink>
          <ChakraLink href="https://discord.gg/graalians" isExternal>
            <Icon
              as={FaDiscord}
              _hover={{ color: '#FFD700', filter: 'drop-shadow(0 0 5px rgba(255, 215, 0, 0.5))' }}
              transition="all 0.3s"
              w={6}
              h={6}
            />
          </ChakraLink>
          <ChakraLink href="https://www.facebook.com/GraalOnlineOlWest/" isExternal>
            <Icon
              as={FaFacebook}
              _hover={{ color: '#FFD700', filter: 'drop-shadow(0 0 5px rgba(255, 215, 0, 0.5))' }}
              transition="all 0.3s"
              w={6}
              h={6}
            />
          </ChakraLink>
          <ChakraLink href="https://www.youtube.com/@toonslab" isExternal>
            <Icon
              as={TiSocialYoutube}
              _hover={{ color: '#FFD700', filter: 'drop-shadow(0 0 5px rgba(255, 215, 0, 0.5))' }}
              transition="all 0.3s"
              w={6}
              h={6}
            />
          </ChakraLink>
          <ChakraLink href="https://www.tiktok.com/@graalonlineofficial" isExternal>
            <Icon
              as={FaTiktok}
              _hover={{ color: '#FFD700', filter: 'drop-shadow(0 0 5px rgba(255, 215, 0, 0.5))' }}
              transition="all 0.3s"
              w={6}
              h={6}
            />
          </ChakraLink>
        </HStack>
        <HStack spacing={6} justify="center" flexWrap="wrap">
          <ChakraLink
            href="https://support.toonslab.com/"
            _hover={{ color: '#FFD700', textShadow: '0 0 5px rgba(255, 215, 0, 0.5)' }}
            transition="all 0.3s"
            isExternal
          >
            {t('footer.support')}
          </ChakraLink>
          <ChakraLink
            href="https://graalonline.com/accounts/rules.php"
            _hover={{ color: '#FFD700', textShadow: '0 0 5px rgba(255, 215, 0, 0.5)' }}
            transition="all 0.3s"
            isExternal
          >
            {t('footer.rules')}
          </ChakraLink>
          <ChakraLink
            href="https://www.toonslab.com/"
            _hover={{ color: '#FFD700', textShadow: '0 0 5px rgba(255, 215, 0, 0.5)' }}
            transition="all 0.3s"
            isExternal
          >
            {t('footer.toonslab')}
          </ChakraLink>
        </HStack>
        <Text
          fontSize="sm"
        >
          {t('footer.copyright', { year })}
        </Text>
      </VStack>
    </Box>
  );
}

export default Footer;