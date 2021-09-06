const Queue = require("../models/Queue.js")
const Resolution = require("../models/Resolution.js")

exports.nextPatient = async function (req, res) {
    const queue = new Queue()
    res.status(201).json(await queue.get())
};

exports.addResolutionCurrentPatient = function (req, res) {
    const patientName = req.body.name
    const patientResolution = req.body.resolution
    const patientTTL = req.body.ttl
    const patientsWithResolution = new Resolution()
    patientsWithResolution.add(patientName, patientResolution, patientTTL)
    console.log(patientsWithResolution)
    res.status(201).json()
};

exports.getPatientWithResolution = async function (req, res) {
    const patientName = req.body.name
    const patientsWithResolution = new Resolution()
    res.status(201).json(await patientsWithResolution.getPatientWithResolution(patientName))
};

exports.deleteResolutionPatient = async function (req, res) {
    const patientName = req.body.name
    const patientsWithResolution = new Resolution()
    // console.log(patientsWithResolution)
    res.status(201).json(await patientsWithResolution.deleteResolutionPatient(patientName))
};