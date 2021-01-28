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

  const [projects, setProjects] = useState([]);

  async function fetchProjects() {
    const entries = await client.getEntries({
      'content_type': 'project'
    })

    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
  }


  useEffect(() => {
    
    async function getProjects() {
      const allProjects = await fetchProjects()
      setProjects([...allProjects])
    }

    getProjects()
  }, [])


  return (
    <Layout title="Projects">

      <Box  py={[5, 10, 12]} px={[3, 5, 10]} bg="gray.100">

          <Container maxW="1200px" >
            <Heading mb={6} size="xl">
              Projects
              </Heading>

            {
              projects.map((el, idx) => {
                return <Project el={el} idx={ idx } />
              })
            }





          </Container>

      </Box>


    </Layout> 
  )
}


export default About;




const Project = ( props ) => {

  let buttonColors = ["blue", "purple", "orange"]
  let fields = props.el.fields;

  return <ChakraLink href={ fields.url } target="_blank" rel="noopener noreferrer" _hover={{textDecor: "none"}} display="block" rounded="lg">

  
  <Box bg="white" p={6} rounded="lg" shadow="lg" mb={6} >

      

      <Box rounded="lg" height={["300px",  "400px", "500px"]}  overflow="hidden"  mb={2}>
        <ChakraImage src={ fields.images[0].fields.file.url } height="100%" width="100%" objectFit="cover" alt={ fields.alt } />
      </Box>
      
      <Heading mb={ 2 }>
        { fields.title }
      </Heading>

      <Box >
        { documentToReactComponents( fields.description ) }
      </Box>

      


      <ButtonGroup float={["none", "none", "right"]} display="none">
        <IconButton rounded="full" icon={ <ImReddit /> }>
          
        </IconButton>

      </ButtonGroup>



  </Box>
  </ChakraLink>
}