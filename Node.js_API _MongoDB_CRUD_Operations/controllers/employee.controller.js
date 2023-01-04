const express = require("express");
const router = express.Router();

const Employee = require("../models/employees.model");
router.get("/", (req, res) => {
  Employee.find()
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
});

router.post("/", (req, res) => {
  //req.body
  Employee.create(req.body)
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
});
module.exports = router;
