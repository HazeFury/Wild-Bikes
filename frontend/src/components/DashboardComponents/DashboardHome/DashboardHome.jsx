import { NavLink } from "react-router-dom";
import styles from "./DashboardHome.module.css";

export default function DashboardHome() {
  return (
    <div className={styles.dashboardhome_container}>
      {/* <h4>Bienvenue sur votre espace professionel</h4> */}
      <div className={styles.menu_item_container}>
        <NavLink to="stock">
          <div className={styles.menu_box_div}>
            <div className={styles.menu_bikes} />
            <div className={styles.text_menu_box}>
              <p>Mes motos</p>
            </div>
          </div>
        </NavLink>
        <NavLink to="/dashboard">
          <div className={styles.menu_box_div}>
            <div className={styles.menu_customers} />
            <div className={styles.text_menu_box}>
              <p>Mes clients</p>
            </div>
          </div>
        </NavLink>
        <NavLink to="/dashboard">
          <div className={styles.menu_box_div}>
            <div className={styles.menu_performances} />
            <div className={styles.text_menu_box}>
              <p>Performance</p>
            </div>
          </div>
        </NavLink>
        <NavLink to="/dashboard">
          <div className={styles.menu_box_div}>
            <div className={styles.menu_blog} />
            <div className={styles.text_menu_box}>
              <p>Blog</p>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
