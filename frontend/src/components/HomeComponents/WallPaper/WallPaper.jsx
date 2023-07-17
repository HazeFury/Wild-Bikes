import styles from "./WallPaper.module.css";

export default function WallPaper() {
  return (
    <>
      <div className={styles.wallpaper_container} />
      <div className={styles.header_div}>
        <h2>Votre expert en motos d'ocasion depuis 2014</h2>
      </div>
    </>
  );
}
