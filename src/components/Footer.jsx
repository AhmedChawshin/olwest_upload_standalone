import {
  Box,
  Text,
  HStack,
  Link as ChakraLink,
  VStack,
  Icon,
  Image,
} from '@chakra-ui/react';
import { FaTwitter, FaDiscord, FaFacebook, FaTiktok } from 'react-icons/fa';
import { TiSocialYoutube } from 'react-icons/ti';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
<Box
  as="footer"
  position="relative"
  overflow="hidden"
  bg="#000000"
  color="#d3c4a3"
  py={14}
  px={6}
  boxShadow="0 -6px 10px rgba(0, 0, 0, 0.8)" // shadow above
>

      {/* ✨ Stars (optional — can remove for deep cave) */}
      {[...Array(15)].map((_, i) => (
        <Box
          key={i}
          position="absolute"
          top={`${Math.random() * 65 + 5}px`}
          left={`${Math.random() * 90 + 5}%`}
          width="2px"
          height="2px"
          bg="whiteAlpha.700"
          borderRadius="full"
          animation="twinkle 2s ease-in-out infinite alternate"
          zIndex={1}
        />
      ))}

      <VStack spacing={6} zIndex={3} position="relative">
        <HStack spacing={8} justify="center">
          <ChakraLink href="https://twitter.com/GraalOnline" isExternal>
            <Icon
              as={FaTwitter}
              transition="all 0.3s"
              _hover={{ color: '#FFD700', filter: 'drop-shadow(0 0 5px #FFD700)' }}
              w={6}
              h={6}
            />
          </ChakraLink>
          <ChakraLink href="https://discord.gg/graalians" isExternal>
            <Icon
              as={FaDiscord}
              transition="all 0.3s"
              _hover={{ color: '#FFD700', filter: 'drop-shadow(0 0 5px #FFD700)' }}
              w={6}
              h={6}
            />
          </ChakraLink>
          <ChakraLink href="https://www.facebook.com/GraalOnlineOlWest/" isExternal>
            <Icon
              as={FaFacebook}
              transition="all 0.3s"
              _hover={{ color: '#FFD700', filter: 'drop-shadow(0 0 5px #FFD700)' }}
              w={6}
              h={6}
            />
          </ChakraLink>
          <ChakraLink href="https://www.youtube.com/@toonslab" isExternal>
            <Icon
              as={TiSocialYoutube}
              transition="all 0.3s"
              _hover={{ color: '#FFD700', filter: 'drop-shadow(0 0 5px #FFD700)' }}
              w={6}
              h={6}
            />
          </ChakraLink>
          <ChakraLink href="https://www.tiktok.com/@graalonlineofficial" isExternal>
            <Icon
              as={FaTiktok}
              transition="all 0.3s"
              _hover={{ color: '#FFD700', filter: 'drop-shadow(0 0 5px #FFD700)' }}
              w={6}
              h={6}
            />
          </ChakraLink>
        </HStack>

        <HStack spacing={6} justify="center" flexWrap="wrap">
          <ChakraLink
            href="https://support.toonslab.com/"
            isExternal
            _hover={{ color: '#FFD700', textShadow: '0 0 5px #FFD700' }}
          >
            {t('footer.support')}
          </ChakraLink>
          <ChakraLink
            href="https://graalonline.com/accounts/rules.php"
            isExternal
            _hover={{ color: '#FFD700', textShadow: '0 0 5px #FFD700' }}
          >
            {t('footer.rules')}
          </ChakraLink>
          <ChakraLink
            href="https://www.toonslab.com/"
            isExternal
            _hover={{ color: '#FFD700', textShadow: '0 0 5px #FFD700' }}
          >
            {t('footer.toonslab')}
          </ChakraLink>
        </HStack>

        <Text fontSize="sm" textAlign="center">
          {t('footer.copyright', { year })}
        </Text>
      </VStack>
    </Box>
  );
}

export default Footer;
