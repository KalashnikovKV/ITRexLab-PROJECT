const express = require("express");
const doctorsController = require("../controllers/doctorsController.js");
const doctorsRouter = express.Router();
 
doctorsRouter.use("/nextPatient", doctorsController.nextPatient);
doctorsRouter.use("/addCurrentPatient", doctorsController.addResolutionCurrentPatient);
doctorsRouter.use("/getPatientWithResolution", doctorsController.getPatientWithResolution);
 
module.exports = doctorsRouter;