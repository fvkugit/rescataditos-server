const { vacunas } = require('../models/index')

exports.removeVacuna = (req, res) => {
    const {id} = req.params
    try{
        const deleted = vacunas.destroy({where: {id_vacuna: id}})
    }
    catch(e){
        return res.status(500).send({success: false, message: 'Error al borrar la vacuna.'})
    }
    return res.status(200).send({success: true, message: 'Se ha borrado la vacuna con exito.'})
}

exports.createVacuna = (req, res) => {
    const vacuna = req.body
    try{
        const nueva = vacunas.create({nombre: vacuna.vacuna, fecha: vacuna.fecha, id_mascota: vacuna.id_mascota})
    }
    catch(e){
        return res.status(500).send({success: false, message: 'Error al guardar la nueva vacuna.'})
    }
    return res.status(200).send({success: true, message: 'Se ha creado la nueva vacuna con exito.'})
}