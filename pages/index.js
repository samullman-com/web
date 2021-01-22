import Link from "next/link";
import Image from "next/image";
import { useState } from "react"; 
import Layout from "../components/layout";
import { signIn, signOut, useSession } from 'next-auth/client'

import { DateTime } from "luxon";
import { FiChevronDown, FiSend } from "react-icons/fi";
import { FaUser } from "react-icons/fa";

import {
  Box, 
  ButtonGroup, 
  Button, 
  Container, 
  Heading,
} from "@chakra-ui/react";
import VerticalAlign from "../components/verticalAlign";
import jump from "jump.js";

function Index ()  {
  const [ session, loading ] = useSession()
  
  // let end = DateTime.fromISO( DateTime.local() )
  // let start = DateTime.fromISO('2015-02-01');
  // let diffs = end.diff(start, ['years', 'months', 'days', 'hours', 'minutes', 'seconds']);

  // let [time, setTime ] = useState( diffs.toObject() )
  
  // function countUp () {
  //   let end2 = DateTime.fromISO( DateTime.local() );
  //   let start2 = DateTime.fromISO('2015-02-01');
  //   let diffs2 = end.diff(start, ['years', 'months', 'days', 'hours', 'minutes', 'seconds']);
  //   setTime( diffs.toObject() )
  // }

  // setInterval(countUp, 1000);
  
  return (
    <Layout title="Home">
        <Box height="100vh" position="relative">

        <VerticalAlign>
          <Container zIndex="5" position="relative" maxW="1200px">
            <Heading color="white" fontSize={[40, "9vw", "9vw", 96,  104]} >
            CHANGING THE WAY
            </Heading>

            <Heading color="white" fontSize={[40, "9vw", "9vw", 96,  104]} >
            ORGANIZATIONS DO
            </Heading>

            <Heading color="white" fontSize={[40, "11vw", "11vw", 110,  124]} >
            DIGITAL
            </Heading>
          </Container>
          
        </VerticalAlign>
          
        <Image
          src="/stars.jpg"
          loading="eager"
          layout="fill"
          objectFit="cover"
          alt="Stars"
          
        />
        
        
        
        </Box>

        <Box minHeight="100vh">

        </Box>


        
    </Layout>
  )
}

export default Index;