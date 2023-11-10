import Socials from "../components/Socials";
import styles from "../styles/Home.module.scss";
import { getAbsoluteUrl } from "../utils";

export const getStaticProps = async () => {
  const abs_url = getAbsoluteUrl()
  const response = await fetch(
    `${abs_url}/api/socials`
  );

  console.log(getAbsoluteUrl())
  //const data = await response.json();
 

  // if (!data) {
  //   return {
  //     notFound: true,
  //   };
  // }

  return {
    props: { socials: 'data' },
  };
};

const Home = ({ socials }) => {
  
  return (
    <div className={styles.wrapper}>
      {/* <Socials socials={socials} /> */}
    </div>
  );
};

export default Home;
