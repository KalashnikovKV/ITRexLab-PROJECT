const Queue = require("../models/Queue.js");
 
exports.addPatient = function (request, response){
    response.render("createPatient.hbs");
};

exports.getPatients = function(request, response){
    response.render("queuePatients.hbs", {
        queue: Queue.getAllQueue()
    });
};

exports.postPatient= function(request, response){
    const patientName = request.body.name;
    const patient = new Queue(patientName);
    patient.savePatient();
    response.redirect("/queuePatients/createPatient");
};