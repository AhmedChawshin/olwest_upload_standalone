import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import TranslationProvider from './TranslationProvider';
import Header from './Header';
import Footer from './Footer';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      400: '#7f9cf5',
      500: '#667eea',
      600: '#764ba2',
    },
    slate: {
      800: '#1e293b',
      100: '#e2e8f0',
    },
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
});

function Layout({ children }) {
  return (
    <ChakraProvider theme={theme}>
      <TranslationProvider>
        <Header />
        {children}
        <Footer />
      </TranslationProvider>
    </ChakraProvider>
  );
}

export default Layout;