const express = require("express");
const mongoose = require("mongoose");
const fileUpload = require('express-fileupload');
const path=require('path');
const User = require('./models/user');
const Club = require('./models/club');
const Activity = require('./models/activity');
const bodyParser = require("body-parser");
const adminController = require("./controllers/admin");
const managerController = require("./controllers/manager");
const studentController = require("./controllers/student");
const userController = require("./controllers/user");
const adminRoutes = require("./routes/admin");
const managerRoutes = require("./routes/manager");
const studentRoutes = require("./routes/student");
const userRoutes = require("./routes/user");
const dummyData = require("./dummy");
const isAdmin = require("./middlewares/isAdmin");
const isManager = require("./middlewares/isManager");
const isStudent = require("./middlewares/isStudent");
const isAuth = require("./middlewares/isAuth");
const cookieParser = require('cookie-parser')
const session = require("express-session")
const MongoDBStore = require('connect-mongodb-session')(session);
var image = path.join(__dirname,'../');
const store = new MongoDBStore({
    uri: 'mongodb+srv://projectuskudar123:ProUsk123@spm.p6hpvqm.mongodb.net/Project?retryWrites=true&w=majority',
    collection: 'sessions'
  });

const app = express();
const port = 3000 || process.env.port;

app.set("views", __dirname +  "/views");
app.use('/assets', express.static('assets'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded({extended: false}));

app.use(fileUpload());

mongoose.connect("mongodb+srv://projectuskudar123:ProUsk123@spm.p6hpvqm.mongodb.net/Project?retryWrites=true&w=majority").then(() => {
    console.log("Connected to the database!");
}).catch(() => {
    console.log("Connection failed!");
})

app.use(session({
    secret: 'hello',
    cookie: { 
        maxAge:1000*60*60*5
    },
    store:store,
    resave: false,
    saveUninitialized: true,
  }));

app.use(function(req,res,next){
    res.locals.user = req.session.user;
    res.locals.name = req.session.name;
    res.locals.auth = req.session.auth;
    res.locals.email = req.session.email;
    res.locals.password = req.session.password;
    res.locals.club = req.session.club;
    res.locals.notification = req.session.notification;
    next();
});

app.use(adminRoutes);
app.use(managerRoutes);
app.use(studentRoutes);
app.use(userRoutes);

dummyData();

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
