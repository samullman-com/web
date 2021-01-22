import { SocialIcon } from "react-social-icons";

import {
    Flex, 
    Spacer, 
} from "@chakra-ui/react";


function Socials () {
    return (
        <Flex width="100%">

        <Flex>
          <SocialIcon url="https://github.com/samullman-com" target="blank" fgColor="white" style={{ width: 30, height: 30 }} />
        </Flex>

        <Spacer />

        <Flex>
          <SocialIcon url="https://twitter.com/samullman" target="blank" fgColor="white" style={{ width: 30, height: 30 }} />
        </Flex>

        <Spacer />


        <Flex>
          <SocialIcon url="https://www.linkedin.com/in/samullman/" target="blank" fgColor="white" style={{ width: 30, height: 30 }} />
        </Flex>

        <Spacer />



        <Flex>
          <SocialIcon url="https://instagram.com/samullmandotcom" target="blank" fgColor="white" style={{ width: 30, height: 30 }} />
        </Flex>

        <Spacer />

        <Flex>
          <SocialIcon url="https://twitch.tv/samullman" target="blank" fgColor="white" style={{ width: 30, height: 30 }} />
        </Flex>

      </Flex>
    )
}

export default Socials;