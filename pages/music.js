import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";
import Section from "../components/section";
import VerticalAlign from "../components/verticalAlign";
import ReactPlayer from 'react-player'

import {
  Box,
  Container,
  Divider,
  Grid,
  Heading,
  Text,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";

import { useState,  } from "react";
import { BsPlayFill } from "react-icons/bs"

// import SimplexNoise from "simplex-noise";
// import three, { OrbitControls } from "three";


function Music() {

  const [ currentSong, setCurrentSong ] = useState("https://www.youtube.com/watch?v=1hKSuXECnA4")

  const items = [
    {
      id: "ghost",
      title: "Ghost Remix", 
      artist: "Ella Henderson",
      url: "https://www.youtube.com/watch?v=1hKSuXECnA4",
    }, 


   
    {
      id: "dollar", 
      title: "How Much A Dollar", 
      artist: "Kendrick Lamar",
      url: "https://www.youtube.com/watch?v=y8kEiL81_R4",
    }, 

    {
      id: "moonlight", 
      title: "Moonlight", 
      artist: "Grace Vanderwaal",
      url: "https://www.youtube.com/watch?v=swTki-Klk3g",
    },

    {
      id: "good", 
      title: "Only The Good Di...", 
      artist: "Billy Joel",
      url: "https://www.youtube.com/watch?v=Crif5E67ar0",
    },

    {
      id: "praise", 
      title: "Praise You", 
      artist: "Fatboy Slim",
      url: "https://www.youtube.com/watch?v=ruAi4VBoBSM",
    },

    {
      id: "heat", 
      title: "Heat Waves", 
      artist: "Glass Animals",
      url: "https://www.youtube.com/watch?v=mRD0-GxqHVo",
    },


    {
      id: "nights", 
      title: "Nights Like This", 
      artist: "Loud Luxury",
      url: "https://www.youtube.com/watch?v=VJhdfwLjaSI",
    },


    {
      id: "bloom", 
      title: "In Bloom", 
      artist: "Nirvana",
      url: "https://www.youtube.com/watch?v=PbgKEjNBHqM",
    },

    {
      id: "prodigy", 
      title: "Prodigy", 
      artist: "Luca Stricagnoli",
      url: "https://www.youtube.com/watch?v=CIpOxa5hxOw",
    },

    {
      id: "thriller", 
      title: "Thriller", 
      artist: "Luca Stricagnoli",
      url: "https://www.youtube.com/watch?v=zJ_pDcjICtw",
    },

    {
      id: "wish", 
      title: "Wish I Knew You", 
      artist: "The Revivalists",
      url: "https://www.youtube.com/watch?v=o0Pt7M0weUI",
    },
    

    

  ];

  function setSong ( e ) {
    let url = items.find(x => x.id === e.currentTarget.dataset.id).url;

    setCurrentSong( url )

  }

  return (
    <Layout title="Music | Agents of Change">

      <Section >
        <Container pt={[5, 10, 20]}>
          <Box>
          <ReactPlayer url={ currentSong } controls playing width="100%" loop />
          </Box>
        </Container>
        


      </Section>
    
      <Box bgGradient="linear-gradient(to top, white, gray.100)" height={[ "20px", "50px", "60px", ]}>
      </Box>


      <Section bg="white" >
        <Container maxWidth="1200px" pb={[5, 10, 20]}>
          <SimpleGrid columns={[1, 2, 3, 4]} spacing={[4, 8, 10]}>
            {
              items.map( ( el ) => {
                return <Grid templateColumns="55px calc(100% - 65px)" data-id={ el.id } key={ el.id }  rounded="md" borderWidth={1} p={2} gap="10px" cursor="pointer" shadow="md" _active={{shadow: "sm"}} onClick={ setSong }>
                    <Box  fontSize="50px" textAlign="center">
                      <VerticalAlign>

                      <BsPlayFill />
                      </VerticalAlign>

                    </Box>

                    <Box >
                      <VerticalAlign>
                      <Heading size="sm">
                        { el.title }

                      </Heading>

                      <Box>
                        { el.artist }
                      </Box>
                      </VerticalAlign>

                    </Box>

                </Grid>
              })
            }


          </SimpleGrid>

        </Container>



      </Section>


    </Layout>
  )
}


export default Music;