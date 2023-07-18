const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const userControllers = require("./controllers/userControllers");
const bikeControllers = require("./controllers/bikeControllers");
const {
  getUserByEmail,
  verifyPassword,
  hashPassword,
  verifyIfUserIsRegistered,
  verifyToken,
  logout,
} = require("./services/auth");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

// ------------------  LOGIN & REGISTER routes  -----------------------

router.post("/login", getUserByEmail, verifyPassword);

router.get("/logout", logout);

router.post(
  "/register",
  verifyIfUserIsRegistered,
  hashPassword,
  userControllers.add
);

// ------------------ / LOGIN & REGISTER routes  -----------------------

// ------------------  USER routes  -----------------------

router.post("/users", verifyToken, userControllers.getUserList);

// ------------------ / USER routes  -----------------------

// ------------------  BIKES routes  -----------------------

router.get("/bikes", verifyToken, bikeControllers.getAllBikesInStock);

// ------------------ / BIKES routes  -----------------------

module.exports = router;
