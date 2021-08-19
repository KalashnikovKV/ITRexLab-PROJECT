const express = require("express");
const patientsController = require("../controllers/patientsController.js");
const patientsRouter = express.Router();

patientsRouter.post("/add", patientsController.addPatient);

module.exports = patientsRouter;