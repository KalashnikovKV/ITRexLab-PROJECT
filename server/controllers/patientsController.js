const Queue = require("../models/Queue.js")

exports.addPatient = function (req, res) {
    const patientName = req.body.name
    const patient = new Queue()
    patient.add(patientName)
    // console.log(patient)
    res.status(201).json()
};

exports.showFirstPatient = async function (req, res) {
    const patient = new Queue()
    res.status(201).json(await patient.showFirstPatient())
};