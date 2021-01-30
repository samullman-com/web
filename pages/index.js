import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react"; 
import Layout from "../components/layout";
import ProgressiveImage from "react-progressive-graceful-image";
import { signIn, signOut, useSession } from 'next-auth/client'


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
  space: process.env.CONTENTFUL_SPACE_ID || "c13ag7zvuwi0",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "G7mSw24UXPM5SZVYnkNuP3_aHgicnABLTztJ_mAQYVU", 
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
        <Box py={["100px", "120px","14vh"]}  position="relative">

        <VerticalAlign>
          <Container zIndex="5" position="relative" maxW="1200px" mb={[0, 0, 0, 6]} px={3} >
            <Heading color="white" fontSize={[40, 55, 85, 95,  105]} textAlign={["center", "center", "left"]} >
            RETHINKING THE WAY ORGANIZATIONS DO DIGITAL


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

            <Box borderRadius={30} height={[12, "60px"] } width={[12, "60px", ]} overflow="hidden"  margin={["20px auto"]} display={["block", "block", "none"]}>
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


        <Box background="linear-gradient(to bottom, #EDF2F7, white)" height={[10, 20, 50, 100, 120]}>
        </Box>

        <Box py={[5, 10, 12]} px={[2, 5, 10]} bg="white">

          <Container maxWidth="1100px">
          <SimpleGrid columns={[3, 4, 5, 6]} spacing={[4, 8, 12]}>
            {
              favorites.map( ( el ) => {
                return <Favorite el={ el } />
              })
            }
          </SimpleGrid>
          </Container>

        </Box>

        <Box background="linear-gradient(to bottom, white, #EDF2F7)" height={[10, 20, 50, 100, 120]}>
        </Box>




        
    </Layout>
  )
}

export default Index;


const Favorite = ( props ) => {
  let fields = props.el.fields;

  return <ChakraLink href={ fields.url } target="_blank" rel="noopener noreferrer" display="block" rounded="md" _hover={{textDecor: "none"}}>
  <Box  textAlign="center" p={1}>

      
      <Box rounded="full" height={["60px",  "65px", "80px"]} width={["60px", "65px", "80px"]} overflow="hidden" borderWidth={ 2 } margin="0 auto" mb={2}>
        <ChakraImage src={ fields.images[0].fields.file.url } height="100%" width="100%" objectFit="cover" alt={ fields.alt } />
      </Box>
      
      <Box size="sm" fontWeight={[500, 600]} >
        { fields.title }
      </Box>
      
  </Box>
  </ChakraLink>
}