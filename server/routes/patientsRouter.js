const express = require("express");
const patientsController = require("../controllers/patientsController.js");
const patientsRouter = express.Router();
 
patientsRouter.use("/add", patientsController.addPatient);
// patientsRouter.use("/get", patientsController.getPatient);
patientsRouter.use("/showAllPatients", patientsController.showAllPatients);
 
module.exports = patientsRouter;