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
} from "@chakra-ui/react";
import VerticalAlign from "../components/verticalAlign";

function Contact() {
  return (
    <Layout title="Contact | Discover Your Agency">
      <HeaderImage  src="/connect.jpg" alt="Connect" darken="0.84"  />

      <Section>
        <VerticalAlign>
          <Container maxWidth="1000px" mb={12}>
            <form
              action="https://formcarry.com/s/aijTlOcIOM"
              method="POST"
              acceptCharset="UTF-8"
            >
              <Heading mb={[3, 5]}>Contact</Heading>

              <Box bg="white" p={[4, 6]} rounded="lg" shadow="lg" mb={[3, 6]}>
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
              </Box>

              <ButtonGroup>
                <Button rounded="full" colorScheme="blue" size="lg">
                  Submit
                </Button>
              </ButtonGroup>
            </form>
          </Container>
        </VerticalAlign>
      </Section>
    </Layout>
  );
}

export default Contact;
