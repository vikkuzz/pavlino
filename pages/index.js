import Socials from "../components/Socials";
import styles from "../styles/Home.module.scss";
import { socials } from "./api/data/socials";

export const getStaticProps = async () => {
  

  return {
    props: { socials: socials },
  };
};

const Home = ({ socials }) => {
  
  return (
    <div className={styles.wrapper}>
      <Socials socials={socials} />
    </div>
  );
};

export default Home;
