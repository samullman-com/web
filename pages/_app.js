import '../styles/globals.css'
import {
  Box, 
  ChakraProvider, 
} from "@chakra-ui/react"


function App ({ Component, pageProps }) {
  return <Box bg="gray.900">
  <ChakraProvider>
    <Component {...pageProps} />
  </ChakraProvider>
  </Box>

}

export default App
