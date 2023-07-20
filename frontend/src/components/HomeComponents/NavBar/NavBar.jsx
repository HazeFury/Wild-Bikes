import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import SideBar from "./SideBar";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogin = () => {
    navigate("/login");
    setAnchorEl(null);
  };

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  useEffect(() => {
    const handleResize = () => {
      setOpenMenu(false);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        className={
          openMenu ? `${styles.sidebar_open}` : `${styles.sidebar_close}`
        }
      >
        <SideBar closeModal={setOpenMenu} />
      </div>
      <div className={styles.navbar_container}>
        <div className={styles.menu_burger}>
          <Button onClick={handleMenu} sx={{ height: 50, borderRadius: 40 }}>
            {openMenu ? (
              <CloseOutlinedIcon
                sx={{ color: "white", height: 40, width: 40 }}
              />
            ) : (
              <MenuOutlinedIcon
                sx={{ color: "white", height: 40, width: 40 }}
              />
            )}
          </Button>
        </div>
        <NavLink to="/motos" className={styles.navlink_class}>
          Nos motos
        </NavLink>
        <NavLink to="/" className={styles.navlink_class}>
          Nos marques
        </NavLink>
        <NavLink to="/" className={styles.navlink_title}>
          <div className={styles.wb_title_nav}>
            <h1 className={styles.wb_title}>
              WILD <span>BIKES</span>
            </h1>
          </div>
        </NavLink>
        <NavLink to="/" className={styles.navlink_class}>
          À propos
        </NavLink>
        <NavLink to="/" className={styles.navlink_class}>
          Blog
        </NavLink>
        <div className={styles.user_logo}>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{ height: 50, borderRadius: 40 }}
          >
            <AccountCircleOutlinedIcon
              sx={{ color: "white", height: 40, width: 40 }}
            />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleLogin}>Se connecter</MenuItem>
          </Menu>
        </div>
      </div>
    </>
  );
}
