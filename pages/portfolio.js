import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import Layout from "../components/layout";
import HeaderImage from "../components/headerImage";
import ProgressiveImage from "../components/progressiveImage";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { VscGlobe } from "react-icons/vsc";
import { ImReddit } from "react-icons/im";

import {
  Box,
  Container,
  Divider,
  Heading,
  Button,
  ButtonGroup,
  Text,
  Link as ChakraLink,
  SimpleGrid,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Spinner,
} from "@chakra-ui/react";

import VerticalAlign from "../components/verticalAlign";

const client = require("contentful").createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "c13ag7zvuwi0",
  accessToken:
    process.env.CONTENTFUL_ACCESS_TOKEN ||
    "G7mSw24UXPM5SZVYnkNuP3_aHgicnABLTztJ_mAQYVU",
});

function Projects() {
  const [projects, setProjects] = useState([]);
  const [works, setWorks] = useState([]);

  async function fetchProjects() {
    const entries = await client.getEntries({
      content_type: "project",
    });
    

    if (entries.items) return entries.items;
    console.log(`Error getting Entries for ${contentType.name}.`);
  }


  async function fetchWorks() {
    const entries = await client.getEntries({
      content_type: "portfolioItem",
    });
    

    if (entries.items) return entries.items;
    console.log(`Error getting Entries for ${contentType.name}.`);
  }

  

  useEffect(() => {
    async function getProjects() {
      const allProjects = await fetchProjects();
      setProjects([...allProjects]);
    }

    async function getWorks() {
      const allWorks = await fetchWorks();
      setWorks([...allWorks]);
    }

    getProjects();
    getWorks();
  }, []);

  return (
    <Layout title="Projects | Discover Your Agency">
      <HeaderImage src="/connect.jpg" alt="Projects" darken="0.88" />

      <Box py={[5, 10, 12]} px={[3, 5, 10]} bg="gray.100">
        <Container maxW="900px" mb={5}>
          <Heading mb={[5, 5]}>Current projects</Heading>

          <SimpleGrid columns={[1]} spacing={[5, 5, 7]} mb={[7, 7, 10]}>
            {projects.map((el, idx) => {
              return <Project el={el} idx={idx} />;
            })}
          </SimpleGrid>

          <Heading mb={[5, 5]}>Past work</Heading>

          <SimpleGrid columns={[1]} spacing={[5, 5, 7]} >
            {works.map((el, idx) => {
              return <Project el={el} idx={idx} />;
            })}
          </SimpleGrid>
        </Container>
      </Box>
    </Layout>
  );
}

export default Projects;

const Project = (props) => {
  let fields = props.el.fields;

  return (
    <Box>
      <Box>
        <Accordion
          allowToggle
          isFocusable={false}
          colorScheme="purple"
          rounded="lg"
          overflow="hidden"
          shadow="lg"
        >
          <AccordionItem border="none" bg="white">
            <AccordionButton
              _focus={{ boxShadow: "none" }}
              _hover={{ bg: "white" }}
              bg="white"
              p={4}
            >
              <Box flex="1" textAlign="left">
                <Heading size="sm">{fields.title}</Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4} pt={["10px"]}>
              <ChakraLink
                href={fields.url}
                mb={2}
                target="_blank"
                rel="noopener noreferrer"
                _hover={{ textDecor: "none" }}
                display="block"
                rounded="sm"
              >
                <Box
                  height={[200, "300px", "400px", "500px"]}
                  width="100%"
                  rounded="sm"
                  overflow="hidden"
                  position="relative"
                >
                  {/* <ProgressiveImage 
          src={ "https:" + fields.heroImage.fields.file.url }
          alt={ fields.title }
          
          /> */}

                  <Image
                    src={"https:" + fields.heroImage.fields.file.url}
                    alt={fields.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </Box>
              </ChakraLink>

              <ChakraLink
                href={fields.url}
                target="_blank"
                rel="noopener noreferrer"
                rounded="md"
                width="100%"
                overflowWrap="break-word"
                overflow="hidden"
              >
                {fields.title}
              </ChakraLink>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  );
};
