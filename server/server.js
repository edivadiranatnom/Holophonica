const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/", function (req, res) {
    console.log(req.body.name, req.body.email, req.body.text)
});

app.listen(3000, () => console.log('Server started...'))