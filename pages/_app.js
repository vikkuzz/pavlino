import Image from "next/image";
import Head from "next/head";
import Layout from "../components/Layout";
import "../styles/globals.scss";
import { AuthProvider } from "../context/auth";

const MyApp = ({ Component, pageProps }) => (
  <AuthProvider>
    <Layout>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </Layout>
  </AuthProvider>
);

export default MyApp;
