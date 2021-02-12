import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Layout from "../components/layout";
import ProgressiveImage from "react-progressive-graceful-image";
import { signIn, signOut, useSession } from "next-auth/client";

import { DateTime } from "luxon";
import { FiChevronDown, FiSend } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { ImArrowDown } from "react-icons/im";

import {
  Box,
  ButtonGroup,
  Button,
  Container,
  Heading,
  Link as ChakraLink,
  SimpleGrid,
  Image as ChakraImage,
} from "@chakra-ui/react";
import VerticalAlign from "../components/verticalAlign";
import jump from "jump.js";
import theme from "../public/theme";
import Section from "../components/section";
import Fade from "react-reveal/Fade";

function Index(props) {
  let examples = [
    {
      heading: "MUSIC PLAYER",
      link: "/music",
      src: "/music.jpg",
    },

    {
      heading: "GALLERY",
      link: "/gallery",
      src: "/gallery.jpg",
    },
  ];

  const [session, loading] = useSession();
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
    function setResize() {
      window.addEventListener("resize", () => {
        // We execute the same script as before
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
      });
    }
    async function getFavorites() {
      const allFavorites = await fetchFavorites();
      setFavorites([...allFavorites]);
    }
    getFavorites();
    setResize();
  }, []);

  // let end = DateTime.fromISO( DateTime.local() )
  // let start = DateTime.fromISO('2015-02-01');
  // let diffs = end.diff(start, ['years', 'months', 'days', 'hours', 'minutes', 'seconds']);

  // let [time, setTime ] = useState( diffs.toObject() )

  // function countUp () {
  //   let end2 = DateTime.fromISO( DateTime.local() );
  //   let start2 = DateTime.fromISO('2015-02-01');
  //   let diffs2 = end.diff(start, ['years', 'months', 'days', 'hours', 'minutes', 'seconds']);
  //   setTime( diffs.toObject() )
  // }

  // setInterval(countUp, 1000);

  return (
    <Layout title="Home | Discovery Your Agency" noTop={true}>
      <Box
        className="hero"
        minHeight="-webkit-fill-available"
        position="relative"
      >
        <VerticalAlign>
          <Container
            zIndex="5"
            position="relative"
            maxWidth="1100px"
            px={[0, 0, 10]}
          >
            {/* <Fade right> */}
            <Box>
              <Heading
                color="white"
                fontSize={[55, 75, 100, 110]}
                textAlign={["center", "center", "left"]}
              >
                WE'RE
              </Heading>

              <Heading
                color="white"
                fontSize={[55, 75, 100, 110]}
                textAlign={["center", "center", "left"]}
              >
                BUILDING
              </Heading>

              <Heading
                color="white"
                fontSize={[55, 75, 100, 110]}
                textAlign={["center", "center", "left"]}
              >
                EMPIRES
                <Box
                  rounded="sm"
                  height={("20px", "30px")}
                  width={["20px", "30px"]}
                  overflow="hidden"
                  ml={4}
                  display={["none", "none", "inline"]}
                  onClick={() => {
                    jump("#next", { offset: -100 });
                  }}
                >
                  <Image
                    className="rounded"
                    src="/sam.jpg"
                    width={30}
                    height={30}
                    alt="sam"
                  />
                </Box>
              </Heading>

              <Box
                borderRadius={30}
                height={[12, "60px"]}
                width={[12, "60px"]}
                overflow="hidden"
                margin={["20px auto"]}
                display={["block", "block", "none"]}
                onClick={() => {
                  jump("#next", { offset: -100 });
                }}
              >
                <Image
                  className="rounded"
                  src="/sam.jpg"
                  width={60}
                  height={60}
                  alt="sam"
                />
              </Box>
            </Box>

            {/* </Fade> */}
          </Container>
        </VerticalAlign>

        <Box position="absolute" top={0} width="100%" height="100%" bottom={0}>
          

              <Image
                src="/honeycomb.jpg"
                alt="Honeycomb"
                layout="fill"
                objectFit="cover"
              />
        </Box>
      </Box>

      <Box id="next">
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
      </Box>

      <Box id="progressive">
        <Section>
          <Container maxWidth="1100px">
            <SimpleGrid columns={[3, 4, 5, 6]} spacing={[4, 8, 12]}>
              {favorites.map((el) => {
                return <Favorite el={el} />;
              })}
            </SimpleGrid>
          </Container>
        </Section>
      </Box>
    </Layout>
  );
}

export default Index;

const Favorite = (props) => {
  let fields = props.el.fields;

  return (
    <ChakraLink
      href={fields.url}
      target="_blank"
      rel="noopener noreferrer"
      display="block"
      rounded="md"
      _hover={{ textDecor: "none" }}
    >
      <Box textAlign="center" p={1}>
        <Box
          rounded="full"
          height={["60px", "65px", "80px"]}
          width={["60px", "65px", "80px"]}
          overflow="hidden"
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


              <Image
                src={ "https:" + fields.images[0].fields.file.url }
                alt={ fields.alt }
                layout="fill"
                objectFit="cover"
              />
    
        </Box>

        <Box size="sm" fontWeight={[500, 600]} color="gray.900">
          {fields.title}
        </Box>
      </Box>
    </ChakraLink>
  );
};

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
