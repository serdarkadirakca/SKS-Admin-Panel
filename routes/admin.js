const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin");
const Activity = require("../models/activity");
const Club = require("../models/club");
const User = require("../models/user");
const isAdmin = require("../middlewares/isAdmin");
const isAuth = require("../middlewares/isAuth");

router.get("/admin/dashboard", isAdmin, isAuth, adminController.getDashboard);
router.get("/admin/clubs", isAdmin, isAuth, adminController.getClubs);
router.post("/admin/clubs", isAdmin, isAuth, adminController.postClubs);
router.get("/admin/club:id", isAdmin, isAuth, adminController.getClubSingle);
router.post("/admin/club:id", isAdmin, isAuth, adminController.postClubSingle);
router.get("/admin/activities", isAdmin, isAuth, adminController.getActivities);
router.post("/admin/activities", isAdmin, isAuth, adminController.postActivities);
router.get("/admin/activity:id", isAdmin, isAuth, adminController.getActivitySingle);
router.post("/admin/activity:id", isAdmin, isAuth, adminController.postActivitySingle);
router.get("/admin/notifications", isAdmin, isAuth, adminController.getNotifications);
router.post("/admin/notifications", isAdmin, isAuth, adminController.postNotifications);

module.exports = router;








