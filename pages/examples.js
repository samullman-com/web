import Link from "next/link";
import Image from "next/image";
import VerticalAlign from "../components/verticalAlign";
import Layout from "../components/layout";
import Section from "../components/section";
import ProgressiveImage from "react-progressive-graceful-image";

import {
  Box,
  Container,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";

import { useEffect } from "react";





function Examples() {
  const examples = [
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

  ];

  return (
    <Layout title="Examples | Agents of Change">
      <Section>
        <Container maxWidth="1200px">
          <SimpleGrid columns={[1, 2]} spacing={[4, 8, 12]}>
            {
              examples.map((el) => {
                return <Link href={el.link}>
                  <Box height={["200px", "300px", "400px"]} position="relative" cursor="pointer">
                    <VerticalAlign>
                      <Heading textAlign="center" color="white" position="relative" zIndex={1}>
                        {el.heading}
                      </Heading>
                    </VerticalAlign>

                    <Box position="absolute" top={0} width="100%" height="100%" bottom={0} rounded="md" overflow="hidden">

                      <ProgressiveImage src={el.src} placeholder={el.src}>
                        {(src) => <img src={src} alt={el.heading} style={{ height: "100%", width: "100%", objectFit: "cover" }} />}
                      </ProgressiveImage>
                    </Box>

                  </Box>
                </Link>

              })
            }




          </SimpleGrid>

        </Container>



      </Section>


    </Layout>
  )
}


export default Examples;