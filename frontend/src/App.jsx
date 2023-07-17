import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Bikes from "./pages/Bikes/Bikes";
import Dashboard from "./pages/Dashboard/Dashboard";
import DashboardHome from "./components/DashboardComponents/DashboardHome/DashboardHome";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/motos" element={<Bikes />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<DashboardHome />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
