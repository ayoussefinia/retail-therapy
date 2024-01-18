const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());





// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
// Add routes, both API and view
app.use(routes);

mongoose.connect("mongodb+srv://ayoussefinia:"+process.env.pass+"%40cluster0.uescv.mongodb.net/%3FretryWrites=true&w=majority").then(() => {console.log('mongodb connected')})
.catch((err) => {console.log('error connecting to mongoDB: ', err)});


// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/store")
// .then(() => {console.log('mongodb connected')})
// .catch((err) => {console.log('error connecting to mongoDB: ', err)});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
