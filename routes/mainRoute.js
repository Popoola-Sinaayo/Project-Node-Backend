const express = require("express");
const patientController = require("../controller/patientController");
const route = express.Router();

route.get("/all-patients", patientController.getAllPatients);
route.get("/patient/:id", patientController.getPateintById)
route.post("/create", patientController.createNewPatient);
route.put("/update/:id", patientController.updatePatientInformation);
route.post("/delete/:id", patientController.deletePatientInformation)

module.exports = route;
