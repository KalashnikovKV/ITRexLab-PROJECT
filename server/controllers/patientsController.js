const Queue = require("../models/Queue.js")

exports.addPatient = function (req, res){
    const patientName = req.body.name
    const patient = new Queue(patientName)
    patient.add()
    // console.log(patient)
    res.status(201).json()
};

exports.showAllPatients = function(req, res){
    const queue = Queue.showALL()
    console.log(queue)
    res.status(201).json(queue)
};

exports.getPatient = function(req, res){
    const queue = Queue.get()
    console.log(queue)
    res.status(201).json(queue)
};