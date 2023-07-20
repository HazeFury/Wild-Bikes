import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUserContext } from "../../contexts/userContext";
import Login from "../../components/Login/Login";
import styles from "./Dashboard.module.css";
import AdminNavBar from "../../components/DashboardComponents/AdminNavBar/AdminNavBar";
import "../../App.css";

export default function Dashboard() {
  const { user } = useUserContext();
  return (
    <div>
      {user?.role === "admin" ? (
        <div>
          <AdminNavBar />
          <div className={styles.dashboard_container}>
            <Outlet />
          </div>
          <ToastContainer
            position="bottom-right"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}
