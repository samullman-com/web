import React from "react";
import Link from "next/link";
import Socials from "../components/socials";
import { useRouter } from 'next/router';

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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import { BiMenuAltRight } from "react-icons/bi";
import userbase from "userbase-js";

import theme from "../public/theme.js";
import Session from "../contexts/session";

function Sidebar(props) {
  const session = Session( state => state);
  const router = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const menuItems = [
    {
      text: "Home",
      to: "/",
    },

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
  ];

  function logout () {
    userbase.signOut().then(() => {
      // user logged out
      window.href.location = "/"
      
    }).catch((e) => console.error(e))
  }

  let textAlign = props.placement == "right" ? "left" : "center";
  let loginLink = session.user ? (
    <Box>
      <Box
        letterSpacing="1"
        _hover={{ color: "gray.300" }}
        transition="0.2s ease"
        display="inline-block"
        cursor="pointer"
        onClick={ logout }
      >
        Logout
      </Box>
    </Box>
  ) : (
    <Box >
        <Box
        letterSpacing="1"
        _hover={{ color: "gray.300" }}
        transition="0.2s ease"
        display="inline-block"
      >
        <Link href="/login">
        Login
        </Link>
      </Box>
    </Box>
  );

  return (
    <>
      <IconButton
        ref={btnRef}
        icon={<BiMenuAltRight />}
        rounded="sm"
        aria-label="Menu"
        float="right"
        variant="ghost"
        colorScheme="none"
        fontSize="30px"
        onClick={onOpen}
      />

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        placement={props.placement}
      >
        <DrawerOverlay>
          <DrawerContent bg={"#0a0a0a"}>
            <DrawerCloseButton color="white" rounded="sm" />
            <DrawerHeader></DrawerHeader>

            <DrawerBody textAlign={textAlign} fontWeight="600" color="white">
              {menuItems.map((el) => {
                return (
                  <Box mb={4} key={el.text}>
                    <Box
                      letterSpacing="1"
                      _hover={{ color: "gray.300" }}
                      transition="0.2s ease"
                      display="inline-block"
                    >
                      <Link href={el.to}>{el.text}</Link>
                    </Box>
                  </Box>
                );
              })}

              {loginLink }
            </DrawerBody>

            <DrawerFooter px={5} display="block">
              <Socials />
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}

export default Sidebar;



function LoginModal () {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
       <Box
        letterSpacing="1"
        _hover={{ color: "gray.300" }}
        transition="0.2s ease"
        display="inline-block"
        onClick={onOpen}
      >
        Login
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            asdkfjn
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
