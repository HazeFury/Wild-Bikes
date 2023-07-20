import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button, Menu, MenuItem } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import BoyIcon from "@mui/icons-material/Boy";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import { useUserContext } from "../../../contexts/userContext";
import styles from "./AdminNavBar.module.css";
import "../../../App.css";

export default function AdminNavBar() {
  const { logout } = useUserContext();
  const [openMenu, setOpenMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const handleMenuClose = () => {
    setOpenMenu(false);
  };
  const handleCloseLogout = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    logout(false);
    setAnchorEl(null);
    navigate("/login");
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
    <div className={styles.global_div}>
      <div className={styles.menu_burger_btn}>
        <Button
          onClick={handleMenu}
          variant="contained"
          sx={{
            height: 65,
            width: 50,
            borderRadius: 50,
          }}
        >
          <MenuOutlinedIcon sx={{ color: "white", height: 40, width: 40 }} />
        </Button>
      </div>
      <div
        className={
          openMenu
            ? `${styles.open_adminNavnar_container}`
            : `${styles.closed_adminNavnar_container}`
        }
      >
        <div className={styles.close_btn}>
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
        <NavLink to="/dashboard">
          <div className={styles.wb_box}>
            <h1 className={styles.wb_title}>
              WILD <span>BIKES</span>
            </h1>
            <p>ADMIN</p>
          </div>
        </NavLink>
        <NavLink to="stock">
          <div className={styles.menu_link_box1}>
            <Button
              onClick={handleMenuClose}
              variant="contained"
              sx={{
                height: 50,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: 300,
              }}
            >
              <div className={styles.menu_link_text}>
                <p>Motos</p>
              </div>
              <TwoWheelerIcon
                sx={{ color: "white", height: 40, width: 40, marginLeft: 18.3 }}
              />
            </Button>
          </div>
        </NavLink>
        <NavLink to="/dashboard">
          <div className={styles.menu_link_box2}>
            <Button
              onClick={handleMenuClose}
              variant="contained"
              sx={{
                height: 50,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: 300,
              }}
            >
              <div className={styles.menu_link_text}>
                <p>Client</p>
              </div>
              <BoyIcon
                sx={{ color: "white", height: 40, width: 40, marginLeft: 18.2 }}
              />
            </Button>
          </div>
        </NavLink>
        <NavLink to="/dashboard">
          <div className={styles.menu_link_box3}>
            <Button
              onClick={handleMenuClose}
              variant="contained"
              sx={{
                height: 50,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: 300,
              }}
            >
              <div className={styles.menu_link_text}>
                <p>Performances</p>
              </div>
              <EqualizerIcon
                sx={{ color: "white", height: 40, width: 40, marginLeft: 4 }}
              />
            </Button>
          </div>
        </NavLink>
        <NavLink to="/dashboard">
          <div className={styles.menu_link_box4}>
            <Button
              onClick={handleMenuClose}
              variant="contained"
              sx={{
                height: 50,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: 300,
              }}
            >
              <div className={styles.menu_link_text}>
                <p>Blog</p>
              </div>
              <TextSnippetIcon
                sx={{ color: "white", height: 40, width: 40, marginLeft: 21 }}
              />
            </Button>
          </div>
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
            onClose={handleCloseLogout}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleLogout}>Se déconnecter</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
}
