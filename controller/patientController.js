const Patient = require("../models/patient.model");

const getAllPatients = async (req, res, next) => {
  try {
    const patient = await Patient.find({});
    return res.json({ message: "success", data: patient });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const getPateintById = async (req, res, next) => {
  console.log(req.params.id);
  const patient = await Patient.findOne({ _id: req.params.id });
  if (!patient) {
    next("No patient with id");
  }
  return res.json({ message: "success", patient: patient });
};

const createNewPatient = async (req, res, next) => {
  const { name, contactDetails, pinCode, address } = req.body;
  if (!name || !contactDetails || !pinCode || !address) {
    next("please supply all information");
  }
  let createdPatient;
  try {
    createdPatient = await Patient.create({
      name: name,
      contactDetails: contactDetails,
      address: address,
      pinCode: pinCode,
    });
    return res.json({ message: "success", patient: createdPatient });
  } catch (error) {
    next(error);
  }
};

const updatePatientInformation = async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    next("please supply id");
  }
  let patient;
  try {
    patient = await Patient.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
  } catch (err) {
    next(err);
  } finally {
    return res.json({ message: "success", data: patient });
  }
};

const deletePatientInformation = async (req, res, next) => {
  const { id } = req.params;
  if (!id) next("please supply id");
  try {
    await Patient.findOneAndDelete({ _id: id });
  } catch (err) {
    next(err);
  } finally {
    return res.json({ message: "success", data: "patient infomation deleted" });
  }
};

module.exports = {
  getAllPatients,
  createNewPatient,
  updatePatientInformation,
  deletePatientInformation,
  getPateintById,
};
