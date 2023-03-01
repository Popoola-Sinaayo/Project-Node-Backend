const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const patientRoute = require("./routes/mainRoute");
const errorHandler = require("./utils/customErrorHandler");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", patientRoute);
app.use(errorHandler);

mongoose
  .connect(process.env.MONGO_DB_URI, () => {
    console.log("Db Connected");
  })
  .catch((err) => console.log(err));
app.listen(process.env.PORT, () => {
  console.log("server started");
});
