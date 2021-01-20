import Sidebar from "../components/sidebar";
import VerticalAlign from "../components/verticalAlign";
import Image from "next/image";

import Link from 'next/link'

import {
    Box, 
    Button, 
    Grid,
    IconButton,
} from "@chakra-ui/react"

import {
    BsChevronUp
} from "react-icons/bs";

import theme from "../public/theme";

const Header =  () => {
    return  <Grid gridTemplateColumns="100px calc(100% - 100px)" bg="gray.900" height={["70px", "70px",  "80px"]} position="fixed" width="100vw" zIndex="600" top={["none", "none", "0"]} bottom={["0", "0", "none"]} px={ 5 }>

        <Box>
            <VerticalAlign>
                <Link href="/">
                    <Box rounded="full" overflow="hidden" width={[50, 50, "55px"]}>
            <Image
        src="/sam.jpg"
        width={ 55 }
        height={ 55 }
        
        alt="Home"
      />
        </Box>
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