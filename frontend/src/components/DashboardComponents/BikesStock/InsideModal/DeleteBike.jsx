import PropTypes from "prop-types";
import { Button } from "@mui/material";
import styles from "./DeleteBike.module.css";

export default function DeleteBike({ close }) {
  const closeThisDeleteModal = () => {
    close(false);
  };
  const handleActionDelete = () => {
    close(false);
  };

  return (
    <div className={styles.deletebike_container}>
      <p>Êtes-vous sûr de vouloir suprimer cette moto ?</p>
      <div className={styles.btn_box}>
        <Button
          onClick={closeThisDeleteModal}
          variant="outlined"
          color="secondary"
        >
          NON
        </Button>
        <Button onClick={handleActionDelete} variant="contained" color="error">
          OUI
        </Button>
      </div>
    </div>
  );
}

DeleteBike.propTypes = {
  close: PropTypes.func.isRequired,
};
