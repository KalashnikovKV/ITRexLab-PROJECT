const Queue = require("../models/Queue.js")
const Resolution = require("../models/Resolution.js")

exports.nextPatient = function (req, res) {
    const queue = Queue.get()
    console.log(queue)
    res.status(201).json(queue)
};

exports.addResolutionCurrentPatient = function (req, res) {
    const patientName = req.body.name
    const patientResolution = req.body.resolution
    const patientTTL = req.body.ttl
    const patientsWithResolution = new Resolution(patientName, patientResolution, patientTTL)
    patientsWithResolution.add()
    console.log(patientsWithResolution)
    res.status(201).json()
};

exports.getPatientWithResolution = function (req, res) {
    const patientName = req.body.name
    const patientsWithResolution = Resolution.getPatientWithResolution(patientName)
    console.log(patientsWithResolution)
    res.status(201).json(patientsWithResolution)
};