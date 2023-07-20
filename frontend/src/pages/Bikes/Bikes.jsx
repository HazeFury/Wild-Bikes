import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Pagination, Stack, CircularProgress, Backdrop } from "@mui/material";
import NavBar from "../../components/HomeComponents/NavBar/NavBar";
import BikeCard from "../../components/BikesComponents/BikeCard";
import styles from "./Bikes.module.css";
import "../../App.css";
import instance from "../../services/APIService";

export default function Bikes() {
  const [backdropState, setBackdropState] = useState(false);
  const [bikeList, setBikeList] = useState([]);
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
      .get(`/bikeslist?page=${currentPage}`)
      .then((res) => {
        setBikeList(res.data.datas);
        setNumberOfResults(res.data.total);
        setMaxPage(Math.ceil(res.data.total / limitPerPage));
        setBackdropState(false);
        scrollToTop();
      })
      .catch((err) => console.error(err));
  }, [currentPage]);
  return (
    <div className={styles.bikes_container}>
      <NavBar />
      <p className={styles.result_number}>{numberOfResults} résultat</p>
      <div className={styles.previewlistbikes_container}>
        {bikeList.map((bike) => (
          <BikeCard key={bike.id} bike={bike} />
        ))}
      </div>
      <div className={styles.pagination}>
        <Stack spacing={1} sx={{ my: 4 }}>
          <Pagination
            page={currentPage}
            onChange={handleChangePage}
            count={maxPage}
            color="primary"
          />
        </Stack>
      </div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backdropState}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
