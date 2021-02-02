import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";
import Section from "../components/section";

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

import { useEffect } from "react";

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';




function Music() {
  const items = [
    {
      id: "Everything", 
      content: "Poo"
    }, 

    {
      id: "Everything is everythjing", 
      content: "Pooasdfasdf"
    }, 

    {
      id: "Everythin222g", 
      content: "Poo"
    }, 

    {
      id: "Everything i2222s everythjing", 
      content: "Pooasdfasdf"
    }, 

  ];

  return (
    <Layout title="Music">






      <Section>
        <Container maxWidth="1200px">
          <SimpleGrid columns={[1, 2, 3, 4]} spacing={[4, 8, 10]}>
            {
              items.map( ( el ) => {
                return <Box key={ el.id } height="75px" rounded="md" borderWidth={2} p={2}>
                    <AudioPlayer
                      autoPlay
                      src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                      onPlay={e => console.log("onPlay")}
                      // other props here
                    />

                </Box>
              })
            }


          </SimpleGrid>

        </Container>



      </Section>


    </Layout>
  )
}


export default Music;