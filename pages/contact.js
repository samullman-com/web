import Layout from "../components/layout";
import HeaderImage from "../components/headerImage";
import Section from "../components/section";

import {
  Box,
  Button,
  ButtonGroup,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  SimpleGrid, 
} from "@chakra-ui/react";

import theme from "../public/theme";

import VerticalAlign from "../components/verticalAlign";

function Contact() {
  return (
    <Layout title="Contact | Discover Your Agency">
      <HeaderImage  src="/login.jpg" alt="Connect"  />

      <Section>
        <VerticalAlign>
          <Container maxWidth="1000px" mb={12}>
            <SimpleGrid columns={[1, 2, 3]} mb={8} spacing={8}>
              <Box bg={ theme.white } p={[4, 6]} rounded="lg" shadow="md">
                <Heading size="md" mb={1}>
                  Let's work together <Box float="right">💪</Box>
                </Heading>

                <Box>
                  I'm currently working with clients on a monthly retainer basis. 
                </Box>
              </Box>

              <Box bg={ theme.white } p={[4, 6]} rounded="lg" shadow="md">
                <Heading size="md" mb={1}>
                  I need help <Box float="right">😤</Box>
                </Heading>

                <Box>
                  My app is broken. I need help overcoming a technical challenge.
                </Box>
              </Box>

              <Box bg={ theme.white } p={[4, 6]} rounded="lg" shadow="md">
                <Heading size="md" mb={1}>
                  I have an idea <Box float="right">💡</Box>
                </Heading>

                <Box>
                  Never say never.  I'm available to help startups kick things off! 
                  </Box>
              </Box>

            </SimpleGrid>

            <form
              action="https://formcarry.com/s/aijTlOcIOM"
              method="POST"
              acceptCharset="UTF-8"
            >

              <Box bg={ theme.white } p={[4, 6]} rounded="lg" shadow="lg" mb={[3, 6]}>

              <Heading mb={4}>
                Contact
              </Heading>
                <FormControl isRequired mb={3}>
                  <FormLabel>Email</FormLabel>
                  <Input type="email" name="email" />
                </FormControl>

                <FormControl isRequired mb={3}>
                  <FormLabel>Full name</FormLabel>

                  <Input type="text" name="fullName" />
                </FormControl>

                <FormControl isRequired mb={3}>
                  <FormLabel>Message</FormLabel>

                  <Textarea name="message" rows={6} resize />
                </FormControl>


                <ButtonGroup>
                <Button rounded="full" colorScheme="blue" size="lg">
                  Submit
                </Button>
              </ButtonGroup>
              </Box>

              
            </form>
          </Container>
        </VerticalAlign>
      </Section>
    </Layout>
  );
}

export default Contact;
