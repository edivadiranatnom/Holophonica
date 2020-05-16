const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors({ origin: "http://localhost:8080" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./db/models");
db.sequelize.sync();

// require("./db/routes/newsletterRoutes")(app);

const transporter = nodemailer.createTransport({
    service: "mailgun",
    auth: {
        user: "postmaster@sandbox62a5930ee544419cb4514ccbfc122fdc.mailgun.org",
        pass: "986dea58ba41f1d9f6efa04c567c6324-0afbfc6c-5ce4abaa" // naturally, replace both with your real credentials or an application-specific password
    }
});

// MAILER
app.post("/mail", function (req, res) {
    console.log(req.body.name, req.body.email, req.body.text);

    const mailOptions = {
        from: "holophonica.studios@gmail.com",
        to: req.body.email,
        subject: "Stica",
        text: "Ciao " + req.body.name + " " + req.body.text
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: " + info.response);
        }
    });
});

require("./db/routes/packsRoutes")(app);

app.listen(3000, () => console.log("Server started..."));
