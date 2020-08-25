const { Router } = require("express");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
//////////////////////

const router = Router();

router.use(express.json({ limit: "50mb" }));

router.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

router.use(cookieParser());

//////////////////////

module.exports = router;
