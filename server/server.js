const express = require("express");
const bodyParser = require("body-parser");
var Mailchimp = require('mailchimp-api-v3')
var cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

var mailchimp = new Mailchimp('6c64f888b6a56a882eef8b34df7b44a5-us18');

app.use(cors({ origin: "http://localhost:8080" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./db/models");
// db.sequelize.sync();
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});

const transporter = nodemailer.createTransport({
    service: "mailgun",
    auth: {
        user: "postmaster@sandbox62a5930ee544419cb4514ccbfc122fdc.mailgun.org",
        pass: "986dea58ba41f1d9f6efa04c567c6324-0afbfc6c-5ce4abaa" // naturally, replace both with your real credentials or an application-specific password
    }
});

// MAILER
app.post("/inquire", function (req) {
    console.log(req.body.name, req.body.email, req.body.text);

    const mailOptions = {
        from: req.body.email,
        to: "holophonica.studios@gmail.com",
        subject: req.body.service + " Inquiry",
        html: "<h3>" + req.body.name + " is asking for a " + req.body.service + " service </h3>" + "<h5>" + req.body.text + "</h5>"
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: " + info.response);
        }
    });
});

//MAILCHIMP
app.post('/subscribe', function (req) {

    const { firstname, lastname, mail } = req.body;

    mailchimp.post('/lists/d6f83f0bc0/members', {
        email_address: mail,
        status: 'subscribed',
        merge_fields: {
            FNAME: firstname,
            LNAME: lastname
        }
    })
        .then(function (result) {
            console.log(result);
        })
        .catch(function (err) {
            console.log(err)
        })
});

require("./db/routes/packsRoutes")(app);

app.listen(3000, () => console.log("Server started..."));
