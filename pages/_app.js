import Layout from "../components/Layout";
import "../styles/globals.scss";
import { AuthProvider } from "../context/auth";

const MyApp = ({ Component, pageProps }) => (
  <AuthProvider>
    <Layout>
      <main>
        <Component {...pageProps} />
      </main>
    </Layout>
  </AuthProvider>
);

export default MyApp;
