import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./SideBar.module.css";

export default function SideBar({ closeModal }) {
  const handleClose = () => {
    closeModal(false);
  };
  return (
    <div className={styles.sidebar_container}>
      <div className={`${styles.side_item_list} ${styles.side_btn_class}`}>
        <Link to="/" className={styles.side_link_class}>
          <button
            onClick={handleClose}
            type="button"
            className={styles.btn_class}
          >
            Nos motos
          </button>
        </Link>
        <Link to="/" className={styles.side_link_class}>
          <button
            onClick={handleClose}
            type="button"
            className={styles.btn_class}
          >
            Nos marques
          </button>
        </Link>
        <Link to="/" className={styles.side_link_class}>
          <button
            onClick={handleClose}
            type="button"
            className={styles.btn_class}
          >
            À propos
          </button>
        </Link>
        <Link to="/" className={styles.side_link_class}>
          <button
            onClick={handleClose}
            type="button"
            className={styles.btn_class}
          >
            Blog
          </button>
        </Link>
      </div>
      <div className={`${styles.side_legal} ${styles.side_btn_class}`}>
        <Link to="/" className={styles.side_link_class}>
          <button
            onClick={handleClose}
            type="button"
            className={styles.btn_class}
          >
            Mentions légales
          </button>
        </Link>
      </div>
    </div>
  );
}

SideBar.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
