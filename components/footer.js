import Link from "next/link"
import Image from "next/image"
import Socials from "../components/socials";
import {
    Box,
    Container, 
    SimpleGrid, 
    Heading,
    Divider, 
} from "@chakra-ui/react"

function Footer () {
    return (
        <Box bg="black" color="white"  py={ 20 } px={ 5 }>
            <Container maxWidth="1400px">

            <Link href="/">
                    <Box rounded="full"  mb={6} height={"60px"} width="60px" overflow="hidden">
                    <Image
        src="/sam.jpg"
        width={ 60 }
        height={ 60 }
        
        alt="sam"
      />
                    </Box>
                    </Link>


            <SimpleGrid columns={[ 1, 1, 3, 3]} mb={12}>
                <Box>
                    


                    <Heading size="lg" mb={ 5 }>
                        SAMULLMAN.COM
                    </Heading>
                    <Heading size="sm" mb={ 6 }>
                        Agents of digital change. 
                    </Heading>

                    <Box maxWidth="240px">

                     <Socials />
                    </Box>
                </Box>

                <Box>
                    <Box fontSize="17px" fontWeight="600" letterSpacing="1" mb={1}>
                    <Link href="/">
                        HOME
                    </Link>
                    </Box>
                    
                    <Box fontSize="17px" fontWeight="600" letterSpacing="1" mb={1}>
                    <Link href="/about">
                        ABOUT
                    </Link>
                    </Box>

                    <Box fontSize="17px" fontWeight="600" letterSpacing="1" mb={1}>
                    <Link href="/projects">
                        PROJECTS
                    </Link>
                    </Box>

                    <Box fontSize="17px" fontWeight="600" letterSpacing="1" mb={1}>
                    <Link href="/contact">
                        CONTACT
                    </Link>
                    </Box>

                    <Box fontSize="17px" fontWeight="600" letterSpacing="1" mb={1}>
                    <Link href="/login">
                        LOGIN
                    </Link>
                    </Box>
                    
                </Box>

                <Box>
                    asdkjfn
                    
                </Box>


            </SimpleGrid>

            <Divider />
            </Container>

        </Box>
    )
}

export default Footer;