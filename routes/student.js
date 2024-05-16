const express = require("express");
const router = express.Router();
const studentController = require("../controllers/student");
const Activity = require("../models/activity");
const Club = require("../models/club");
const User = require("../models/user");
const isStudent = require("../middlewares/isStudent");
const isAuth = require("../middlewares/isAuth");

router.get("/student/homepage", isStudent, isAuth, studentController.getHomepage);
router.post("/student/homepage", isStudent, isAuth, studentController.postHomepage);
router.get("/student/clubs", isStudent, isAuth, studentController.getClubs);
router.post("/student/clubs", isStudent, isAuth, studentController.postClubs);
router.get("/student/club:id", isStudent, isAuth, studentController.getClubSingle);
router.get("/student/activities", isStudent, isAuth, studentController.getActivities);
router.post("/student/activities", isStudent, isAuth, studentController.postActivities);
router.get("/student/activity:id", isStudent, isAuth, studentController.getActivitySingle);

module.exports = router;








