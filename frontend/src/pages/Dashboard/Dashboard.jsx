import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import styles from "./Dashboard.module.css";
import AdminNavBar from "../../components/DashboardComponents/AdminNavBar/AdminNavBar";
import "../../App.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(255,100,100)",
    },
  },
});

export default function Dashboard() {
  return (
    <ThemeProvider theme={theme}>
      <AdminNavBar />
      <div className={styles.dashboard_container}>
        <Outlet />
      </div>
    </ThemeProvider>
  );
}
