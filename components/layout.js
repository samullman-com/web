import { Component } from "react";

import Head from 'next/head';
import Header from "../components/header";
import Footer from "../components/footer";




import {
  Box, 
  Button, 
} from "@chakra-ui/react";

import { BiUpArrowAlt } from "react-icons/bi";
import ScrollToTop from "react-scroll-to-top";


function Layout ( props )  {
 



    return <>
    <Head>
      <title>{ props.title }</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />

    <Box pt={[ "60px", "60px", "70px"]} > 

    <ScrollToTop smooth color="#6f00ff" component={ 
      <Button textAlign="center" width="40px" p={0} fontSize={24} variant="ghost">
      <BiUpArrowAlt /> 
      </Button>
    } />


    <main>
        { props.children }
    </main>
    </Box>
    
    <Box id="attributions" position="absolute" bottom="0" zIndex="-1" height="0" opacity="0">
    <a href='https://www.freepik.com/vectors/background'>Background vector created by freepik - www.freepik.com</a>    
    </Box>


    <Footer />
  </>

    
}

export default Layout;