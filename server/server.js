const express = require("express");
var path = require("path");
const bodyParser = require("body-parser");
var Mailchimp = require('mailchimp-api-v3')
var cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

app.use(express.static(path.join(__dirname, "./dist")));

var mailchimp = new Mailchimp('6c64f888b6a56a882eef8b34df7b44a5-us18');

app.use(cors({ origin: "http://localhost:8080" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
    // service: "mailgun",
    // auth: {
    //     user: "postmaster@sandbox62a5930ee544419cb4514ccbfc122fdc.mailgun.org",
    //     pass: "986dea58ba41f1d9f6efa04c567c6324-0afbfc6c-5ce4abaa" // naturally, replace both with your real credentials or an application-specific password
    // }
    host: "smtp.holophonica.com",
    port: 587,
    auth: {
        user: "inquiry@holophonica.com",
        pass: "Chicco93"
    }
});

app.post("/inquire", function (req, res) {
    const mailOptions = {
        from: req.body.email,
        to: "holophonica.studios@gmail.com",
        subject: req.body.service + " Inquiry",
        html: "<h3>" + req.body.name + " is asking for a " + req.body.service + " service </h3>" + "<h5>" + req.body.text + "</h5>"
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.send(error)
        } else {
            console.log("Email sent: " + info.response);
            res.send(info.response)
        }
    });
});

app.post('/subscribe', function (req, res) {

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
            res.send(result);
        })
        .catch(function (err) {
            res.send(err)
        })

});

app.get("*", function (request, response) {
    response.sendFile(path.resolve(__dirname, "./dist/index.html"));
});

var port = process.env.PORT || 3000;

app.listen(port, () => console.log('Server started...'))    