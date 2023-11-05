import styles from "../styles/Socials.module.scss";

const Socials = ({ socials }) => {

  if (!socials) {
    return null;
  }

  return (
    <>
    <ul className={styles.socials}>
      {socials && socials.map(({ id, icon, path }) => (
        <li key={id}>
          <a href={path} target="_blank" rel="noopener noreferrer">
            <i className={`fab fa-${icon}`} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
    </>
  );
}

export default Socials;
