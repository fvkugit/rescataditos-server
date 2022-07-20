const express = require('express');
const router = express.Router();
const { getMascotas, getMascotasById, createMascota } = require('../controllers/mascotasController')

router.get('/', getMascotas)
router.get('/:id', getMascotasById)
router.post('/', createMascota)

module.exports = router;
