const express = require("express");
const bodyParser = require("body-parser");
var Mailchimp = require('mailchimp-api-v3')
var cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

var mailchimp = new Mailchimp(process.env.MAILCHIMP_API);

app.use(cors({ origin: process.env.ORIGIN }));
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
        user: process.env.MAILGUN_USER,
        pass: process.env.MAILGUN_PASS
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
app.post('/subscribe', function (req, res) {

    const { firstname, lastname, mail } = req.body;
    // console.log(firstname, lastname, mail)
    // res.sendStatus(200);
    //UNCOMMENT IN PRODUCTION
    mailchimp.post(process.env.MAILCHIMP_PATH, {
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
