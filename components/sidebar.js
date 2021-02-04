import React from "react";
import Link from "next/link"

import Socials from "../components/socials";

import VerticalAlign from "../components/verticalAlign";

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
  Switch,
  SimpleGrid, 
} from "@chakra-ui/react";

import {
  BiMenuAltRight
} from "react-icons/bi";

import {
  BsMoon, 
} from "react-icons/bs";

import {
  FiSun, 
} from "react-icons/fi"

import colors from "../contexts/colors";



import theme from "../public/theme.js"


function Sidebar(props) {

  const increasePopulation = colors(state => state.increasePopulation)


  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  const menuItems = [
    {
      text: "Home",
      to: "/",
    },

    // {
    //   text: "About",
    //   to: "/about",
    // },

    {
      text: "Projects",
      to: "/projects",
    },

    {
      text: "Work",
      to: "/work",
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
          <DrawerContent bg={"#0a0a0a"} color="white" textAlign="left">
            <DrawerCloseButton />
            <DrawerHeader></DrawerHeader>

            <DrawerBody textAlign={textAlign} fontWeight="600">


              {
                menuItems.map((el) => {
                  return <Box mb={4} key={el.text} >
                  <Box  letterSpacing="1" _hover={{color: "blue.200"}} transition="0.2s ease" display="inline-block" >
                    <Link href={el.to}>
                      {el.text}
                    </Link>
                  </Box>
                  </Box>
                })
              }


                




              {!session && <Box mb={4} cursor="pointer"  display="none" fontWeight="600" letterSpacing="1" _hover={{color: "blue.200"}} transition="0.2s ease" >
                    <span onClick={ signIn }>
                      Login
                    </span>
                  </Box>
              }
              {session && <>
                Signed in as {session.user.email} <br />
                <button onClick={signOut}>Sign out</button>
              </>}


              {/* <Divider mb={4} /> */}
              
              <Box display="none">
              <Grid templateColumns="24px 40px 24px"  columns={3} display="inline-grid">
                <Box >
                  <VerticalAlign>
                    <Box display="inline-block" position="relative" top={"2px"}>

                    
                  <BsMoon />
                  </Box>
                  </VerticalAlign>
                </Box>

                <Box>
                <Switch />

                
                </Box>

                <Box textAlign="center">
                  <VerticalAlign>
                  <Box display="inline-block" position="relative" top={"3px"}> 
                    <FiSun />
                    </Box>
                  </VerticalAlign>

                </Box>

              </Grid>
              </Box>

              

              


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