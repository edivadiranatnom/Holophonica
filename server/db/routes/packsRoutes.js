module.exports = app => {
    const packs = require("../controllers/packsController.js");

    var router = require("express").Router();

    router.post("/", packs.create);

    app.use('/packs', router);
};