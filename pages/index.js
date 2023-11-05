import Socials from "../components/Socials";
import styles from "../styles/Home.module.scss";

export const getStaticProps = async () => {
  console.log(process.env.NEXT_PUBLIC_VERCEL_URL)
  // const response = await fetch(
  //   `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/socials`
  // );
  const socials = [
    {
      id: 1,
      icon: 'youtube',
      path: 'https://youtube.com/YauhenKavalchuk',
    },
    {
      id: 2,
      icon: 'instagram',
      path: 'https://instagram.com/YauhenKavalchuk',
    },
    {
      id: 3,
      icon: 'linkedin',
      path: 'https://linkedin.com/in/YauhenKavalchuk',
    },
    {
      id: 4,
      icon: 'vk',
      path: 'https://vk.com/YauhenKavalchuk',
    },
    {
      id: 5,
      icon: 'twitter',
      path: 'https://twitter.com/YauhenKavalchuk',
    },
  ]
  const data = await socials.json();

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
      {/* <Socials socials={socials} /> */}
    </div>
  );
};

export default Home;
