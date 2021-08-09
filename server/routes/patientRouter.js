const express = require("express");
const patientController = require("../controllers/patientController.js");
const patientRouter = express.Router();
 
patientRouter.use("/postpatient", patientController.postPatient);
patientRouter.use("/createPatient", patientController.addPatient);
patientRouter.use("/", patientController.getPatients);
 
module.exports = patientRouter;