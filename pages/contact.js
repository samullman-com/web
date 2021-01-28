import Link from "next/link";

import { useState } from "react"; 
import Layout from "../components/layout";

import { DateTime } from "luxon";
import { FiChevronDown } from "react-icons/fi";
import { FaUser } from "react-icons/fa";

import {
  Box, 
  
  Button, 
  ButtonGroup, 
  Container, 
  FormControl, 
  FormLabel, 
  Heading,
  Input,
  Text,
  Textarea, 
} from "@chakra-ui/react";
import VerticalAlign from "../components/verticalAlign";
import jump from "jump.js";

 function Contact () {
  
  
  return (
    <Layout title="Contact">

        <Box py={[5, 10, 12]} px={[3, 5, 10]} bg="gray.100">
          <VerticalAlign>
            
            <Container maxWidth="1000px" mb={12}>

            <form action="https://formcarry.com/s/aijTlOcIOM" method="POST" acceptCharset="UTF-8" >

              <Heading mb={ [3, 5] }>
                Contact
              </Heading>

              <Box bg="white" p={6} rounded="lg" shadow="lg" mb={[3, 6]}>
                 
                  <FormControl isRequired mb={3}>
                    <FormLabel>
                      Email
                    </FormLabel>
                    <Input type="email" name="email" />
                  </FormControl>

                  <FormControl isRequired mb={3}>
                    <FormLabel>
                      Full name
                    </FormLabel>

                    <Input type="text" name="fullName" />
                  </FormControl>
                  
                  <FormControl isRequired mb={3}>
                    <FormLabel>
                      Message
                    </FormLabel>

                    <Textarea name="message" rows={ 6 } resize />
                  </FormControl>

                

              </Box>

              <ButtonGroup>
                    <Button rounded="full" colorScheme="blue">
                      Submit
                    </Button>
                  </ButtonGroup>
                  </form>


            </Container>
          </VerticalAlign>

        </Box>

        
    </Layout>
  )
}


export default Contact;