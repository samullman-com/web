import React from "react";
import Link from "next/link"

import Socials from "../components/socials";


import { signIn, signOut, useSession } from 'next-auth/client'


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
  BiMenuAltRight
} from "react-icons/bi";




import theme from "../public/theme.js"


function Sidebar(props) {
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
      text: "Projects",
      to: "/projects",
    },


    {
      text: "Contact",
      to: "/contact",
    },

    
  ]

  let textAlign = props.placement == "right" ? "left" : "center";
  const [session, loading] = useSession()


  return (
    <>
      <IconButton ref={btnRef} icon={<BiMenuAltRight />} float="right" variant="ghost" colorScheme="none" color="white" fontSize="30px" onClick={onOpen}>

      </IconButton>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        placement={props.placement}
      >
        <DrawerOverlay>
          <DrawerContent bg={"black"} color="white" textAlign="left">
            <DrawerCloseButton />
            <DrawerHeader></DrawerHeader>

            <DrawerBody textAlign={textAlign} fontWeight="600">


              {
                menuItems.map((el) => {
                  return <Box mb={4} key={el.text}  letterSpacing="1" _hover={{color: "blue.200"}} transition="0.2s ease" >
                    <Link href={el.to}>
                      {el.text}
                    </Link>
                  </Box>
                })
              }


                




              {!session && <Box mb={4} cursor="pointer"   fontWeight="600" letterSpacing="1" _hover={{color: "blue.200"}} transition="0.2s ease" >
                    <span onClick={ signIn }>
                      Login
                    </span>
                  </Box>
              }
              {session && <>
                Signed in as {session.user.email} <br />
                <button onClick={signOut}>Sign out</button>
              </>}





            </DrawerBody>

            <DrawerFooter px={5} textAlign="center" display="block">

             <Socials />

            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}

export default Sidebar;