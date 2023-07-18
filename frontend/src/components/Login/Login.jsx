import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { TextField, Button, Alert, createTheme } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import styles from "./Login.module.css";
import "../../App.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(255,100,100)",
    },
  },
});

export default function Login() {
  const [loginInfo, setLoginInfo] = useState({});
  const [infoMessage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/dashboard");
    // if (validateLogin) {
    //   // TODO gérer l'authentification de manière plus approfondie lorsqu'on aura eu tous les cours sur le sujet
    //   instance
    //     .post(`/${userType}/login`, loginInfo)
    //     .then((response) => {
    //       login(response.data);
    //       if (response.data.role === "parent") {
    //         if (pendingReservation) {
    //           setPendingReservation(null);
    //           navigate(`/particulier/recherche/${pendingReservation}/date`);
    //         } else {
    //           navigate(`/particulier/${response.data.id}`);
    //         }
    //       } else {
    //         navigate("/pro");
    //       }
    //     })
    //     .catch((error) => {
    //       if (error.response?.status === 401)
    //         setInfoMessage("Les informations renseignées sont incorrectes.");
    //       else setInfoMessage("Merci d'essayer plus tard.");
    //     });
    // } else {
    //   setInfoMessage("Merci de compléter tous les champs.");
    // }
  };
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.login_page}>
        <div className={styles.back_btn}>
          <Button
            variant="contained"
            onClick={() => navigate("/")}
            sx={{
              height: 60,
              width: 60,
              borderRadius: 50,
              backgroundColor: "rgb(255,100,100)",
            }}
          >
            <ArrowBackIcon sx={{ color: "black", height: 40, width: 40 }} />
          </Button>
        </div>
        <div className={styles.login_box}>
          <div>
            {infoMessage ? <Alert severity="error">{infoMessage}</Alert> : null}
          </div>
          <TextField
            required
            color="primary"
            name="email"
            id="email"
            label="Entrez votre adresse mail"
            onChange={handleChange}
            sx={{ my: 4, backgroundColor: "white", width: 300 }}
          />
          <TextField
            required
            color="primary"
            name="password"
            id="password"
            label="Entrez votre mot de passe"
            onChange={handleChange}
            sx={{ my: 4, backgroundColor: "white", width: 300 }}
            type="password"
          />
          <Button
            type="submit"
            variant="contained"
            onClick={handleSubmit}
            sx={{ mt: 3, mb: 2, backgroundColor: "rgb(255, 100, 100)" }}
          >
            Se connecter
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
}
