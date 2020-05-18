const multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let ext = file.originalname.split('.')[1];
        if (ext == "mp3" || ext == "wav") {
            cb(null, './data/audio')
        } else {
            cb(null, './data/artworks')
        }
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

var upload = multer({ storage: storage })

module.exports = app => {
    const packs = require("../controllers/packsController.js");

    var router = require("express").Router();

    router.post("/", upload.fields([{ name: 'artwork', maxCount: 1 }, { name: 'audio', maxCount: 1 }]), packs.create);

    router.get("/", packs.findAll);

    app.use('/packs', router);
};