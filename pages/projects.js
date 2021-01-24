import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";
import ProgressiveImage from "react-progressive-graceful-image";

import {
  Box, 
  Container, 
  Divider, 
  Grid, 
  Heading,
  Text,
} from "@chakra-ui/react";

import VerticalAlign from "../components/verticalAlign";

function About () {
  return (
    <Layout title="Projects">

        <Box py={20} bg="gray.100">
          <VerticalAlign>
            
            <Container maxW="1200px" >
              <Heading mb={ 6 } size="xl">
                Projects
              </Heading>

              <Box bg="white" p={6} rounded="lg" shadow="lg">
                <Box height="500px" rounded="md" overflow="hidden" mb={6}>

                <a target="_blank" href="https://bemizu.app/" rel="noopener noreferrer">
        <ProgressiveImage src="bemizu.jpg" placeholder="bemizu.jpg">
          {(src) => <img src={src} alt="Bemizu" style={{height: "100%", width: "100%", objectFit: "cover" }} />}
        </ProgressiveImage>
                </a>



                </Box>


                <Divider mb={ 6 } />


                <Box height="500px" rounded="md" overflow="hidden" mb={6}>

                <a target="_blank" href="https://submissionwars.com/" rel="noopener noreferrer">
<ProgressiveImage src="sub-wars.jpg" placeholder="sub-wars.jpg">
  {(src) => <img src={src} alt="Submission Wars" style={{height: "100%", width: "100%", objectFit: "cover" }} />}
</ProgressiveImage>
</a>



        </Box>


        <Divider mb={ 6 } />


              </Box>


            </Container>
          </VerticalAlign>

        </Box>

        
    </Layout>
  )
}


export default About;