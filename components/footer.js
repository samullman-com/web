import Link from "next/link";
import Image from "next/image";
import Socials from "../components/socials";
import {
  Box,
  Container,
  SimpleGrid,
  Heading,
  Divider,
  Grid,
} from "@chakra-ui/react";

import theme from "../public/theme";
import userbase from "userbase-js";

import Session from "../contexts/session";

function Footer() {
  const session = Session((state) => state);

  const pages = [
    {
      text: "Home",
      to: "/",
    },


    {
      text: "Portfolio",
      to: "/portfolio",
    },

    {
      text: "Toolkit",
      to: "/toolkit",
    },

    {
      text: "Shop",
      to: "/shop",
    },

    {
      text: "Contact",
      to: "/contact",
    },
  ];

  function logout() {
    userbase
      .signOut()
      .then(() => {
        // user logged out
        window.location.href = "/";
      })
      .catch((e) => console.error(e));
  }

  let loginLink = session.user ? (
    <Box>
        <Box mb={1}>
        <Box
        letterSpacing="1"
        _hover={{ color: "gray.300" }}
        transition="0.2s ease"
        display="inline-block"
        cursor="pointer"
      >
          <Link href="/account">Account</Link>
        
      </Box>
      </Box>
      <Box
        letterSpacing="1"
        _hover={{ color: "gray.300" }}
        transition="0.2s ease"
        display="inline-block"
        cursor="pointer"
        onClick={logout}
      >
        Logout
      </Box>
    </Box>
  ) : (
    <Box>
      <Box
        letterSpacing="1"
        _hover={{ color: "gray.300" }}
        transition="0.2s ease"
        display="inline-block"
      >
        <Link href="/login">Login</Link>
      </Box>
    </Box>
  );

  return (
    <Box bg={ theme.black } color="white" py={20} px={5}>
      <Container
        maxWidth="1400px"
        textAlign={["center", "center", "center", "left"]}
      >
        <Link href="/">
          <Box
            rounded="full"
            borderWidth="2px"
            height={"80px"}
            width="80px"
            overflow="hidden"
            margin={["0 auto", "0 auto", "0 auto", "0"]}
            cursor="pointer"
          >
            <Image src="/sam.jpg" width={80} height={80} alt="sam" />
          </Box>
        </Link>

        <SimpleGrid columns={[1, 1, 1, 3]} mb={[0, 0, 0, 12]} mt={5}>
          <Box mb={[10, 10, 10, 0]}>
            <Heading
              size="md"
              className="cassannet"
              mb={5}
              letterSpacing={2}
              fontWeight="600"
            >
              SAMULLMAN.COM
            </Heading>

            <Box textAlign={["center", "center", "center", "left"]}>
            <Socials />
            
            </Box>
          </Box>

          <Box letterSpacing={"1"} fontWeight="600" mb={[10, 10, 10, 0]}>
            <Heading
              size="md"
              mb={3}
              letterSpacing={2}
              fontWeight="600"
              className="cassannet"
            >
              PAGES
            </Heading>

            {pages.map((el) => {
              return (
                <Box mb={2} key={el.text}>
                  <Box
                    _hover={{ color: "gray.300" }}
                    transition="0.2s ease"
                    display="inline-block"
                  >
                    <Link href={el.to}>{el.text}</Link>
                  </Box>
                </Box>
              );
            })}

            {/* {loginLink} */}
          </Box>

          <Box>
            <Heading
              size="md"
              mb={3}
              letterSpacing={2}
              fontWeight="600"
              pl={[0, 0, 0, 3]}
            >
              SUBSTACK
            </Heading>

            <Box width="300px" margin={["0 auto", "0 auto", "0 auto", 0]}>
              <iframe
                src="https://samullman.substack.com/embed"
                aria-label="Substack Subscribe"
                width="300px"
                height="80px"
                style={{ border: "none", background: "#0a0a0a" }}
                frameBorder="0"
                scrolling="no"
              ></iframe>
            </Box>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default Footer;
