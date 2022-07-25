const express = require('express');
const router = express.Router();
const { validateEditToken } = require('../middleware/validations')
const { createVacuna, removeVacuna } = require('../controllers/vacunasController')


router.delete('/:id', validateEditToken, removeVacuna)
router.post('/', validateEditToken, createVacuna)


module.exports = router;
