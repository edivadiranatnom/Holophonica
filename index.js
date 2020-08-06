const express = require("express");
var path = require("path");
const bodyParser = require("body-parser");
var Mailchimp = require("mailchimp-api-v3");
var cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
// app.use(cors({ origin: "https://holophonica.herokuapp.com" }));
app.use(cors());

var mailchimp = new Mailchimp(process.env.MAILCHIMP_API);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
  service: "mailgun",
  auth: {
    user: process.env.MAILGUN_USER,
    pass: process.env.MAILGUN_PASS
  }
});

app.post("/inquire", function (req, res) {
  const mailOptions = {
    from: req.body.email,
    to: "holophonica.studios@gmail.com",
    subject: req.body.service + " Inquiry",
    html:
      "<h3>" +
      req.body.name +
      " is asking for a " +
      req.body.service +
      " service </h3>" +
      "<h5>" +
      req.body.text +
      "</h5>"
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.send(error);
    } else {
      console.log("Email sent: " + info.response);
      res.send(info.response);
    }
  });
});

app.post("/subscribe", function (req, res) {
  const { firstname, lastname, mail } = req.body;

  mailchimp
    .post(process.env.MAILCHIMP_PATH, {
      email_address: mail,
      status: "subscribed",
      merge_fields: {
        FNAME: firstname,
        LNAME: lastname
      }
    })
    .then(function (result) {
      res.send(result);
    })
    .catch(function (err) {
      res.send(err);
    });
});

app.use(express.static(path.join(__dirname, "./dist")));

app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./dist/index.html"));
});

var PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));
