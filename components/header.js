import Sidebar from "../components/sidebar";
import VerticalAlign from "../components/verticalAlign";
import Image from "next/image";

import { FeedbackFish } from "@feedback-fish/react";

import Link from "next/link";

import { Heading, Box, Button, Grid, IconButton } from "@chakra-ui/react";

import { BsChevronUp } from "react-icons/bs";

import theme from "../public/theme";
import { useEffect, useState } from "react";


function Header() {
  const [onTop, setOnTop ] = useState(true)
  useEffect( () => {
    window.onscroll = () => {
      if ( onTop && window.scrollY > 10 ) {
        setOnTop( false );
      } else if ( !onTop && window.scrollY < 10 ) {
        setOnTop( true )
      }
    };
  })



  const bg = onTop ? "#0a0a0a00" : "#0a0a0a";
  const color = onTop ? "white" : "white";
  const height = onTop ? "80px" : "60px";
  const shadow = onTop ? "none" : "lg";

  return (
    <Grid
      gridTemplateColumns="100px calc(100% - 100px)"
      transition="all 0.2s ease"
      bg={ bg }
      color={ color }
      height={ height }
      shadow={ shadow }
      position="fixed"
      width="100vw"
      zIndex="600"
      top={0}
      px={[3, 4, 5]}
    >
      <Box>
        <VerticalAlign>
          <Link href="/">
            <Heading
              fontWeight="600"
              fontSize={[18, 24, 26]}
              letterSpacing={2}
              cursor="pointer"
            >
              SAMULLMAN.COM
            </Heading>
          </Link>
        </VerticalAlign>
      </Box>

      <Box>

   

        <VerticalAlign>
        <Sidebar placement="right" />

        <Box display="none">
        <FeedbackFish projectId="51c156a6e8e6e6">
            <Button rounded="full" aria-label="Feedback" float="right" size="sm" position="relative" top={[ "4px"]} right={["5px", "7px", "10px"]}>
              Feedback
            </Button>
          </FeedbackFish>
          </Box>


        </VerticalAlign>
      </Box>
    </Grid>
  );
}

export default Header;
