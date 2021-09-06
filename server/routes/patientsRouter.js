const express = require("express");
const patientsController = require("../controllers/patientsController.js");
const validateDto = require('../middleware/validator-dto')
const validatorShema = require('../shema/patientsValidator')
const patientsRouter = express.Router();

patientsRouter.post("/", validateDto(validatorShema), patientsController.addPatient);
patientsRouter.get("/", patientsController.showFirstPatient);

module.exports = patientsRouter;