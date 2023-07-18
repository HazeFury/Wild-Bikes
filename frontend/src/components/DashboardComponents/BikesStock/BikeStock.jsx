import { useState } from "react";
import {
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import CardBike from "./CardBike";
import styles from "./BikeStock.module.css";
import "../../../App.css";

export default function BikeStock() {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [stockData] = useState([
    {
      id: 1,
      model: "Bandit 650",
      year: 2008,
      kilometers: 34000,
      bridle: false,
      photo:
        "https://img.classistatic.de/api/v1/mo-prod/images/78/787be64c-f20f-45ff-962e-088662dc6ba0?rule=mo-1024.jpg",
      brand_id: "Suzuki",
      segment_id: "Roadster",
    },
    {
      id: 2,
      model: "Bandit 650",
      year: 2008,
      kilometers: 34000,
      bridle: false,
      photo:
        "https://img.classistatic.de/api/v1/mo-prod/images/78/787be64c-f20f-45ff-962e-088662dc6ba0?rule=mo-1024.jpg",
      brand_id: "Suzuki",
      segment_id: "Roadster",
    },
    {
      id: 3,
      model: "Bandit 650",
      year: 2008,
      kilometers: 34000,
      bridle: false,
      photo:
        "https://img.classistatic.de/api/v1/mo-prod/images/78/787be64c-f20f-45ff-962e-088662dc6ba0?rule=mo-1024.jpg",
      brand_id: "Suzuki",
      segment_id: "Roadster",
    },
    {
      id: 4,
      model: "Bandit 650",
      year: 2008,
      kilometers: 34000,
      bridle: false,
      photo:
        "https://img.classistatic.de/api/v1/mo-prod/images/78/787be64c-f20f-45ff-962e-088662dc6ba0?rule=mo-1024.jpg",
      brand_id: "Suzuki",
      segment_id: "Roadster",
    },
    {
      id: 5,
      model: "Bandit 650",
      year: 2008,
      kilometers: 34000,
      bridle: false,
      photo:
        "https://img.classistatic.de/api/v1/mo-prod/images/78/787be64c-f20f-45ff-962e-088662dc6ba0?rule=mo-1024.jpg",
      brand_id: "Suzuki",
      segment_id: "Roadster",
    },
    {
      id: 6,
      model: "Bandit 650",
      year: 2008,
      kilometers: 34000,
      bridle: false,
      photo:
        "https://img.classistatic.de/api/v1/mo-prod/images/78/787be64c-f20f-45ff-962e-088662dc6ba0?rule=mo-1024.jpg",
      brand_id: "Suzuki",
      segment_id: "Roadster",
    },
    {
      id: 7,
      model: "Bandit 650",
      year: 2008,
      kilometers: 34000,
      bridle: false,
      photo:
        "https://img.classistatic.de/api/v1/mo-prod/images/78/787be64c-f20f-45ff-962e-088662dc6ba0?rule=mo-1024.jpg",
      brand_id: "Suzuki",
      segment_id: "Roadster",
    },
    {
      id: 8,
      model: "Bandit 650",
      year: 2008,
      kilometers: 34000,
      bridle: false,
      photo:
        "https://img.classistatic.de/api/v1/mo-prod/images/78/787be64c-f20f-45ff-962e-088662dc6ba0?rule=mo-1024.jpg",
      brand_id: "Suzuki",
      segment_id: "Roadster",
    },
    {
      id: 9,
      model: "Bandit 650",
      year: 2008,
      kilometers: 34000,
      bridle: false,
      photo:
        "https://img.classistatic.de/api/v1/mo-prod/images/78/787be64c-f20f-45ff-962e-088662dc6ba0?rule=mo-1024.jpg",
      brand_id: "Suzuki",
      segment_id: "Roadster",
    },
    {
      id: 10,
      model: "Bandit 650",
      year: 2008,
      kilometers: 34000,
      bridle: false,
      photo:
        "https://img.classistatic.de/api/v1/mo-prod/images/78/787be64c-f20f-45ff-962e-088662dc6ba0?rule=mo-1024.jpg",
      brand_id: "Suzuki",
      segment_id: "Roadster",
    },
  ]);

  return (
    <div className={styles.bikes_stock_container}>
      <h1>Mes motos</h1>
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
        <Button variant="contained" color="success">
          Ajouter une moto
        </Button>
      </div>
      {stockData.map((bike) => (
        <CardBike key={bike.id} data={bike} />
      ))}
    </div>
  );
}
