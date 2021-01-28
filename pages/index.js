import Link from "next/link";
import Image from "next/image";
import { useState } from "react"; 
import Layout from "../components/layout";
import ProgressiveImage from "react-progressive-graceful-image";
import { signIn, signOut, useSession } from 'next-auth/client'

import { useEffect } from "react";

import { DateTime } from "luxon";
import { FiChevronDown, FiSend } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { 
  ImArrowDown
} from "react-icons/im";

import {
  Box, 
  ButtonGroup, 
  Button, 
  Container, 
  Heading,
  Link as ChakraLink,
  SimpleGrid, 
  Image as ChakraImage, 
} from "@chakra-ui/react";
import VerticalAlign from "../components/verticalAlign";
import jump from "jump.js";

const client = require('contentful').createClient({
  space: "c13ag7zvuwi0",
  accessToken: "_UNNrrzKRSlOWNGTHJtQBmsreKGeaNZGqTyVtfQVA-8",
});


function Index ()  {

  const [ session, loading ] = useSession()
  const [ favorites, setFavorites ] = useState([]);

  async function fetchFavorites() {
    const entries = await client.getEntries({
      'content_type': 'favorites'
    })

    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
  }


  useEffect(() => {
    async function getFavorites() {
      const allFavorites = await fetchFavorites()
      setFavorites([...allFavorites])
    }
    getFavorites()
  }, [])
  
  // let end = DateTime.fromISO( DateTime.local() )
  // let start = DateTime.fromISO('2015-02-01');
  // let diffs = end.diff(start, ['years', 'months', 'days', 'hours', 'minutes', 'seconds']);

  // let [time, setTime ] = useState( diffs.toObject() )
  
  // function countUp () {
  //   let end2 = DateTime.fromISO( DateTime.local() );
  //   let start2 = DateTime.fromISO('2015-02-01');
  //   let diffs2 = end.diff(start, ['years', 'months', 'days', 'hours', 'minutes', 'seconds']);
  //   setTime( diffs.toObject() )
  // }

  // setInterval(countUp, 1000);
  
  return (
    <Layout title="Home">
        <Box py={["100px", "120px","14vh"]} position="relative">

        <VerticalAlign>
          <Container zIndex="5" position="relative" maxW="1200px" mb={[0, 0, 0, 6]} >
            <Heading color="white" fontSize={[40, 55, 85, 95,  105]} textAlign={["center", "center", "left"]} >
            CHANGING THE WAY ORGANIZATIONS DO DIGITAL


            <Box borderRadius={30} height={"20px", "30px"} width={["20px", "30px"]} overflow="hidden"  ml={4} display={["none", "none", "inline"]}>
                    <Image
                    className="rounded"
        src="/sam.jpg"
        width={ 30  }
        height={ 30 }
        
        
        alt="sam"
      />
                    </Box>
            </Heading>

            <Box borderRadius={30} height={["60px"] } width={["60px", ]} overflow="hidden"  margin={["20px auto"]} display={["block", "block", "none"]}>
                    <Image
                    className="rounded"
        src="/sam.jpg"
        width={ 60  }
        height={ 60 }
        
        
        alt="sam"
      />
                    </Box>

           
          </Container>
          
        </VerticalAlign>
        
        <Box position="absolute" top={0} width="100%" height="100%" bottom={0}>

        <ProgressiveImage src="stars.jpg" placeholder="stars.jpg">
  {(src) => <img src={src} alt="Stars" style={{height: "100%", width: "100%", objectFit: "cover" }} />}
</ProgressiveImage>
</Box>


        {/* <Image
          src="/stars.jpg"
          loading="eager"
          layout="fill"
          objectFit="cover"
          alt="Stars"
          
        /> */}
        
        
        
        </Box>

        <Box  py={[5, 10, 12]} px={[5, 5, 10]} bg="gray.100">
          <Container maxW="1000px" bg="white" rounded="lg" p={ 6 } shadow="lg">
            <Heading mb={6}>
              Welcome to the Progressive Web. 
            </Heading>

            <Box >
              <ChakraLink href="https://jamstack.org/" target="_blank" rel="noopener noreferrer" rounded="md">
              JAMStack</ChakraLink> tooling has allowed indepedent developers to continuously deploy Progressive Web Applications targeting all screen sizes (Desktop, Tablet, and Mobile). 
            </Box>
          </Container>


        </Box>

        <Box textAlign="center" background="linear-gradient(to bottom, #EDF2F7, white)" >
          <VerticalAlign>
          <Box display="inline-block" fontSize={[80, 120, 150, 200]} color="blue.800" cursor="pointer">
          <ImArrowDown />
          </Box>
          </VerticalAlign>
        </Box>

        <Box py={[5, 10, 12]} px={[2, 5, 10]} bg="white">

          <Container maxWidth="1000px">
          <SimpleGrid columns={[3, 4, 5, 6]} spacing={[4, 8, 12]}>
            {
              favorites.map( ( el ) => {
                return <Favorite el={ el } />
              })
            }
          </SimpleGrid>
          </Container>

        </Box>

        <Box textAlign="center" background="linear-gradient(to bottom, white, #EDF2F7)" >
          <VerticalAlign>
          <Box display="inline-block" fontSize={[80, 120, 150, 200]} color="blue.800" cursor="pointer">
          <ImArrowDown />
          </Box>
          </VerticalAlign>
        </Box>

        <Box  py={[5, 10, 12]} px={[5, 5, 10]} bg="gray.100">
          <Container maxW="1000px" bg="white" rounded="lg" p={ 6 } shadow="lg">
            <Heading mb={6}>
              Welcome to the Progressive Web. 
            </Heading>

            <Box >
              <ChakraLink href="https://jamstack.org/" target="_blank" rel="noopener noreferrer" rounded="md">
              JAMStack</ChakraLink> tooling has allowed indepedent developers to continuously deploy Progressive Web Applications targeting all screen sizes (Desktop, Tablet, and Mobile). 
            </Box>
          </Container>


        </Box>



        
    </Layout>
  )
}

export default Index;


const Favorite = ( props ) => {
  let fields = props.el.fields;

  console.log(  fields )
  return <Box  textAlign="center">

      <ChakraLink href={ fields.url } target="_blank" rel="noopener noreferrer">
      <Box rounded="full" height="80px" width="80px" overflow="hidden" borderWidth={ 2 } margin="0 auto" mb={2}>
        <ChakraImage src={ fields.images[0].fields.file.url } height="100%" width="100%" objectFit="cover" />
      </Box>
      
      <Heading size="sm">
        { fields.title }
      </Heading>
      </ChakraLink>


    
  </Box>
}