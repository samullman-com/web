import Layout from "../components/layout";
import HeaderImage from "../components/headerImage";
import Section from "../components/section";
import styled from "@emotion/styled";
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

const Styles = styled.div``;

import VerticalAlign from "../components/verticalAlign";

function Contact() {
  return (
    <Layout title="Contact | Discover Your Agency">
      <Styles>
        <HeaderImage src="/login.jpg" alt="Connect" />

        <Section bg="gray.200">
          <VerticalAlign>
            <Container maxWidth="1000px" mb={3} px={0}>
              <SimpleGrid
                columns={[1, 2, 3]}
                mb={[4, 5, 8]}
                spacing={[4, 5, 8]}
              >
                <Box
                  bg={theme.white}
                  p={[4, 6]}
                  rounded="lg"
                  shadow="md"
                  _active={{ shadow: "sm" }}
                  transition="box-shadow 0.05s ease"
                  cursor="pointer"
                >
                  <Heading size="md" lineHeight="40px">
                    <Box float="right" fontSize="40px">
                      💪
                    </Box>
                    Let's work together
                  </Heading>
                </Box>

                <Box
                  bg={theme.white}
                  p={[4, 6]}
                  rounded="lg"
                  shadow="md"
                  _active={{ shadow: "sm" }}
                  transition="box-shadow 0.05s ease"
                  cursor="pointer"
                >
                  <VerticalAlign>
                    <Heading size="md" lineHeight="40px">
                      I need help{" "}
                      <Box float="right" fontSize="40px">
                        😤
                      </Box>
                    </Heading>
                  </VerticalAlign>
                </Box>

                <Box
                  bg={theme.white}
                  p={[4, 6]}
                  rounded="lg"
                  shadow="md"
                  _active={{ shadow: "sm" }}
                  transition="box-shadow 0.05s ease"
                  cursor="pointer"
                >
                  <VerticalAlign>
                    <Heading size="md" lineHeight="40px">
                      I have an idea{" "}
                      <Box float="right" fontSize="40px">
                        💡
                      </Box>
                    </Heading>
                  </VerticalAlign>
                </Box>
              </SimpleGrid>

              <form
                action="https://formcarry.com/s/aijTlOcIOM"
                method="POST"
                acceptCharset="UTF-8"
              >
                <Box
                  bg={theme.white}
                  p={[4, 6]}
                  rounded="lg"
                  shadow="lg"
                  mb={[3, 6]}
                >
                  <Heading mb={4}>Contact</Heading>
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
      </Styles>
    </Layout>
  );
}

export default Contact;
