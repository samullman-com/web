import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";
import Section from "../components/section";
import HeaderImage from "../components/headerImage"

import ProgressiveImage from "../components/progressiveImage";
import {
  Box,
  Container,
  SimpleGrid,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import VerticalAlign from "../components/verticalAlign";

function Toolkit( props ) {
  const [favorites, setFavorites] = useState([]);


  const client = require("contentful").createClient({
    space: props.CONTENTFUL_SPACE_ID,
    accessToken: props.CONTENTFUL_ACCESS_TOKEN,
  });

  async function fetchFavorites() {
    const entries = await client.getEntries({
      content_type: "favorites",
    });

    if (entries.items) return entries.items;
    console.log(`Error getting Entries for ${contentType.name}.`);
  }

  useEffect(() => {
    async function getFavorites() {
      const allFavorites = await fetchFavorites();
      setFavorites([...allFavorites]);
    }

    getFavorites();
  }, []);


  return (
    <Layout title="Toolkit | Discover Your Agency">
      <HeaderImage  src="/clouds.jpg" alt="Clouds"  />
      <Section>
        <Container maxW="1000px">
        <Box bg="white" p={6} rounded="lg" shadow="lg">
        <SimpleGrid columns={[3, 4, 5, 6]} spacing={[4, 8, 12]}>
              {favorites.map((el) => {
                return <Favorite el={el} />;
              })}
            </SimpleGrid>
        </Box>
        </Container>
      </Section>

    </Layout>
  );
}

export default Toolkit;


export async function getStaticProps(context) {
  let CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
  let CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;

  return {
    props: {
      CONTENTFUL_SPACE_ID,
      CONTENTFUL_ACCESS_TOKEN,
    }, // will be passed to the page component as props
  };
}


const Favorite = (props) => {
  let fields = props.el.fields;

  return (
    <ChakraLink
      href={fields.url}
      target="_blank"
      rel="noopener noreferrer"
      display="block"
      rounded="md"
      key={"Favorite" + fields.title}
      _hover={{ textDecor: "none" }}
    >
      <Box textAlign="center" p={1}>
        <Box
          rounded="full"
          height={["60px", "65px", "80px"]}
          width={["60px", "65px", "80px"]}
          overflow="hidden"
          bg="white"
          borderWidth={2}
          margin="0 auto"
          position="relative"
          mb={2}
        >
          {/* <ProgressiveImage src={ fields.images[0].fields.file.url } placeholder={ fields.alt }>
            {(src) => (
                <ChakraImage
                  src={src}
                  height="100%"
                  width="100%"
                  objectFit="cover"
                  alt={fields.alt}
                />
            )}
          </ProgressiveImage> */}

          <ProgressiveImage
            src={"https:" + fields.images[0].fields.file.url}
            alt={fields.alt}
          />
        </Box>

        <Box
          fontSize="15px"
          fontWeight={[500, 600]}
          color="gray.900"
          className="cassannet"
        >
          {fields.title}
        </Box>
      </Box>
    </ChakraLink>
  );
};