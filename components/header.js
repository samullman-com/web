import Sidebar from "../components/sidebar";
import VerticalAlign from "../components/verticalAlign";
import Image from "next/image";

import { FeedbackFish } from "@feedback-fish/react";

import Link from "next/link";

import { Heading, Box, Button, Grid, IconButton } from "@chakra-ui/react";

import { BsChevronUp } from "react-icons/bs";

import theme from "../public/theme";

function Header() {
  return (
    <Grid
      gridTemplateColumns="100px calc(100% - 100px)"
      bg={"#0a0a0a"}
      height="60px"
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
                className="cassannet"
              fontWeight="600"
              color="white"
              fontSize={[18, 24, 28]}
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
          <Box display={["none", "none", "block"]}>
            <Sidebar placement="right" />
          </Box>

          <Box display={["block", "block", "none"]}>
            <Sidebar placement="bottom" />
          </Box>

          <FeedbackFish projectId="51c156a6e8e6e6">
            <Button rounded="full" float="right" size="sm" position="relative" top="4px" right="10px">
              Feedback
            </Button>
          </FeedbackFish>
        </VerticalAlign>
      </Box>
    </Grid>
  );
}

export default Header;
