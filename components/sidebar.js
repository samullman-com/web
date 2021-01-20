import React from "react";
import Link from "next/link"
import { SocialIcon } from "react-social-icons";

import {
    Box, 
    Button, 
    Grid,
    IconButton,
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    VStack,
    Divider,
    Flex,
    Spacer,
} from "@chakra-ui/react";

import {
  RiMenu5Fill
} from "react-icons/ri";


import theme from "../public/theme.js"


const Sidebar = ( props ) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    const menuItems = [
        {
            text: "Home", 
            to: "/",
        }, 

        {
            text: "About", 
            to: "/about",
        }, 


        {
            text: "Contact", 
            to: "/contact",
        }, 

        {
            text: "Login", 
            to: "/login",
        }, 
    ]
    
    let textAlign = props.placement == "right" ? "left" : "center";

    return (
      <>
        <IconButton ref={btnRef} icon={ <RiMenu5Fill /> } float="right" variant="ghost" colorScheme="none" color="white" fontSize="30px" onClick={onOpen}>
            
            </IconButton>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
          placement={ props.placement }
        >
          <DrawerOverlay>
            <DrawerContent bg={ "gray.900" } color="white" textAlign="left">
              <DrawerCloseButton />
              <DrawerHeader></DrawerHeader>
  
              <DrawerBody textAlign={ textAlign }>
                      

                   {
                       menuItems.map( (el) => {
                           return <Box mb={4} key={ el.text } fontSize="18px">
                               <Link href={ el.to }>
                           { el.text }
                           </Link>
                       </Box>
                       })
                   }


                   <Divider mb={3} /> 

                   <Flex mb={3}>

                      <Flex>
                      <SocialIcon url="https://github.com/samullman" fgColor="white" style={{width: 30, height: 30}} />
                     </Flex>

                     <Spacer />

                    <Flex>
                      <SocialIcon url="https://twitter.com/samullman" fgColor="white" style={{width: 30, height: 30}} />
                     </Flex>

                     <Spacer />


                     <Flex>
                      <SocialIcon url="https://linkedin.com/in/jaketrent" fgColor="white" style={{width: 30, height: 30}} />
                     </Flex>

                     <Spacer />

                     <Flex>
                      <SocialIcon url="https://facebook.com/samullman" fgColor="white" style={{width: 30, height: 30}} />
                     </Flex>

                     <Spacer />

                     <Flex>
                      <SocialIcon url="https://instagram.com/samullman" fgColor="white" style={{width: 30, height: 30}} />
                     </Flex>

                     <Spacer />

                     <Flex>
                      <SocialIcon url="https://twitch.tv/samullman" fgColor="white" style={{width: 30, height: 30}} />
                     </Flex>

                   </Flex>

                   <Divider mb={ 3 } /> 


              </DrawerBody>
  
              <DrawerFooter></DrawerFooter>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </>
    )
  }

  export default Sidebar;