const db = require("../models");
const Packs = db.packs;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Tutorial
    const pack = {
        id: Math.floor(Math.random() * 10000),
        name: req.body.name,
        vol: req.body.vol,
        artist: req.body.artist,
        genre: req.body.genre,
        img: req.body.img,
        file: req.body.file,
        description: req.body.description
    };
    console.log(pack)
    // Save Tutorial in the database
    Packs.create(pack)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            console.log("Some error occurred while creating the Pack.")
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Pack."
            });
        });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    Packs.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {

};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {

};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {

};
