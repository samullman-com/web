import Link from "next/link";
import { useState, useEffect } from "react"; 
import Image from "next/image";
import Layout from "../components/layout";
import ProgressiveImage from "react-progressive-graceful-image";
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { VscGlobe } from "react-icons/vsc"
import { ImReddit } from "react-icons/im"

import {
  Box,
  Container,
  Divider,
  Grid,
  Heading,
  Button, 
  ButtonGroup, 
  Text,
  Link as ChakraLink, 
  Image as ChakraImage,
  IconButton, 

} from "@chakra-ui/react";

import VerticalAlign from "../components/verticalAlign";


const client = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "c13ag7zvuwi0",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "G7mSw24UXPM5SZVYnkNuP3_aHgicnABLTztJ_mAQYVU",
});



function About() {

  const [work, setWork] = useState([]);

  async function fetchWork() {
    const entries = await client.getEntries({
      'content_type': 'portfolioItem'
    })

    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
  }


  useEffect(() => {
    
    async function getWork() {
      const allWork = await fetchWork()
      setWork([...allWork])
    }

    getWork()
  }, [])


  return (
    <Layout title="Work">

      <Box  py={[5, 10, 12]} px={[3, 5, 10]} bg="gray.100">

          <Container maxW="1200px" >
            <Heading mb={6} size="xl">
              Work
              </Heading>

            {
              work.map((el, idx) => {
                return <Work el={el} idx={ idx } />
              })
            }





          </Container>

      </Box>


    </Layout> 
  )
}


export default About;




const Work = ( props ) => {

  let fields = props.el.fields;

  return <ChakraLink href={ fields.url } target="_blank" rel="noopener noreferrer" _hover={{textDecor: "none"}} display="block" rounded="lg">

  
  <Box bg="white" p={4} rounded="lg" shadow="lg" mb={6} position="relative" _active={{shadow: "sm"}} >
      <Box position="absolute" top={0} left={0} width="100%" height="100%">

      </Box>
      

      <Box rounded="sm" height={["300px",  "400px", "500px"]}  overflow="hidden"  mb={2}>
        <iframe src={ fields.url } height="100%" width="100%" frameBorder="none" style={{zIndex: -1}} />
      </Box>
      
      <Heading mb={ 2 }>
        { fields.title }
      </Heading>

      <Box display="none">
        { documentToReactComponents( fields.description ) }
      </Box>

  </Box>
  </ChakraLink>
}