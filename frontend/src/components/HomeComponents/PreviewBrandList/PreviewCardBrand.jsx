import PropTypes from "prop-types";
import styles from "./PreviewCardBrand.module.css";
import "../../../App.css";

export default function PreviewCardBrand({ previewBikes }) {
  return (
    <div className={styles.previewcardbrands_container}>
      <img
        className={styles.img_brand}
        src={previewBikes.image}
        alt={previewBikes.brandName}
      />
    </div>
  );
}

PreviewCardBrand.propTypes = {
  previewBikes: PropTypes.shape({
    image: PropTypes.string.isRequired,
    brandName: PropTypes.string.isRequired,
  }).isRequired,
};
