const { uploadFile } = require("../utils/uploadFileS3")
const { imagenes } = require('../models/index')

exports.uploadImage = async (req, res, next) => {
    const { image, name } = req.body
    try{
        uploadData = await uploadFile(image, name)
        res.send(uploadData.Location)
    }
    catch(e){
        res.status(500).send({success: false, message: 'No se ha podido subir la imagen.'})
    }
}

exports.deleteImage = async(req, res) => {
    const { id } = req.params
    try{
        const deletedImage = imagenes.destroy({where: {id_imagen: id}})
        if (!deletedImage){ return res.status(500).send({success:false, message: 'Error al intentar eliminar la imagen.'}) }
    }
    catch(e){
        return res.status(500).send({success:false, message: 'Error al intentar eliminar la imagen.'})
    }
    return res.status(200).send({success:true, message: 'La imagen se ha eliminado con exito.'})
}

exports.newImage = async(req, res) => {
    const { image, id_mascota } = req.body
    if (image === '' || !image){ return res.status(500).send({success:false, message: 'Error al intentar cargar la imagen.'}) }
    try{
        const newImage = imagenes.create({
            id_mascota: id_mascota, 
            imagen: image,
        })
    }
    catch(e){
        return res.status(500).send({success:false, message: 'Error al intentar cargar la imagen.'})
    }
    return res.status(200).send({success:true, message: 'La imagen se ha cargado con exito.'})
}