import Link from "next/link";

import { useState } from "react"; 
import Layout from "../components/layout";

import { DateTime } from "luxon";
import { FiChevronDown } from "react-icons/fi";
import { FaUser } from "react-icons/fa";

import {
  Box, 
  ButtonGroup, 
  Button, 
  Container, 
  Heading,
  Text, 
} from "@chakra-ui/react";
import VerticalAlign from "../components/verticalAlign";
import jump from "jump.js";

export default function Home() {
  let end = DateTime.fromISO( DateTime.local() )
  let start = DateTime.fromISO('2015-02-01');
  let diffs = end.diff(start, ['years', 'months', 'days', 'hours', 'minutes', 'seconds']);

  let [time, setTime ] = useState( diffs.toObject() )
  
  function countUp () {
    let end = DateTime.fromISO( DateTime.local() );
    let start = DateTime.fromISO('2015-02-01');
    let diffs = end.diff(start, ['years', 'months', 'days', 'hours', 'minutes', 'seconds']);
    setTime( diffs.toObject() )
  }

  setInterval(countUp, 1000);
  
  return (
    <Layout title="Home">

        <Box height="100vh" bg="gray.100">
          <VerticalAlign>
            
            <Container>
              <Heading mb={6}>
                Welcome to my page!
              </Heading>

              <Text mb={6}>
                I've been a Web Developer for { time.years } years, { time.months } months, { time.days } days, { time.hours } hours, { time.minutes } minutes, and { time.seconds.toFixed(0) } seconds. 
              </Text>

              <ButtonGroup>
                <Link href="/contact">
                <Button colorScheme="pink" rounded="full" rightIcon={<FaUser />} >
                  Contact
                </Button>
                </Link>

                <Button colorScheme="green" rounded="full" rightIcon={<FiChevronDown />} onClick={ () => { jump("#next") } }>
                  Learn more
                </Button>
              </ButtonGroup>


              
            </Container>
          </VerticalAlign>

        </Box>

        <Box bg="blue.100" id="next" height="100vh">
          <VerticalAlign>
            <Container>
              <Heading>
                Simplicity over everything. 
              </Heading>
            </Container>

          </VerticalAlign>
        </Box>
        
    </Layout>
  )
}
