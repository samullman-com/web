import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Layout from "../components/layout";
import ProgressiveImage from "../components/progressiveImage";
import toast, { Toaster } from "react-hot-toast";

import {
  Box,
  ButtonGroup,
  Button,
  Container,
  Heading,
  Link as ChakraLink,
  SimpleGrid,
  Image as ChakraImage,
  Divider,
 
} from "@chakra-ui/react";

import VerticalAlign from "../components/verticalAlign";
import jump from "jump.js";
import theme from "../public/theme";
import Section from "../components/section";


function Index(props) {
  let products = [
    {
      title: "New Foundations",
      link: "/new-foundations",
      image: "/classroom.jpg",
      price: 495,
      color: "orange.300",
    },

    {
      title: "Job Board",
      link: "/job-board",
      image: "/ventures.jpg",
      price: 4995,
      color: "purple.300",
    },

    {
      title: "JAMStack Setup",
      link: "/jamstack",
      image: "/ui.jpg",
      price: 2495,
      color: "pink.300",
    },
  ];

  const [favorites, setFavorites] = useState([]);

  const notify = () =>
    toast("Coming soon !!!", {
      icon: "👏",
    });

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
                fontSize={[65, 75, 100, 110]}
                textAlign={["center", "center", "left"]}
              >
                WE'RE
              </Heading>

              <Heading
                color="white"
                fontSize={[65, 75, 100, 110]}
                textAlign={["center", "center", "left"]}
              >
                BUILDING
              </Heading>

              <Heading
                color="white"
                fontSize={[65, 75, 100, 110]}
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
                
             <ProgressiveImage src="/honeycomb.jpg" alt="Honeycomb" />
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

      <Section bg="gray.200">
        <Container maxWidth="1200px">
          {products.map((el) => {
            const [borderColor, setBorderColor] = useState("white");

            return (
              <Box
                key={ "IndexProduct" + el.title }
                rounded="lg"
                shadow="lg"
                shadow="lg"
                _active={{ shadow: "sm" }}
                p={[2, 3, 5]}
                mb={[5, 5, 10]}
                height={[400, 400, 500]}
                bg="white"
                cursor="pointer"
                onMouseEnter={() => {
                  setBorderColor(el.color);
                }}
                onMouseLeave={() => {
                  setBorderColor("white");
                }}
                onClick={notify}
              >
                <Box overflow="hidden" height="100%" rounded="sm">
                  <Box
                    _hover={{ transform: "scale(1.1)" }}
                    position="relative"
                    transition="0.5s ease"
                    height="100%"
                    overflow="hidden"
                  >
                    <Box
                      position="relative"
                      height="100%"
                      rounded="sm"
                      overflow="hidden"
                    >
                      <VerticalAlign>
                        {el.title.split(" ").map((word) => {
                          return (
                            <Heading
                              textAlign="center"
                              color="white"
                              position="relative"
                              fontWeight="600"
                              letterSpacing={1}
                              zIndex={5}
                              fontSize={[35, 55, 60]}
                            >
                              {word}
                            </Heading>
                          );
                        })}

                        {/* <Box height={["0.175rem", "0.25rem"]} bg={ borderColor } maxWidth={[100, 200, ]} zIndex="5" position="relative" margin="0 auto" mt={[2, 4, 7]} mb={[2, 3, 5]} transition="0.5s ease" opacity="0.92" /> */}

                        <Heading
                          size="md"
                          color="white"
                          position="relative"
                          zIndex={5}
                          textAlign="center"
                          mt={5}
                        >
                          ${el.price}
                          <sup>
                            <small>
                              <u
                                style={{
                                  position: "relative",
                                  top: 2,
                                  left: 1,
                                }}
                              >
                                00
                              </u>
                            </small>
                          </sup>
                        </Heading>
                      </VerticalAlign>
                    </Box>
                    
                    <Box height="100%" width="100%" position="absolute" top={0}>
                    <ProgressiveImage
                      src={el.image}
                      
                      alt={el.title}
                    />
                    </Box>
                  </Box>
                </Box>
              </Box>
            )
          })}
        </Container>
      </Section>

      <Toaster />
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
      key={"Favorite" + fields.title }
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
