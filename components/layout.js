import Head from 'next/head';
import Header from "../components/header";

const Layout = ( props ) => (
    <div >
    <Head>
      <title>{ props.title }</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />

    <main>
        { props.children }
    </main>

    <footer>
    </footer>
  </div>
)

export default Layout;