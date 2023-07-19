import PropTypes from "prop-types";
import { useState } from "react";
import { Stack, Modal, Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DeleteBike from "./InsideModal/DeleteBike";
import ModifyBike from "./InsideModal/ModifyBike";
import styles from "./CardBike.module.css";
import "../../../App.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function CardBike({ data }) {
  // ------ MODAL FOR CREATE BIKE  -----------
  const [openModify, setOpenModify] = useState(false);
  const handleOpenModify = () => setOpenModify(true);
  const handleCloseModify = () => setOpenModify(false);
  // ------ MODAL FOR CREATE BIKE  -----------
  const [openDelete, setOpenDelete] = useState(false);
  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);

  const isItInMyStock = () => {
    if (data.inStock === true) return "En stock";
    if (data.inStock === false) return "Vendu";
    return null;
  };

  const getStatusColor = () => {
    if (!data.inStock) {
      return styles.waiting_color;
    }
    if (data.inStock) {
      return styles.success_color;
    }
    return null;
  };

  return (
    <div className={styles.cardbike_container}>
      <div className={styles.id_box}>
        <p>{data.id}</p>
      </div>
      <div className={styles.img_box}>
        <img className={styles.img_bike} src={data.photo} alt="" />
      </div>
      <div className={styles.name_spec_container}>
        <div className={styles.bike_name_box}>
          <p className={styles.bold}>Suzuki {data.model}</p>
        </div>
        <div className={styles.bike_spec_box}>
          <div className={styles.spec_column}>
            <p>Année</p>
            <p className={styles.bold}>{data.year}</p>
          </div>
          <div className={styles.spec_column}>
            <p>Kilométrage</p>
            <p className={styles.bold}>{data.kilometers}</p>
          </div>
          <div className={styles.spec_column}>
            <p>Prix</p>
            <p className={styles.bold}>{data.price}</p>
          </div>
        </div>
      </div>
      <div className={styles.btn_box}>
        <p className={`${styles.status_bar} ${getStatusColor() || ""}`}>
          {isItInMyStock()}
        </p>
        <div className={styles.btn_row}>
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <IconButton
              onClick={handleOpenModify}
              aria-label="delete"
              size="large"
              color="secondary"
            >
              <EditIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              onClick={handleOpenDelete}
              aria-label="delete"
              size="large"
              color="error"
            >
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          </Stack>
        </div>

        <Modal
          open={openModify}
          onClose={handleCloseModify}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className={styles.modal_container}>
              <ModifyBike />
            </div>
          </Box>
        </Modal>
        <Modal
          open={openDelete}
          onClose={handleCloseDelete}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className={styles.delete_modal_container}>
              <DeleteBike close={setOpenDelete} />
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

CardBike.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    photo: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    kilometers: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    inStock: PropTypes.bool.isRequired,
  }).isRequired,
};
