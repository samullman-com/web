import Section from "../components/section";
import {
    Box, 
    Container, 
    Heading, 
    Link as ChakraLink,
} from "@chakra-ui/react";

import theme from "../public/theme";

import jump from "jump.js";


function whoWhatWhy () {
    return (

        <Section bg={theme.white}>
          <Container
            maxWidth="1100px"
            px={[2, 2, 10]}
            pb={5}
            textAlign={["center", "center", "left"]}
          >
            <Box mb={3}>
              <Box
                p={"3px 14px"}
                fontSize="32px"
                fontWeight="600"
                borderRadius="6px"
                bg="gray.200"
                display="inline-block"
              >
                WHO
              </Box>
            </Box>
            <Heading size="md" fontWeight={["500", "600"]} mb={10}>
              A collaborative network of developers, designers, entreprenuers,
              and creators.
            </Heading>

            <Box mb={3}>
              <Box
                p={"3px 14px"}
                fontSize="32px"
                fontWeight="600"
                borderRadius="6px"
                bg="gray.200"
                display="inline-block"
              >
                WHAT
              </Box>
            </Box>

            <Heading size="md" mb={4} fontWeight={["500", "600"]} mb={10}>
              We deploy highly scalable digital solutions for ambitious clients.
            </Heading>

            <Box mb={3}>
              <Box
                p={"3px 14px"}
                fontSize="32px"
                fontWeight="600"
                borderRadius="6px"
                bg="gray.200"
                display="inline-block"
              >
                HOW
              </Box>
            </Box>

            <Heading size="md" mb={4} fontWeight={["500", "600"]} mb={10}>
              The{" "}
              <ChakraLink
                onClick={() => {
                  jump("#progressive", { offset: -100 });
                }}
              >
                Progressive Web
              </ChakraLink>{" "}
              has allowed independent folks to build amazing, secure experiences
              at a fraction of the <i>normal</i> cost.
            </Heading>

            <Box mb={3}>
              <Box
                p={"3px 14px"}
                fontSize="32px"
                fontWeight="600"
                borderRadius="6px"
                bg="gray.200"
                display="inline-block"
              >
                WHY
              </Box>
            </Box>

            <Heading size="md" fontWeight={["500", "600"]}>
              Being the change we want to see.
            </Heading>
          </Container>
        </Section>
      
    )
}

export default whoWhatWhy;