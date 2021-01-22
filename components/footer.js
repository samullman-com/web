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
            <SimpleGrid columns={[ 1, 2, 2, 4]} mb={12}>
                <Box>
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
                    <Heading size="sm" mb={ 6 }>
                        AGENTS OF DIGITAL CHANGE. 
                    </Heading>

                    <Box maxWidth="240px">

                     <Socials />
                    </Box>
                </Box>

                <Box>
                    aksdjnf
                    
                </Box>

                <Box>
                    asdkjfn
                    
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