import Sidebar from "../components/sidebar";
import VerticalAlign from "../components/verticalAlign";
import Image from "next/image";

import Link from 'next/link'

import {
    Heading, 
    Box, 
    Button, 
    Grid,
    IconButton,
} from "@chakra-ui/react"

import {
    BsChevronUp
} from "react-icons/bs";

import theme from "../public/theme";

function Header () {
    return  <Grid gridTemplateColumns="100px calc(100% - 100px)" bg="#0a0a0a" height={["60px", "60px",  "70px"]} position="fixed" width="100vw" zIndex="600" top={-1} px={[3, 4,  5 ]}>

        <Box>
            <VerticalAlign>
                <Link href="/">
                    <Heading className="finland"  fontWeight="600" color="white" size="md" letterSpacing={1} cursor="pointer">
                        SAMULLMAN.COM
                    </Heading>
                    
      </Link>

      
            </VerticalAlign>
            </Box>

            <Box >
                <VerticalAlign>
                <Box display={["none", "none", "block"]}>
                    <Sidebar placement="right" />
                </Box>

                <Box display={["block", "block", "none"]} >
                    <Sidebar placement="bottom" />
                </Box>

                

      </VerticalAlign>

      </Box>

    </Grid>

}

export default Header;