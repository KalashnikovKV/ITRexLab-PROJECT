const express = require("express");
const doctorController = require("../controllers/doctorController.js");
const doctorRouter = express.Router();
 
doctorRouter.use("/", doctorController.getPageDoctor);
 
module.exports = doctorRouter;