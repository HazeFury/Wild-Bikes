import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Bikes from "./pages/Bikes/Bikes";
import Dashboard from "./pages/Dashboard/Dashboard";
import DashboardHome from "./components/DashboardComponents/DashboardHome/DashboardHome";
import Login from "./components/Login/Login";
import BikeStock from "./components/DashboardComponents/BikesStock/BikeStock";
import "./App.css";

function App() {
  return (
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
  );
}

export default App;
