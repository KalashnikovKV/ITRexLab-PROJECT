const express = require("express");
const doctorsController = require("../controllers/doctorsController.js");
const doctorsRouter = express.Router();

doctorsRouter.patch("/nextPatient", doctorsController.nextPatient);
doctorsRouter.put("/addCurrentPatient", doctorsController.addResolutionCurrentPatient);
doctorsRouter.put("/getPatientWithResolution", doctorsController.getPatientWithResolution);
doctorsRouter.delete("/deleteResolutionPatient", doctorsController.deleteResolutionPatient);

module.exports = doctorsRouter;