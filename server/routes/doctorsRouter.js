const express = require("express");
const doctorsController = require("../controllers/doctorsController.js");
const validateDto = require('../middleware/validator-dto')
const validatorShema = require('../shema/resolutionValidator')
const doctorsRouter = express.Router();

doctorsRouter.patch("/", doctorsController.nextPatient);
doctorsRouter.put("/addResolution", validateDto(validatorShema), doctorsController.addResolutionCurrentPatient);
doctorsRouter.put("/", doctorsController.getPatientWithResolution);
doctorsRouter.delete("/", doctorsController.deleteResolutionPatient);

module.exports = doctorsRouter;