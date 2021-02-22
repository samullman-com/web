import '../styles/globals.css'
import {
  Box, 
  ChakraProvider, 
} from "@chakra-ui/react"

import userbase from "userbase-js";
import theme from "../public/theme";
import { useState, useEffect } from 'react';
import Session from "../contexts/session";

function App ({ Component, pageProps }) {
  const session = Session( state => state );
  const [loading, setLoading] = useState( true );

  useEffect( () => {
    userbase.init({ appId: `a95ce02e-0329-4db6-8761-a71bf162db8e` }).then( (data) => {
      session.setSession( data );
      session.setUser( data.user );
      setLoading( false );
    });
  }, [])

  return <ChakraProvider >
    <Component {...pageProps} loading={ loading } />
  </ChakraProvider>

}

export default App
