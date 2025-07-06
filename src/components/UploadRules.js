import {
  Box, HStack, Icon, Link, Text, VStack,
  Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon,
  useBreakpointValue,
} from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';
import { useTranslation } from 'react-i18next';

function UploadRules() {
  const { t } = useTranslation();
  const isMobile = useBreakpointValue({ base: true, md: false });

  const RulesContent = () => (
    <>
      <Text fontSize="sm" color="gray.300" mb={2}>
        {t('upload.rulesIntro')}{' '}
        <Link
          href="https://docs.google.com/document/d/1May3jjOOMm8_5q7WeZF_qtkKgqR_WrrtOuxq_OUWH0I/edit?usp=sharing"
          isExternal
          color="#D2B48C"
          _hover={{ color: '#FFD700', filter: 'drop-shadow(0 0 5px #FFD700)' }}
        >
          {t('upload.rulesLink')}
        </Link>{' '}
        {t('upload.rulesIntro2')}
      </Text>

      <Text fontSize="sm" color="gray.300" mb={3}>
        {t('upload.rulesEnsure')}
      </Text>

      <VStack align="start" spacing={2} fontSize="sm" color="gray.300">
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <Text key={i}>
            • <strong>{t(`upload.rule${i}`)}</strong>{' '}
            {t(`upload.rule${i}Detail`)}
          </Text>
        ))}
      </VStack>
    </>
  );

  return (
    <Box
      bg="rgba(255, 255, 255, 0.05)"
      backdropFilter="blur(10px)"
      p={4}
      borderRadius="lg"
      boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
      border="1px solid rgba(255, 255, 255, 0.1)"
      mt={6}
    >
      <HStack spacing={2} mb={2}>
        <Icon as={InfoIcon} color="#D2B48C" />
        <Text fontSize="md" fontWeight="bold" color="white">
          {t('upload.rulesTitle')}
        </Text>
      </HStack>

      {isMobile ? (
        <Accordion allowToggle>
          <AccordionItem border="none">
            <AccordionButton px={0}>
              <Box as="span" flex="1" textAlign="left" color="#D2B48C" fontSize="sm">
                {t('upload.viewRules')}
              </Box>
              <AccordionIcon color="#D2B48C" />
            </AccordionButton>
            <AccordionPanel px={0} pt={3} pb={1}>
              <RulesContent />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      ) : (
        <Box mt={2}>
          <RulesContent />
        </Box>
      )}
    </Box>
  );
}

export default UploadRules;
