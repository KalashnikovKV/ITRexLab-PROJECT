const express = require('express')
const app = express()
const cors = require('cors')

const patientsRouter = require("./routes/patientsRouter.js");
const doctorsRouter = require("./routes/doctorsRouter.js");

const host = '127.0.0.1'
const port = 7000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/patients", patientsRouter);;
app.use("/doctors", doctorsRouter);

app.use(function (req, res, next) {
  res.status(404).send("Not Found")
});

app.listen(port, host, () =>
  console.log(`Server listens http://${host}:${port}`)
)