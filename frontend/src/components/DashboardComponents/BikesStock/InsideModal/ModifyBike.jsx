import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import MenuItem from "@mui/material/MenuItem";
import { InputLabel, FormControl, Button, Modal } from "@mui/material";
import { toast } from "react-toastify";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { green } from "@mui/material/colors";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import DeleteBike from "./DeleteBike";
import styles from "./ModifyBike.module.css";
import { useUserContext } from "../../../../contexts/userContext";
import instance from "../../../../services/APIService";

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

export default function ModifyBike({ close, refreshData, setRefreshData, id }) {
  const { logout } = useUserContext();
  const notifySuccess = (text) => toast.success(text);
  const notifyFail = () => toast.error("Un problème est survenu");
  const [confirmation, setConfirmation] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const timer = useRef();

  const [newBikeData, setnewBikeData] = useState({
    model: "",
    year: "",
    kilometers: "",
    bridle: "",
    image_url: "",
    color: "",
    brand_id: "",
    segment_id: "",
    price: "",
  });

  const handleChange = (event) => {
    setnewBikeData({ ...newBikeData, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    instance
      .get(`/bike/${id}`)
      .then((response) => {
        setnewBikeData(response.data);
      })
      .catch((err) => {
        if (err.response?.status === 403) {
          logout(true);
        }
        if (err.response.status === 500) console.error(err);
      });
  }, []);

  const handleSubmit = () => {
    instance
      .put(`/modify/${id}`, newBikeData)
      .then((response) => {
        if (response.status === 200) {
          notifySuccess("Vos modifications ont été prises en compte");
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
  };

  const handleOpenSold = () => {
    setConfirmation(true);
  };

  const handleSold = () => {
    instance
      .put(`/sold/${id}`)
      .then((response) => {
        if (response.status === 200) {
          notifySuccess("Moto vendu ! 🚀");
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
    close();
    setRefreshData(!refreshData);
  };

  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      "&:hover": {
        bgcolor: green[700],
      },
    }),
  };

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
        handleSubmit();
        close();
        setRefreshData(!refreshData);
      }, 2000);
    }
  };

  return (
    <div className={styles.createbike_container}>
      <p>Vous allez modifier cette moto</p>
      <Modal
        open={confirmation}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={styles.delete_modal_container}>
            <DeleteBike
              text="Êtes-vous sûr de d'avoir vendu cette moto ?"
              close={setConfirmation}
              action={handleSold}
            />
          </div>
        </Box>
      </Modal>
      <div className={styles.input_container}>
        <div className={styles.btn_sold}>
          <Button
            onClick={handleOpenSold}
            sx={{ mx: 2 }}
            variant="contained"
            color="success"
            disabled={!newBikeData.stock}
          >
            marquer comme vendu
          </Button>
        </div>
        <FormControl sx={{ width: 220, my: 2 }}>
          <InputLabel id="demo-simple-select-label">Marque</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Marque"
            required
            name="brand_id"
            value={newBikeData.brand_id}
            onChange={handleChange}
            disabled={!newBikeData.stock}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>Yamaha</MenuItem>
            <MenuItem value={2}>Honda</MenuItem>
            <MenuItem value={3}>Suzuki</MenuItem>
            <MenuItem value={4}>Kawasaki</MenuItem>
            <MenuItem value={5}>Ducati</MenuItem>
            <MenuItem value={6}>BMW</MenuItem>
            <MenuItem value={7}>Triumph</MenuItem>
            <MenuItem value={8}>Harley Davidson</MenuItem>
            <MenuItem value={9}>Indian</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: 220, my: 2 }}>
          <InputLabel id="demo-simple-select-label">Catégorie</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Catégorie"
            required
            name="segment_id"
            value={newBikeData.segment_id}
            onChange={handleChange}
            disabled={!newBikeData.stock}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>Roadster</MenuItem>
            <MenuItem value={2}>Sportive</MenuItem>
            <MenuItem value={3}>Trail</MenuItem>
            <MenuItem value={4}>Custom</MenuItem>
            <MenuItem value={5}>Scrambler</MenuItem>
          </Select>
        </FormControl>
        <TextField
          sx={{ my: 2 }}
          id="outlined-basic"
          label="Modèle"
          required
          variant="outlined"
          name="model"
          value={newBikeData.model}
          onChange={handleChange}
          disabled={!newBikeData.stock}
        />
        <TextField
          sx={{ my: 2 }}
          id="outlined-basic"
          label="Année"
          required
          variant="outlined"
          name="year"
          value={newBikeData.year}
          onChange={handleChange}
          disabled={!newBikeData.stock}
        />
        <TextField
          sx={{ my: 2 }}
          id="outlined-basic"
          label="Kilométrage"
          required
          variant="outlined"
          name="kilometers"
          value={newBikeData.kilometers}
          onChange={handleChange}
          disabled={!newBikeData.stock}
        />
        <TextField
          sx={{ my: 2 }}
          id="outlined-basic"
          label="Photo"
          required
          variant="outlined"
          name="image_url"
          value={newBikeData.image_url}
          onChange={handleChange}
          disabled={!newBikeData.stock}
        />
        <TextField
          sx={{ my: 2 }}
          id="outlined-basic"
          label="Couleur"
          required
          variant="outlined"
          name="color"
          value={newBikeData.color}
          onChange={handleChange}
          disabled={!newBikeData.stock}
        />
        <TextField
          sx={{ my: 2 }}
          id="outlined-basic"
          label="Prix"
          variant="outlined"
          name="price"
          value={newBikeData.price}
          onChange={handleChange}
          disabled={!newBikeData.stock}
        />
        <FormControl sx={{ width: 220, my: 2 }}>
          <InputLabel id="demo-simple-select-label">Bridage</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Bridage"
            name="bridle"
            value={newBikeData.bridle}
            onChange={handleChange}
            disabled={!newBikeData.stock}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>Oui</MenuItem>
            <MenuItem value={0}>Non</MenuItem>
          </Select>
        </FormControl>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            my: 6,
          }}
        >
          <Button onClick={close} sx={{ mx: 2 }} variant="outlined">
            Annuler
          </Button>
          <Box sx={{ mx: 2, position: "relative" }}>
            <Button
              variant="contained"
              color="secondary"
              sx={buttonSx}
              disabled={loading}
              onClick={handleButtonClick}
            >
              Modifier
            </Button>
            {loading && (
              <CircularProgress
                size={24}
                sx={{
                  color: green[500],
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  marginTop: "-12px",
                  marginLeft: "-12px",
                }}
              />
            )}
          </Box>
        </Box>
      </div>
    </div>
  );
}

ModifyBike.propTypes = {
  close: PropTypes.func.isRequired,
  refreshData: PropTypes.bool.isRequired,
  setRefreshData: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
