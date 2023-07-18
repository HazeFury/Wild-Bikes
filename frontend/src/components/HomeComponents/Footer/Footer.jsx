import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer_container}>
      <p>WILD BIKES@2023</p>
      <a href="/">Mentions légales</a>
    </div>
  );
}
