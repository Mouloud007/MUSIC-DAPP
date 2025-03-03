const express = require("express");
const {
  registerController,
  loginController,
  logoutController,
  refetchUserController,
} = require("../controllers/authController");
const router = express.Router();
const bookmarkRoutes = require('./bookmarkRoutes'); // Import bookmark routes

// REGISTER
router.post("/register", registerController);

// LOGIN
router.post("/login", loginController);

// LOGOUT
router.get("/logout", logoutController);

// FETCH CURRENT USER
router.get("/refetch", refetchUserController);

router.use('/bookmarks', bookmarkRoutes); // Add bookmark routes

module.exports = router;
