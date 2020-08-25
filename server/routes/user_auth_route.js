const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const { userInfoFormatHandler } = require("../middleware/data_format_checker");
//////////////////////

const router = express.Router();
mongoose.connect("mongodb://localhost/stack_over_flow", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userInfo = require("../model/users_model");

////////////////////////////////////////////////////////////////// MANAGING ROUTES FOR USER-AUTH

router.post("/sing-up", (req, res) => {
  const { userName, password, email } = req.body;
  // console.log(" userName, password, email", userName, password, email);

  //DATA FORMAT CHECKING
  const { error } = userInfoFormatHandler(req.body);
  if (error) {
    return res.send({ error: error.details[0].message });
  }

  const newUser = new userInfo({
    user_name: userName,
    password: password,
    email: email,
  });
  // FIRST CHECKING FOR DUPLICATE USER, IF NO CASE FOUND, THEN CREATE NEW USER
  userInfo.findOne(
    { user_name: new RegExp("^" + userName + "$", "i") },
    (err, result) => {
      if (err) {
        console.log(err);
        return res.send(err);
      }
      if (result) {
        return res.send({ error: "Duplicate username" });
      } else {
        newUser.save((err, result) => {
          return res.send({ message: "New user created Successfully." });
        });
      }
    }
  );
});

router.post("/sign-in", (req, res) => {
  const { userName, password } = req.body;

  userInfo.findOne({ user_name: userName }, (err, result) => {
    if (err) {
      return res.send(err);
    }
    if (result) {
      if (result.password === password) {
        return res.send({ message: "User signed-in." });
      } else {
        return res.send({ error: "Invalid username or password." });
      }
    } else {
      return res.send({ error: "Invalid username or password." });
    }
  });
});

//////////////////////////////////////////////////////////////////
module.exports = router;
