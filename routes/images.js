var express = require("express");
var router = express.Router();
const { uploadImage, deleteImage, newImage } = require("../controllers/imagesController");
const { validateEditToken } = require('../middleware/validations');

router.post("/", express.json({limit: "2mb"}), uploadImage);

router.use(express.json())
router.use(express.urlencoded({extended: false}))

router.delete("/:id", validateEditToken, deleteImage)
router.post("/cargar", validateEditToken, newImage)

module.exports = router;