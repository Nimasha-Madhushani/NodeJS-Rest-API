const express = require("express");
const bodyParser = require("body-parser");
const dbConnection = require("./db.js");
const employeeRoutes=require('./controllers/employee.controller')
const app = express();

//middleware
app.use(bodyParser.json());

app.use('./api/employee',employeeRoutes)

dbConnection()
  .then(() => {
    console.log("DB is connected!!")
    app.listen(3000, () => console.log("Server is started on 3000"));
  })
  .catch((err) => console.log(err));
