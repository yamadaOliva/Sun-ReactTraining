import Header from './components/Header/header.js';
import { ChakraProvider } from '@chakra-ui/react'
import { theme as customTheme } from './style/theme'
function App() {
  return (
   <ChakraProvider resetCSS theme={customTheme}>
      <Header />
    </ChakraProvider>
  );
}

export default App;
