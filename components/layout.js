import { initGA, logPageView } from '../utils/analytics'

import Head from 'next/head';
import Header from "../components/header";
import Footer from "../components/footer";




import {
  Box, 
  Button, 
} from "@chakra-ui/react";

import { BiUpArrowAlt } from "react-icons/bi";
import ScrollToTop from "react-scroll-to-top";


class Layout extends React.Component  {
  componentDidMount ()  {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }

  
  render () {

    return < >
    <Head>
      <title>{ this.props.title }</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />

    <Box pt={[ "60px", "60px", "70px"]} bg="gray.100"> 

    <ScrollToTop smooth color="#6f00ff" component={ 
      <Button textAlign="center" width="40px" p={0} fontSize={24} variant="ghost">
      <BiUpArrowAlt /> 
      </Button>
    } />


    <main>
        { this.props.children }
    </main>
    </Box>

    <Footer />
  </>

  }
    
}

export default Layout;