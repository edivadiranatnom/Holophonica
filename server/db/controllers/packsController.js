const db = require("../models");
const Packs = db.packs;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {

    if (!req.body) {
        res.status(400).send({
            message: "Porcodio"
        });
        return;
    }

    console.log(req.files)

    const pack = {
        name: req.body.name,
        vol: req.body.vol,
        artist: req.body.artist,
        genre: req.body.genre,
        img: req.files.artwork[0].originalname,
        file: req.files.audio[0].originalname,
        description: req.body.description
    };

    console.log(pack)

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


exports.findOne = (req, res) => {

};


exports.update = (req, res) => {

};


exports.delete = (req, res) => {

};
