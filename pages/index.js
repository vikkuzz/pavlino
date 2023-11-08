import Socials from "../components/Socials";
import styles from "../styles/Home.module.scss";

export const getStaticProps = async () => {
  console.log(`https://${process.env.MY_URL}/api/socials`)
  const response = await fetch(
    `https://${process.env.MY_URL}/api/socials`
  );
  console.log(response)
  //const data = await response.json();
 

  // if (!data) {
  //   return {
  //     notFound: true,
  //   };
  // }

  return {
    props: { socials: [
      {
        id: 1,
        icon: 'youtube',
        path: 'https://youtube.com',
      },
      {
        id: 2,
        icon: 'instagram',
        path: 'https://instagram.com',
      }] },
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
