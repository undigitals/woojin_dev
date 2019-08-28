const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const users = require("./routes/users");
const passport = require("passport");
const app = express();
const cors = require('cors')
//BodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB Connected!"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello World"));

///Passport middleware
app.use(passport.initialize());
//Passport Config
require("./config/passport")(passport);

// Use Routes
app.use("/api/users",cors(), users);
app.use(cors({credentials: true}));

const port = process.env.PORT || 7777;

app.listen(port, () => console.log(`Server running on port ${port}`));
