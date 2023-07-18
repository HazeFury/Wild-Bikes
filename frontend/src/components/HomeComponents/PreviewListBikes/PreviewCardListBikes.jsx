import styles from "./PreviewCardListBikes.module.css";
import "../../../App.css";

export default function PreviewCardListBikes() {
  return (
    <div className={styles.previewcardlistbikes_container}>
      <div className={styles.img_preview_box}>
        <img
          className={styles.img_preview}
          src="https://img.classistatic.de/api/v1/mo-prod/images/78/787be64c-f20f-45ff-962e-088662dc6ba0?rule=mo-1024.jpg"
          alt=""
        />
      </div>
      <h3 className={styles.bike_model}>Suzuki Bandit 650</h3>
      <div className={styles.info_box}>
        <p>2008 - 34 000 km</p>
        <p>3 500€</p>
      </div>
    </div>
  );
}
