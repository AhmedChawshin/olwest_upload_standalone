import { Box, HStack, Icon, Link, Text, VStack } from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';
import { useTranslation } from 'react-i18next';

function UploadRules() {
  const { t } = useTranslation();

  const renderRules = () => {
        return (
          <>
            <Text fontSize="sm" color="gray.300" mb={4}>
              {t('upload.rulesIntro')}
              <Link
                href="https://docs.google.com/document/d/1wqa3O6gsO_zY_BK04ETiiRkbOmHR-0dBm_ZHiSm54i8/edit"
                isExternal
                color="#7f9cf5"
              >
                {t('upload.rulesLink')}
              </Link>
              {t('upload.rulesIntro2')}
            </Text>
            <Text fontSize="sm" color="gray.300" mb={4}>
              {t('upload.rulesEnsure')}
            </Text>
            <VStack align="start" spacing={3} fontSize="sm" color="gray.300">
              <Text>
                • <strong>{t('upload.rule1')}</strong>{' '}
                {t('upload.rule1Detail')}
              </Text>
              <Text>
                • <strong>{t('upload.rule2')}</strong>{' '}
                {t('upload.rule2Detail')}
              </Text>
              <Text>
                • <strong>{t('upload.rule3')}</strong>{' '}
                {t('upload.rule3Detail')}
              </Text>
              <Text>
                • <strong>{t('upload.rule4')}</strong>{' '}
                {t('upload.rule4Detail')}
              </Text>
              <Text>
                • <strong>{t('upload.rule5')}</strong>{' '}
                {t('upload.rule5Detail')}
              </Text>
              <Text>
                • <strong>{t('upload.rule6')}</strong>{' '}
                {t('upload.rule6Detail')}
              </Text>
              <Text>
                • <strong>{t('upload.rule7')}</strong>{' '}
                {t('upload.rule7Detail')}
              </Text>
            </VStack>
          </>
        );
  };

  return (
    <Box
      bg="rgba(255, 255, 255, 0.05)"
      backdropFilter="blur(10px)"
      p={6}
      borderRadius="lg"
      boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
      border="1px solid rgba(255, 255, 255, 0.1)"
      mt={6}
    >
      <HStack spacing={2} mb={4}>
        <Icon as={InfoIcon} color="#7f9cf5" />
        <Text fontSize="lg" fontWeight="bold" color="white">
          {t('upload.rulesTitle')}
        </Text>
      </HStack>
      {renderRules()}
    </Box>
  );
}

export default UploadRules;