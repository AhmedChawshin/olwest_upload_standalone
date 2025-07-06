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
      bg="#3B2F2F"
      color="#F5DEB3"
      py={14}
      px={6}
      borderTop="4px double #D2B48C"
    >
      {/* 🌙 Moon */}
      <Box
        position="absolute"
        top="20px"
        right="40px"
        width="60px"
        height="60px"
        bg="#e0e0e0"
        borderRadius="full"
        boxShadow="0 0 20px 8px rgba(255, 255, 255, 0.2)"
        animation="moonPulse 6s ease-in-out infinite"
        zIndex={1}
      />

      {/* ✨ Stars */}
      {[...Array(10)].map((_, i) => (
        <Box
          key={i}
          position="absolute"
          top={`${Math.random() * 30 + 5}px`}
          left={`${Math.random() * 90 + 5}%`}
          width="2px"
          height="2px"
          bg="whiteAlpha.700"
          borderRadius="full"
          animation="twinkle 2s ease-in-out infinite alternate"
          zIndex={1}
        />
      ))}
      {/* ☁️ Clouds */}
      <Image
        src="/footer/cloud.png"
        alt="Cloud"
        position="absolute"
        top="20px"
        left="0"
        width="100px"
        opacity={0.4}
        animation="cloudMove 60s linear infinite"
        imageRendering="pixelated"
        draggable={false}
        zIndex={1}
      />
      <Image
        src="/footer/cloud.png"
        alt="Cloud"
        position="absolute"
        top="60px"
        left="30%"
        width="120px"
        opacity={0.3}
        animation="cloudMove 80s linear infinite reverse"
        imageRendering="pixelated"
        draggable={false}
        zIndex={1}
      />
      <Image
        src="/footer/cloud.png"
        alt="Cloud"
        position="absolute"
        top="35px"
        left="60%"
        width="90px"
        opacity={0.2}
        animation="cloudMove 100s linear infinite"
        imageRendering="pixelated"
        draggable={false}
        zIndex={1}
      />

      {/* Animated Sand Layer */}
      <Box
        position="absolute"
        bottom="0"
        left="0"
        width="100%"
        height="15px"
        bg="repeating-linear-gradient(
          -45deg,
          #DEB887,
          #DEB887 8px,
          #D2B48C 8px,
          #D2B48C 16px,
          #CDBA96 16px,
          #CDBA96 24px
        )"
        opacity={0.7}
        filter="url(#noiseFilter)"
        zIndex={1}
      />
      <svg width="0" height="0">
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.25"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0.2" />
          <feBlend mode="soft-light" in2="SourceGraphic" />
        </filter>
      </svg>
      {/* Tumbleweed */}
      <Box
        position="absolute"
        bottom="3px"
        right="-60px"
        width="30px"
        height="50px"
        backgroundImage="url(/footer/tumbleweed.png)"
        backgroundSize="contain"
        backgroundRepeat="no-repeat"
        animation="tumbleRoll 20s linear infinite"
        zIndex={2}
      />
      {/*  Cactus and Camel */}
      <Image
        src="/footer/cactus1.png"
        alt="Pixel Cactus 1"
        position="absolute"
        bottom="0px"
        left="10px"
        width={["35px", "45px", "55px"]}
        imageRendering="pixelated"
        opacity={0.9}
        pointerEvents="none"
        userSelect="none"
        zIndex={2}
      />
      <Image
        src="/footer/cactus2.png"
        alt="Pixel Cactus 2"
        position="absolute"
        bottom="0px"
        left="70px"
        width={["30px", "40px", "50px"]}
        imageRendering="pixelated"
        opacity={0.8}
        pointerEvents="none"
        userSelect="none"
        zIndex={1}
      />
      <Image
        src="/footer/camel.png"
        alt="Pixel Camel"
        position="absolute"
        bottom="0"
        right="20px"
        width={["50px", "65px", "80px"]}
        imageRendering="pixelated"
        opacity={0.95}
        pointerEvents="none"
        userSelect="none"
        zIndex={2}
      />

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