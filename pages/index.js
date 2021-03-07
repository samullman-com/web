import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Layout from "../components/layout";
import ProgressiveImage from "../components/progressiveImage";
import toast, { Toaster } from "react-hot-toast";
import VisibilitySensor from "react-visibility-sensor";
import { CountUp } from "use-count-up";
import { BiDownArrow } from "react-icons/bi";
import PageLink from "../components/link";

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
import Socials from "../components/socials";

function Index(props) {
  const [isCounting, setIsCounting] = useState(false);
  const [afterCount, setAfterCount] = useState(false);

  function componentVisible() {
    setIsCounting(!isCounting);
  }

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

  function setBlue() {
    setTimeout(() => {
      setAfterCount(true);
    }, 500);
  }

  let afterCountColor = afterCount ? "rgba(43,44,121,0.86)" : theme.white;

  return (
    <Layout title="Home | Discovery Your Agency" noTop={true}>
      <Box
        height={["93vh", "100vh"]}
        position="relative"
        className="index-hero"
        minHeight={[500]}
      >
        <VerticalAlign>
          <Container
            zIndex="5"
            position="relative"
            maxWidth="1100px"
            px={[0, 0, 10]}
          >
            {/* <Fade right> */}
            <Box color={theme.white}>
              <Heading
                fontWeight="500"
                fontSize={[70, 75, 100]}
                textAlign={["center", "center", "left"]}
              >
                Your tech.
              </Heading>

              <Heading
                fontWeight="500"
                fontSize={[70, 75, 100]}
                mb={10}
                textAlign={["center", "center", "left"]}
              >
                Organized.
              </Heading>

              <Box
                oveflow="hidden"
                height={["60px"]}
                width={["60px"]}
                mt={10}
                fontSize="42px"
                textAlign="center"
                overflow="hidden"
                margin={["20px auto"]}
                display={["block", "block", "none"]}
                onClick={() => {
                  jump("#next", { offset: -30 });
                }}
              >
                <VerticalAlign>
                  <BiDownArrow style={{ display: "inline-block" }} />
                </VerticalAlign>
              </Box>
            </Box>

            {/* </Fade> */}
          </Container>
        </VerticalAlign>

        <Box
          position="absolute"
          width="100%"
          bottom={"0px"}
          height={"10vw"}
          minHeight="60px"
          zIndex="1"
        >
          <img
            src="/wave.svg"
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              bottom: -2,
              objectFit: "cover",
            }}
          />
        </Box>
      </Box>

      <Box id="next">
        <Box>
          <Section bg={theme.white}>
            <SimpleGrid
              columns={[1, 1, 2]}
              spacing={[6, 6, 12]}
              maxWidth="calc(900px + 3rem)"
              margin="40px auto"
            >
              <Box>
                <Box
                  position="relative"
                  height={[250, "400px"]}
                  rounded="sm"
                  overflow="hidden"
                >
                  {/* <ProgressiveImage
                    src="/professional.jpg"
                    alt="Professional"
                  /> */}

                  <Image
                    src="/professional.JPG"
                    layout="fill"
                    objectFit="cover"
                    alt="Professional"
                    
                  />
                </Box>
              </Box>

              <Box>
                <VerticalAlign>
                  <Heading mb={[2, 2, 5]}>Hi 👋</Heading>

                  <Box mb={2}>
                    My name is{" "}
                    <Box display="inline-block" fontWeight="600">
                      Sam Ullman
                    </Box>{" "}
                    and I've been building Web Apps for over 5 years!
                  </Box>

                  <Box mb={2}>
                    I'm currently focused on building great{" "}
                    <PageLink href="/portfolio">products</PageLink>, creating a
                    course, and helping other engineers tap into their
                    curiosity.
                  </Box>

                  <Box mb={2}>
                    Let's talk soon about{" "}
                    <ChakraLink
                      target="_blank"
                      rounded="sm"
                      rel="noopener"
                      href="https://twitter.com/rauchg/status/1358866006496612353?s=20"
                    >
                      React
                    </ChakraLink>
                    , the{" "}
                    <ChakraLink
                      target="_blank"
                      rounded="sm"
                      rel="noopener"
                      href="https://jamstack.org/"
                    >
                      JAMStack
                    </ChakraLink>
                    , Crytocurrencies (DeFi), Business Development, and more!
                  </Box>

                  <Box mb={5}>
                    <PageLink href="/contact">Get in touch</PageLink>:
                  </Box>

                  <Socials />
                </VerticalAlign>
              </Box>
            </SimpleGrid>
          </Section>
        </Box>
      </Box>

      <Box className="bg-2" position="relative">
        <Box
          position="absolute"
          width="100%"
          top={"0px"}
          height={"10vw"}
          minHeight="60px"
          zIndex="1"
        >
          <img
            src="/wave.svg"
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: -2,
              transform: "rotateX(180deg) rotateY(180deg)",
              objectFit: "cover",
            }}
          />
          {/* <Image src="/landing-wave.svg" layout="fill"  /> */}
        </Box>

        <Box py={"150px"} height="100%" px={5}>
          <VerticalAlign>
            <Container
              bg="white"
              shadow="lg"
              rounded="lg"
              p={[4, 6]}
              maxWidth="800px"
              mt="5vw"
              display="none"
            >
              kdajsnfkandjf
            </Container>
          </VerticalAlign>
        </Box>
      </Box>

      <Box display="none">
        <Section bg="blue.500" display="none">
          <Container maxWidth="900px">
            <SimpleGrid columns={[1, 1, 3]} spacing={10}>
              <Box>
                <Heading size="sm" textAlign="center">
                  E-commerce
                </Heading>
                Typically Shopify. Should we make it Headless?
              </Box>

              <Box>
                <Heading size="sm" textAlign="center">
                  JAMStack Site
                </Heading>
              </Box>

              <Box>
                <Heading size="sm" textAlign="center">
                  Progressive Web App (PWA)
                </Heading>
                Google Maps, Twitter, and Tinder have adopted progessive
                framework for developing. We'll do the same.
              </Box>
            </SimpleGrid>
          </Container>
        </Section>
      </Box>

      <Box display="none">
        <Section bg="gray.200">
          <Container maxWidth="1200px">
            {products.map((el) => {
              const [borderColor, setBorderColor] = useState("white");

              return (
                <Box
                  key={"IndexProduct" + el.title}
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

                      <Box
                        height="100%"
                        width="100%"
                        position="absolute"
                        top={0}
                      >
                        <ProgressiveImage
                          src={el.image}
                          darken={"0.84"}
                          alt={el.title}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Container>
        </Section>
      </Box>

      <Toaster />
    </Layout>
  );
}

export default Index;

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
