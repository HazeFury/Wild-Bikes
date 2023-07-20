import PropTypes from "prop-types";
import styles from "./BikeCard.module.css";

export default function BikeCard({ bike }) {
  return (
    <div className={styles.previewcardlistbikes_container}>
      <div className={styles.img_preview_box}>
        <img className={styles.img_preview} src={bike.image_url} alt="bike" />
      </div>
      <div className={styles.info_section}>
        <h3 className={styles.bike_model}>
          {bike.brand} {bike.model}
        </h3>
        <p className={styles.price}>{bike.price}€</p>
        <div className={styles.info_box}>
          <p>
            {bike.year} - {bike.kilometers} km
          </p>
        </div>
      </div>
    </div>
  );
}

BikeCard.propTypes = {
  bike: PropTypes.shape({
    image_url: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    kilometers: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
