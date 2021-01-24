import Head from 'next/head';
import Header from "../components/header";
import Footer from "../components/footer";

import {
  Box, 
} from "@chakra-ui/react";

function Layout ( props ) {
    return < >
    <Head>
      <title>{ props.title }</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />

    <Box pt={[ "60px", "60px", "80px"]}> 
    <main>
        { props.children }
    </main>
    </Box>

    <Footer />
  </>
}

export default Layout;