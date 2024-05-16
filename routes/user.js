const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const Activity = require("../models/activity");
const Club = require("../models/club");
const User = require("../models/user");

router.get("/", userController.getLogin);
router.post("/", userController.postLogin);
router.get("/register", userController.getRegister);
router.post("/register", userController.postRegister);
router.get("/logout", userController.getLogout);
router.get("/restricted", userController.getRestricted);

module.exports = router;








