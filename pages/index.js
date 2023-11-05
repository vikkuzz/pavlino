import Socials from "../components/Socials";
import styles from "../styles/Home.module.scss";

export const getStaticProps = async () => {
  console.log(`${process.env.MY_URL}/api/socials`)
  const response = await fetch(
    `${process.env.MY_URL}/api/socials`,
    { mode: "no-cors",}
  );

  if(response.headers['content-type'] === 'text/html'){
    return null
  }
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
