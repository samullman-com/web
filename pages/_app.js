import '../styles/globals.css'
import {
  Box, 
  ChakraProvider, 
} from "@chakra-ui/react"
import theme from "../public/theme";

function App ({ Component, pageProps }) {

  return <ChakraProvider theme={ theme }>
    <Component {...pageProps} />
  </ChakraProvider>

}

export default App
