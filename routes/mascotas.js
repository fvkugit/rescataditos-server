const express = require('express');
const router = express.Router();
const { getMascotas, getMascotasById, createMascota, updateMascota, deleteMascota } = require('../controllers/mascotasController');
const { validateEditToken } = require('../middleware/validations');

router.get('/', getMascotas)
router.get('/:id', getMascotasById)
router.post('/', validateEditToken, createMascota)
router.put('/:id', validateEditToken, updateMascota)
router.delete('/:id', validateEditToken, deleteMascota)

module.exports = router;
