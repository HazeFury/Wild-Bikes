import PropTypes from "prop-types";
import { useState } from "react";
import { Stack, Modal, Box } from "@mui/material";
import { toast } from "react-toastify";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DeleteBike from "./InsideModal/DeleteBike";
import ModifyBike from "./InsideModal/ModifyBike";
import styles from "./CardBike.module.css";
import "../../../App.css";
import { useUserContext } from "../../../contexts/userContext";
import instance from "../../../services/APIService";

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

export default function CardBike({ data, refreshData, setRefreshData }) {
  const { logout } = useUserContext();
  const notifySuccess = (text) => toast.success(text);
  const notifyFail = () => toast.error("Un problème est survenu");
  // ------ MODAL FOR CREATE BIKE  -----------
  const [openModify, setOpenModify] = useState(false);
  const handleOpenModify = () => setOpenModify(true);
  const handleCloseModify = () => setOpenModify(false);
  // ------ MODAL FOR CREATE BIKE  -----------
  const [openDelete, setOpenDelete] = useState(false);
  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);

  // ------ DELETE BIKE  -----------

  const { id } = data;
  const handleDelete = () => {
    console.info(id);
    instance
      .put(`/delete/${id}`)
      .then((res) => {
        if (res.status === 204) {
          notifySuccess("Cette moto à bien été suprimée !");
        } else {
          notifyFail();
        }
      })
      .catch((err) => {
        if (err.response?.status === 403) {
          logout(true);
        }
        if (err.response.status === 500) console.error(err);
      });
    setRefreshData(!refreshData);
    setOpenDelete(false);
  };

  const isItInMyStock = () => {
    if (data.stock) return "En stock";
    if (!data.stock) return "Vendu";
    return null;
  };

  const getStatusColor = () => {
    if (!data.stock) {
      return styles.waiting_color;
    }
    if (data.stock) {
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
        <img className={styles.img_bike} src={data.image_url} alt="" />
      </div>
      <div className={styles.name_spec_container}>
        <div className={styles.bike_name_box}>
          <p className={styles.bold}>
            {data.brand} {data.model}
          </p>
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
              <ModifyBike
                id={id}
                refreshData={refreshData}
                setRefreshData={setRefreshData}
                close={handleCloseModify}
              />
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
              <DeleteBike
                text="Êtes-vous sûr de vouloir suprimer cette moto ?"
                close={setOpenDelete}
                action={handleDelete}
              />
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
    image_url: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    kilometers: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
  }).isRequired,
  refreshData: PropTypes.bool.isRequired,
  setRefreshData: PropTypes.func.isRequired,
};
