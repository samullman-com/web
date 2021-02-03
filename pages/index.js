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
import theme from "../public/theme";
import Section from "../components/section";



function Index(props) {

  let examples = [
    {
      heading: "MUSIC PLAYER",
      link: "/music", 
      src: "/music.jpg", 
    }, 


    {
      heading: "GALLERY",
      link: "/gallery", 
      src: "/gallery.jpg", 
    }, 
    
    
  ]

  const [session, loading] = useSession()
  const [favorites, setFavorites] = useState([]);



  const client = require('contentful').createClient({
    space: props.CONTENTFUL_SPACE_ID,
    accessToken: props.CONTENTFUL_ACCESS_TOKEN,
  });



  async function fetchFavorites() {
    const entries = await client.getEntries({
      'content_type': 'favorites'
    })

    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
  }


  useEffect(() => {

    function setResize() {
      window.addEventListener('resize', () => {
        // We execute the same script as before
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      });
    }
    async function getFavorites() {
      const allFavorites = await fetchFavorites()
      setFavorites([...allFavorites])
    }
    getFavorites()
    setResize();
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
    <Layout title="Home | Agents of Change" noTop={true}>



      <Box className="hero" minHeight="-webkit-fill-available" position="relative">

        <VerticalAlign>
          <Container zIndex="5" position="relative" maxWidth="1100px" px={[0, 0, 10,]} >
            <Heading color="white" fontSize={[55, 75, 100, 115, 120]} textAlign={["center", "center", "left"]} >
              DISCOVER
              </Heading>

            <Heading color="white" fontSize={[55, 75, 100, 115, 120]} textAlign={["center", "center", "left"]} >
              YOUR
              </Heading>

            <Heading color="white" fontSize={[55, 75, 100, 115, 120]} textAlign={["center", "center", "left"]} >
              AGENCY

            <Box rounded="sm" height={"20px", "30px"} width={["20px", "30px"]} overflow="hidden" ml={4} display={["none", "none", "inline"]}>
                <Image
                  className="rounded"
                  src="/sam.jpg"
                  width={30}
                  height={30}


                  alt="sam"
                />
              </Box>
            </Heading>



            <Box borderRadius={30} height={[12, "60px"]} width={[12, "60px",]} overflow="hidden" margin={["20px auto"]} display={["block", "block", "none"]}>
              <Image
                className="rounded"
                src="/sam.jpg"
                width={60}
                height={60}


                alt="sam"
              />
            </Box>


          </Container>

        </VerticalAlign>

        <Box position="absolute" top={0} width="100%" height="100%" bottom={0}>

          <ProgressiveImage src="honeycomb.jpg" placeholder="honeycomb.jpg">
            {(src) => <img src={src} alt="Honeycomb" style={{ height: "100%", width: "100%", objectFit: "cover" }} />}
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


      <Section>
        
      </Section>


      <Box background="linear-gradient(to bottom, #EDF2F7, white)" height={[10, 20, 50, 100,]}>
      </Box>

      <Box py={[5, 10, 12]} px={[2, 5, 10]} bg="white">

        <Container maxWidth="1000px">

          <Heading textAlign="center" mb={[5, 10, 20]} color="#0a0a0a">
            WHAT COULD YOU BUILD?
        </Heading>


          <SimpleGrid columns={[3, 4, 5, 6]} spacing={[4, 8, 12]}>
            {
              favorites.map((el) => {
                return <Favorite el={el} />
              })
            }
          </SimpleGrid>
        </Container>

      </Box>

      <Box background="linear-gradient(to bottom, white, #EDF2F7)" height={[10, 20, 50, "60px",]}>
      </Box>

      <Section>

        <Container maxWidth="1200px" mb={10}>
          <SimpleGrid columns={[1, 2]} spacing={[4, 8, 12]}>
             {
               examples.map( ( el ) => { 
                 return <Link href={ el.link }>
                 <Box height={["200px", "300px", "400px"]} position="relative"  cursor="pointer">
                   <VerticalAlign>
                     <Heading textAlign="center" color="white" position="relative" zIndex={1}>
                        { el.heading }
                 </Heading>
                   </VerticalAlign>
   
                   <Box position="absolute" top={0} width="100%" height="100%" bottom={0} rounded="md" overflow="hidden">
   
                     <ProgressiveImage src={ el.src } placeholder={ el.src }>
                       {(src) => <img src={src} alt={ el.heading } style={{ height: "100%", width: "100%", objectFit: "cover" }} />}
                     </ProgressiveImage>
                   </Box>
   
                 </Box>
               </Link>
   
               })
             }
           



          </SimpleGrid>
        </Container>

        <Box textAlign="center">
          
          <Link href="examples">
          <Button colorScheme="red" rounded="full" size="lg">
            ALL EXAMPLES
          </Button>
          </Link>

        </Box>

      </Section>

      <Section>

      </Section>





    </Layout>
  )
}

export default Index;


const Favorite = (props) => {
  let fields = props.el.fields;

  return <ChakraLink href={fields.url} target="_blank" rel="noopener noreferrer" display="block" rounded="md" _hover={{ textDecor: "none" }}>
    <Box textAlign="center" p={1}>


      <Box rounded="full" height={["60px", "65px", "80px"]} width={["60px", "65px", "80px"]} overflow="hidden" borderWidth={2} margin="0 auto" mb={2}>
        <ChakraImage src={fields.images[0].fields.file.url} height="100%" width="100%" objectFit="cover" alt={fields.alt} />
      </Box>

      <Box size="sm" fontWeight={[500, 600]} color="gray.900" >
        {fields.title}
      </Box>

    </Box>
  </ChakraLink>
}


export async function getStaticProps(context) {
  let CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
  let CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;

  return {
    props: {
      CONTENTFUL_SPACE_ID,
      CONTENTFUL_ACCESS_TOKEN
    }, // will be passed to the page component as props
  }
}