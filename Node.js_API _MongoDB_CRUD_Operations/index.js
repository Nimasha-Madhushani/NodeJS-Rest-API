const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//middleware
app.use(bodyParser.json());

app.listen(3000, () => console.log("Server is started on 3000"));
