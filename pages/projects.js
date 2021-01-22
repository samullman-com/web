import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";


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
            
            <Container maxW="1200px">
              <Heading mb={ 6 } size="xl">
                The Team
              </Heading>

              <Box bg="white" p={6} rounded="lg">
                <Grid templateColumns={["1fr", "150px 3fr", "150px 5fr"]} mb={6} gap="24px">

                  <Box position="relative" height="150px" width="150px" margin="0 auto" rounded="full" overflow="hidden">
                  <Image
                      src="/sam.jpg"
                      layout="fill"
                      objectFit="cover"
                      alt="Sam Ullman"
                    />

                    
                  </Box>

                  <Box>
                    <Heading mb={2} size="lg">
                      Sam Ullman
                    </Heading>

                    <Heading size="sm" color="gray.700" mb={2}>
                      Founder
                    </Heading>

                    <Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text>

                  </Box>

                </Grid>
                <Divider />


              </Box>


            </Container>
          </VerticalAlign>

        </Box>

        
    </Layout>
  )
}


export default About;