const express = require("express");
const router = express.Router();
const managerController = require("../controllers/manager");
const Activity = require("../models/activity");
const Club = require("../models/club");
const User = require("../models/user");
const Notification = require("../models/notification");
const isManager = require("../middlewares/isManager");
const isAuth = require("../middlewares/isAuth");

router.get("/manager/dashboard", isManager, isAuth, managerController.getDashboard);
router.get("/manager/clubs", isManager, isAuth, managerController.getClubs);
router.post("/manager/clubs", isManager, isAuth, managerController.postClubs);
router.get("/manager/club:id", isManager, isAuth, managerController.getClubSingle);
router.get("/manager/activities", isManager, isAuth, managerController.getActivities);
router.post("/manager/activities", isManager, isAuth, managerController.postActivities);
router.get("/manager/activity:id", isManager, isAuth, managerController.getActivitySingle);
router.post("/manager/activity:id", isManager, isAuth, managerController.postActivitySingle);
router.get("/manager/myclub", isManager, isAuth, managerController.getMyClub);
router.post("/manager/myclub", isManager, isAuth, managerController.postMyClub);
router.get("/manager/myactivities", isManager, isAuth, managerController.getMyActivities);
router.post("/manager/myactivities", isManager, isAuth, managerController.postMyActivities);
router.get("/manager/myactivity:id", isManager, isAuth, managerController.getMyActivitySingle);
router.post("/manager/myactivity:id", isManager, isAuth, managerController.postMyActivitySingle);
router.get("/manager/notifications", isManager, isAuth, managerController.getNotifications);

module.exports = router;








