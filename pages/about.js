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
} from "@chakra-ui/react";

import VerticalAlign from "../components/verticalAlign";

function About() {
  return (
    <Layout title="About">
      <Section>
        <Container maxW="1000px">
          <Heading mb={6} size="xl">
            About
              </Heading>

              <Box bg="white" p={6} rounded="lg" shadow="lg" >
     <Text>
                Discover your agency with a team of innovators, brewing creativity never tasted before!
            </Text>

            <Text>
            We are a one-window solution to all your web development needs, covering cover a wide spectrum of online services from web hosting to email marketing. With a passionate and certified team of experts, crowned with years of experience, we strive to help entrepreneurs explore the virtual universe of unimaginable opportunities.
            </Text>

            <Text>
            Our dedicated professionals are all set to take businesses to the most memorable journey of their tenure, starting from scratch all the way to the top with an unparalleled approach, which gives them an edge over their competitors. With 100% customized development and marketing strategies, we endeavor to offer businesses highly personalized online platforms that deliver positive brand image and prominent brand personality.
            </Text>

            <Text>
            Our versatile development solutions are perfect for all business models and types. We have helped hundreds of businesses overcome the barriers to success and reach new heights never seen before.
            </Text>

            <Text>
            We ensure transparency and customer satisfaction through a well-structured communication system, providing every detail of the process to the customers, which enables them to easily track their ROI. What’s more, is our active customer support that is always ready to guide businesses and other entities interested in our business in every way possible.
            </Text>
              </Box>
        </Container>

      </Section>

      <Section>

        <Container maxW="1000px">
          <Heading mb={6} size="xl">
            Team
              </Heading>

          <Box bg="white" p={6} rounded="lg" shadow="lg" mb={6}>
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
            <Divider mb={6} />

            <Grid templateColumns={["1fr", "150px 3fr", "150px 5fr"]} mb={6} gap="24px">

              <Box position="relative" height="150px" width="150px" margin="0 auto" rounded="full" overflow="hidden">
                <Image
                  src="/emotion.png"
                  layout="fill"
                  objectFit="cover"
                  alt="Styled Components"
                />


              </Box>

              <Box>
                <Heading mb={2} size="lg">
                  Styled Components
                  </Heading>

                <Heading size="sm" color="gray.700" mb={2}>
                  Design
                  </Heading>

                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </Text>

              </Box>

            </Grid>

            <Divider mb={6} />

            <Grid templateColumns={["1fr", "150px 3fr", "150px 5fr"]} mb={6} gap="24px">

              <Box position="relative" height="150px" width="150px" margin="0 auto" rounded="full" overflow="hidden">
                <Image
                  src="/google.webp"
                  layout="fill"
                  objectFit="cover"
                  alt="Styled Components"
                />


              </Box>

              <Box>
                <Heading mb={2} size="lg">
                  Google
                  </Heading>

                <Heading size="sm" color="gray.700" mb={2}>
                  Research
                  </Heading>

                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </Text>

              </Box>

            </Grid>


          </Box>



        </Container>

      </Section>


    </Layout>
  )
}


export default About;