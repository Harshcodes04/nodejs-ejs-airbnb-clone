const express = require("express");
const path = require("path");
const userRouter = express.Router();
const homesControllers = require("../controllers/homes");
userRouter.get("/", homesControllers.getHomes);
module.exports = userRouter;
