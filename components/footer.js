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
    return (
        <Box bg="#0a0a0a" color="white" py={20} px={5}>
            <Container maxWidth="1400px" textAlign={["center", "center", "left"]}>

                <Link href="/">
                    <Box rounded="full" height={"60px"} width="60px" overflow="hidden" margin={["0 auto", "0 auto", "0"]} cursor="pointer">
                        <Image
                            src="/sam.jpg"
                            width={60}
                            height={60}

                            alt="sam"
                        />
                    </Box>
                </Link>


                <SimpleGrid columns={[1, 1, 3, 3]} mb={[0, 0, 12]} mt={5}>
                    <Box mb={[10, 10, 0]}>



                        <Heading size="md" mb={5} letterSpacing={1} fontWeight="600" className="finland" >
                            SAMULLMAN.COM
                    </Heading>

                        <Socials />


                    </Box>

                    <Box letterSpacing={"1"} fontWeight="600" mb={[10, 10, 0]}>

                        <Heading size="md" mb={3} letterSpacing={1} fontWeight="600" >
                            PAGES
                    </Heading>

                        <Box mb={1}>
                            <Box _hover={{ color: "blue.200" }} transition="0.2s ease" display="inline-block">
                                <Link href="/">
                                    Home
                    </Link>
                            </Box>
                        </Box>

                        {/* <Box mb={1}>
                            <Box _hover={{ color: "blue.200" }} transition="0.2s ease" display="inline-block">
                                <Link href="/about">
                                    About
                    </Link>
                            </Box>
                        </Box> */}

                        <Box mb={1}>
                            <Box _hover={{ color: "blue.200" }} transition="0.2s ease" display="inline-block">
                                <Link href="/projects">
                                    Projects
                    </Link>
                            </Box>
                        </Box>

                        <Box mb={1}>
                            <Box _hover={{ color: "blue.200" }} transition="0.2s ease" display="inline-block">
                                <Link href="/work">
                                    Work
                    </Link>
                            </Box>
                        </Box>

                        <Box mb={1}>
                            <Box _hover={{ color: "blue.200" }} transition="0.2s ease" display="inline-block">
                                <Link href="/contact">
                                    Contact
                    </Link>
                            </Box>
                        </Box>


                        {/* <Box mb={1}>
                            <Box _hover={{ color: "blue.200" }} transition="0.2s ease" display="inline-block">
                                <Link href="/login">
                                    Login
                    </Link>
                            </Box>
                        </Box> */}

                    </Box>

                    <Box>
                        <Heading size="md" mb={3} letterSpacing={1} fontWeight="600" pl={[0, 0, 3]}>
                            SUBSCRIBE
                    </Heading>

                        <Box width="300px" margin={["0 auto", "0 auto", 0]}>
                            <iframe src="https://samullman.substack.com/embed" width="300px" height="80px" style={{ border: "none", background: "#0a0a0a" }} frameborder="0" scrolling="no"></iframe>
                        </Box>

                    </Box>


                </SimpleGrid>

            </Container>

        </Box>
    )
}

export default Footer;