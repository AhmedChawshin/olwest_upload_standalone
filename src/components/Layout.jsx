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
      400: '#D2B48C', 
      500: '#4A3728', 
      600: '#3B2F2F', 
      700: '#FFD700', 
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
  styles: {
    global: {
      body: {
        bg: '#41392e',
      },
    },
  }
});


function Layout({ children }) {
  return (
    <TranslationProvider>
      <ChakraProvider theme={theme}>
        <Header />
        {children}
        <Footer />
      </ChakraProvider>
    </TranslationProvider>
  );
}

export default Layout;