import { useEffect } from "react";
import Socials from "../components/Socials";
import styles from "../styles/Home.module.scss";

export const getStaticProps = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/socials`,
    { mode: "no-cors",}
  );

  
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
  useEffect(()=>{
    async function getSocials(){
      const response = await fetch(
      `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/socials`,
     { mode: "no-cors",}
    )
    console.log(await response.json())
     
    }
    getSocials()
   

  },[])
  return (
    <div className={styles.wrapper}>
      <Socials socials={socials} />
    </div>
  );
};

export default Home;
