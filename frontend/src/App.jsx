import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import Home from "./pages/Home/Home";
import Bikes from "./pages/Bikes/Bikes";
import Dashboard from "./pages/Dashboard/Dashboard";
import DashboardHome from "./components/DashboardComponents/DashboardHome/DashboardHome";
import Login from "./components/Login/Login";
import BikeStock from "./components/DashboardComponents/BikesStock/BikeStock";
import { UserContextProvider } from "./contexts/userContext";
import "./App.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(255,100,100)",
    },
    secondary: {
      main: "#367ef9",
    },
  },
});

function App() {
  return (
    <UserContextProvider>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Routes>
            {/* ------------- Home routes  ----------- */}
            <Route path="/" element={<Home />} />
            <Route path="/motos" element={<Bikes />} />

            {/* ------------- Login routes  ----------- */}

            <Route path="/login" element={<Login />} />

            {/* ------------- Dashboard routes  ----------- */}

            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<DashboardHome />} />
              <Route path="stock" element={<BikeStock />} />
            </Route>
          </Routes>
        </div>
      </ThemeProvider>
    </UserContextProvider>
  );
}

export default App;
