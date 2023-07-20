import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Pagination,
  Stack,
  Modal,
  Box,
  CircularProgress,
  Backdrop,
} from "@mui/material";
import CardBike from "./CardBike";
import CreateBike from "./InsideModal/CreateBike";
import styles from "./BikeStock.module.css";
import { useUserContext } from "../../../contexts/userContext";
import "../../../App.css";
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

export default function BikeStock() {
  const { logout } = useUserContext();
  const [backdropState, setBackdropState] = useState(false);
  const [stockData, setStockData] = useState([]);
  const [refreshData, setRefreshData] = useState(false);
  const [age, setAge] = useState("");
  // ------ MODAL FOR CREATE BIKE  -----------
  const [openCreate, setOpenCreate] = useState(false);
  const handleOpenCreate = () => setOpenCreate(true);
  const handleCloseCreate = () => setOpenCreate(false);
  // ---------------------------------

  // ------ FILTER FUNCTION  -----------
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  // ---------------------------------

  // ------ PAGINATION  -----------
  const [numberOfResults, setNumberOfResults] = useState(0);
  const limitPerPage = 10;
  const defaultPage = 1;
  const [maxPage, setMaxPage] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(
    parseInt(searchParams.get("page"), 10) || defaultPage
  );
  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };
  // ---------------------------------

  useEffect(() => {
    setBackdropState(true);
    setSearchParams((params) => {
      searchParams.set("page", currentPage);
      if (currentPage === 1) {
        return undefined;
      }
      return params;
    });
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
    instance
      .get(`/bikes?page=${currentPage}`)
      .then((res) => {
        setStockData(res.data.datas);
        setNumberOfResults(res.data.total);
        setMaxPage(Math.ceil(res.data.total / limitPerPage));
        setBackdropState(false);
        scrollToTop();
      })
      .catch((err) => {
        if (err.response?.status === 403) {
          logout(true);
        }
        console.error(err);
      });
  }, [currentPage, refreshData]);

  return (
    <div className={styles.bikes_stock_container}>
      <h1>Mes {numberOfResults} motos</h1>
      <div className={styles.filter_container}>
        <div className={styles.filter_box}>
          <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
            <InputLabel id="demo-select-small-label">Année</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>Toutes</em>
              </MenuItem>
              <MenuItem value={10}>Croissant</MenuItem>
              <MenuItem value={20}>Décroissant</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 140 }} size="small">
            <InputLabel id="demo-select-small-label">Kilométrage</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>Tous</em>
              </MenuItem>
              <MenuItem value={10}>Croissant</MenuItem>
              <MenuItem value={20}>Décroissant</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
            <InputLabel id="demo-select-small-label">Prix</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>Tous</em>
              </MenuItem>
              <MenuItem value={10}>Croissant</MenuItem>
              <MenuItem value={20}>Décroissant</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Situation</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>Tous</em>
              </MenuItem>
              <MenuItem value={10}>Croissant</MenuItem>
              <MenuItem value={20}>Décroissant</MenuItem>
            </Select>
          </FormControl>
        </div>
        <Button
          onClick={handleOpenCreate}
          variant="contained"
          color="success"
          sx={{ mx: 2 }}
        >
          Ajouter une moto
        </Button>
        <Modal
          open={openCreate}
          onClose={handleCloseCreate}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className={styles.modal_container}>
              <CreateBike
                close={handleCloseCreate}
                refreshData={refreshData}
                setRefreshData={setRefreshData}
              />
            </div>
          </Box>
        </Modal>
      </div>

      {stockData.map((bike) => (
        <CardBike
          key={bike.id}
          data={bike}
          refreshData={refreshData}
          setRefreshData={setRefreshData}
        />
      ))}
      <div className={styles.pagination_container}>
        <Stack spacing={1} sx={{ my: 4 }}>
          <Pagination
            page={currentPage}
            onChange={handleChangePage}
            count={maxPage}
            color="primary"
          />
        </Stack>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={backdropState}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    </div>
  );
}
