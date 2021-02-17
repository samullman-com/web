import Image from "next/image";

import {
    Grid,
    Box,
} from "@chakra-ui/react";


function Socials() {
    return (
        <Box textAlign={["center", "center", "center", "left"]}>
        <Grid gridTemplateColumns={"repeat(5, 1fr)"} gap={4} maxWidth="300px" display="inline-grid">
            <Box rounded="md" height="30px" overflow="hidden">
                <a href="https://github.com/samullman-com" target="_blank" rel="noopener noreferrer" aria-label="Github">
                    <Image
                        src="/github-icon.svg"
                        width={30}
                        height={30}
                        alt="Github"
                    />
                </a>

            </Box>

            <Box rounded="md" height="30px" overflow="hidden" >
                <a href="https://instagram.com/samullmandotcom" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <Image
                        src="/instagram-icon.svg"
                        width={30}
                        height={30}
                        alt="Instagram"
                    />
                </a>

            </Box>


            <Box rounded="md" height="30px" overflow="hidden">
                <a href="https://twitter.com/samullman" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <Image
                        src="/twitter-icon.svg"
                        width={30}
                        height={30}
                        alt="Twitter"
                    />
                </a>

            </Box>

            <Box rounded="md" height="30px" overflow="hidden">

                <a href="https://www.linkedin.com/in/samullman/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Image
                        src="/linkedin-icon.svg"
                        width={30}
                        height={30}
                        alt="LinkedIn"
                    />
                </a>

            </Box>


            <Box rounded="md" height="30px" overflow="hidden">

                <a href="https://www.twitch.tv/samullman/" target="_blank" rel="noopener noreferrer" aria-label="Twitch">
                    <Image
                        src="/twitch-icon.svg"
                        width={30}
                        height={30}
                        alt="Twitch"
                    />
                </a>

            </Box>






        </Grid>
        </Box>
    )
}

export default Socials;