import Socials from "../components/Socials";
import styles from "../styles/Home.module.scss";

export const getStaticProps = async () => {
  const response = await fetch(`${process.env.VERCEL_URL}/socials`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { socials: data },
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
