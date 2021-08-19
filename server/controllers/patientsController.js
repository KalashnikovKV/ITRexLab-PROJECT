const Queue = require("../models/Queue.js")

exports.addPatient = function (req, res) {
    const patientName = req.body.name
    const patient = new Queue()
    patient.add(patientName)
    // console.log(patient)
    res.status(201).json()
};

