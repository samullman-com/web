import Head from 'next/head';
import Header from "../components/header";
import Footer from "../components/footer";

function Layout ( props ) {
    return < >
    <Head>
      <title>{ props.title }</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />

    <main>
        { props.children }
    </main>

    <Footer />
  </>
}

export default Layout;