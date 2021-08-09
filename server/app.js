const express = require("express");
const app = express();
const patientRouter = require("./routes/patientRouter.js");
const doctorRouter = require("./routes/doctorRouter.js");
 
const PORT = 3000;

app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
 
app.use("/queuePatients", patientRouter);
app.use("/doctor", doctorRouter);
 
app.use(function (req, res, next) {
    res.status(404).send("Not Found");
});
 
app.listen(PORT, () => {
    console.log(`server starting on port ${PORT}...`);
});