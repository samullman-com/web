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

    <Box  minHeight="75vh" bg="gray.100"> 

    <ScrollToTop smooth={ true } color="#6f00ff" background="#000" component={ 
      <Box textAlign="center"  fontSize={24} >
      <BiUpArrowAlt style={{display: "inline-block", position: "relative", bottom: 2}} /> 
      </Box>
    } />


    <main >
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