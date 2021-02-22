import Link from "next/link"
import Image from "next/image"
import Socials from "../components/socials";
import {
    Box,
    Container,
    SimpleGrid,
    Heading,
    Divider,
    Grid,
} from "@chakra-ui/react"

function Footer() {

    const pages = [
        {
            title: "Home",
            link: "/",
        },

        {
            title: "Projects",
            link: "/projects",
        },

        {
            title: "Work",
            link: "/work",
        },

        {
            title: "Contact",
            link: "/contact",
        },
    ]
    return (
        <Box bg="#0a0a0a" color="white" py={20} px={5}>
            <Container maxWidth="1400px" textAlign={["center", "center", "center", "left"]}>

                <Link href="/">
                    <Box rounded="full" height={"60px"} width="60px" overflow="hidden" margin={["0 auto", "0 auto", "0 auto", "0"]} cursor="pointer">
                        <Image
                            src="/sam.jpg"
                            width={60}
                            height={60}
                            

                            alt="sam"
                        />
                    </Box>
                </Link>


                <SimpleGrid columns={[1, 1, 1, 3]} mb={[0, 0, 0, 12]} mt={5}>
                    <Box mb={[10, 10, 10, 0]}>
                        <Heading size="md" className="cassannet" mb={5} letterSpacing={2} fontWeight="600" >
                            SAMULLMAN.COM
                    </Heading>

                        <Socials />


                    </Box>

                    <Box letterSpacing={"1"} fontWeight="600" mb={[10, 10, 10, 0]}>

                        <Heading size="md" mb={3} letterSpacing={2} fontWeight="600" className="cassannet" >
                            PAGES
                    </Heading>

                    {
                        pages.map( el => {
                            return <Box mb={1} key={ el.title }>
                            <Box _hover={{ color: "gray.300" }} transition="0.2s ease" display="inline-block">
                                <Link href={ el.link }>
                                    { el.title }
                    </Link>
                            </Box>
                        </Box>
                        })
                    }

                        

                     

                    </Box>

                    <Box>
                        <Heading size="md" mb={3} letterSpacing={2} fontWeight="600" pl={[0, 0, 0,  3]} >
                            SUBSCRIBE
                    </Heading>

                        <Box width="300px" margin={["0 auto", "0 auto", "0 auto",  0]}>
                            <iframe src="https://samullman.substack.com/embed" aria-label="Substack Subscribe" width="300px" height="80px" style={{ border: "none", background: "#0a0a0a" }} frameBorder="0" scrolling="no"></iframe>
                        </Box>

                    </Box>


                </SimpleGrid>

            </Container>

        </Box>
    )
}

export default Footer;