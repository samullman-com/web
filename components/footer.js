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
                    


                    <Heading size="lg" mb={ 5 } letterSpacing={ 1 } fontWeight="600">
                        SAMULLMAN.COM
                    </Heading>
                    <Box fontSize="15px" fontWeight="600" letterSpacing={ 1 } mb={ 6 } color="gray.100">
                        Agents of digital change. 
                    </Box>

                    <Box maxWidth="240px">

                     <Socials />
                    </Box>
                </Box>

                <Box>
                    <Box fontSize="17px" fontWeight="600" letterSpacing="1" mb={1}>
                    <Link href="/">
                        Home
                    </Link>
                    </Box>
                    
                    <Box fontSize="17px" fontWeight="600" letterSpacing="1" mb={1}>
                    <Link href="/about">
                        About
                    </Link>
                    </Box>

                    <Box fontSize="17px" fontWeight="600" letterSpacing="1" mb={1}>
                    <Link href="/projects">
                        Projects
                    </Link>
                    </Box>

                    <Box fontSize="17px" fontWeight="600" letterSpacing="1" mb={1}>
                    <Link href="/contact">
                        Contact
                    </Link>
                    </Box>

                    <Box fontSize="17px" fontWeight="600" letterSpacing="1" mb={1}>
                    <Link href="/login">
                        Login
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