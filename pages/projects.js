import Link from "next/link";
import { useState, useEffect } from "react"; 
import Image from "next/image";
import Layout from "../components/layout";
import HeaderImage from "../components/headerImage"
import ProgressiveImage from "../components/progressiveImage";
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



function Projects () {

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
    <Layout title="Projects | Discover Your Agency">
      <HeaderImage src="/projects.jpg" alt="Projects" darken="0.84" />
      
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


export default Projects;




const Project = ( props ) => {

  let fields = props.el.fields;

  return <ChakraLink href={ fields.url } target="_blank" rel="noopener noreferrer" _hover={{textDecor: "none"}} display="block" rounded="lg">
       <Box  rounded="lg" shadow="lg" shadow="lg" _active={{shadow: "sm"}} p={[2, 3, 5]} mb={[5, 5, 10]} height={[400, 400, 500,]} bg="white"  cursor="pointer">
                  <Box overflow="hidden" height="100%" rounded="sm">
                  <Box _hover={{transform: "scale(1.1)"}} position="relative" transition="0.5s ease" height="100%" overflow="hidden">
                  <Box position="relative" height="100%" rounded="sm" overflow="hidden">
                  <VerticalAlign>
                    {
                      fields.title.split(" ").map( word => {
                        return  <Heading textAlign="center" color="white" position="relative" letterSpacing={1} zIndex={5} fontSize={[35, 55, 60]} >
                        { word }
                    </Heading>
                      })
                    }


               
                </VerticalAlign>

                </Box>

                <Box position="absolute" height="100%" width="100%" top={0}>
                <ProgressiveImage 
          src={ "https:" + fields.heroImage.fields.file.url }
          alt={ fields.title }
          darken="0.84"
          />
          </Box>
                </Box>
                </Box>
                </Box>
  
  </ChakraLink>
}