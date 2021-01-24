import Link from "next/link";
import Image from "next/image";
import { useState } from "react"; 
import Layout from "../components/layout";
import ProgressiveImage from "react-progressive-graceful-image";
import { signIn, signOut, useSession } from 'next-auth/client'

import { DateTime } from "luxon";
import { FiChevronDown, FiSend } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { 
  ImArrowDown
} from "react-icons/im";

import {
  Box, 
  ButtonGroup, 
  Button, 
  Container, 
  Heading,
  Link as ChakraLink, 
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
        <Box height={["calc(100vh - 70px)", "calc(100vh - 70px)", "calc(100vh - 80px)"]} position="relative">

        <VerticalAlign>
          <Container zIndex="5" position="relative" maxW="1200px" mb={ 10 }>
            <Heading color="white" fontSize={[40, 55, 85, 95,  105]} textAlign={["center", "center", "left"]} >
            CHANGING THE WAY ORGANIZATIONS DO DIGITAL


            <Box borderRadius={30} height={"20px", "30px"} width={["20px", "30px"]} overflow="hidden"  ml={4} display={["none", "none", "inline"]}>
                    <Image
                    className="rounded"
        src="/sam.jpg"
        width={ 30  }
        height={ 30 }
        
        
        alt="sam"
      />
                    </Box>
            </Heading>

            <Box borderRadius={30} height={["60px"] } width={["60px", ]} overflow="hidden"  margin={["20px auto"]} display={["block", "block", "none"]}>
                    <Image
                    className="rounded"
        src="/sam.jpg"
        width={ 60  }
        height={ 60 }
        
        
        alt="sam"
      />
                    </Box>

           
          </Container>
          
        </VerticalAlign>
        
        <Box position="absolute" top={0} width="100%" height="100%" bottom={0}>

        <ProgressiveImage src="stars.jpg" placeholder="stars.jpg">
  {(src) => <img src={src} alt="Stars" style={{height: "100%", width: "100%", objectFit: "cover" }} />}
</ProgressiveImage>
</Box>


        {/* <Image
          src="/stars.jpg"
          loading="eager"
          layout="fill"
          objectFit="cover"
          alt="Stars"
          
        /> */}
        
        
        
        </Box>

        <Box  py={[5, 10, 12]} px={[5, 5, 10]} bg="gray.100">
          <Container maxW="1200px" bg="white" rounded="lg" p={ 6 } shadow="lg">
            <Heading mb={6}>
              Welcome to the Progressive Web. 
            </Heading>

            <Box >
              <ChakraLink href="https://jamstack.org/" target="_blank" rel="noopener noreferrer" rounded="md">
              JAMStack</ChakraLink> tools have allowed indepedent developers to continuously deploy Progressive Web Applications targeting all screen sizes (Desktop, Tablet, and Mobile). 
            </Box>
          </Container>


        </Box>

        <Box textAlign="center" background="linear-gradient(to bottom, #EDF2F7, white)" >
          <VerticalAlign>
          <Box display="inline-block" fontSize={[100, 200, 250]} color="blue.800" cursor="pointer">
          <ImArrowDown />
          </Box>
          </VerticalAlign>
        </Box>

        <Box py={[5, 10, 12]} px={[2, 5, 10]} bg="white">

        </Box>



        
    </Layout>
  )
}

export default Index;