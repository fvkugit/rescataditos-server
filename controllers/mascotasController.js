const { mascotas, imagenes, vacunas } = require('../models/index')

exports.getMascotas = async (req,res) => {
    
    try{
      const list = await mascotas.findAll({
        attributes: ["id_mascota", "nombre", "raza", "color"],
        include: {
          model: imagenes,
          as: "imagenes",
          attributes: ["imagen"],
        },
      });
      if (!list) return res.status(500).send({success: false, message: 'No se han podido encontrar mascotas.'})
      return res.status(200).send({success: true, result: list})
    }
    catch(e){
      return res.status(500).send({success: true, message: 'Error al buscar las mascotas.', error: e || 'Error'})
    }
    
}

exports.getMascotasById = async (req,res) => {

    const {id} = req.params
    const list = await mascotas.findOne({
      where: {id_mascota: id},
      attributes: ["id_mascota", "nombre", "raza", "color", "tamanio", "descripcion"],
      include: [{
        model: imagenes,
        as: "imagenes",
        attributes: ["id_imagen", "imagen"],
      },
      {
        model: vacunas,
        as: "vacunas",
        attributes: ["id_vacuna", "nombre", "fecha"],
      }
    ],
      
    });

    res.send(list)
}

exports.createMascota = async(req,res) => {

  const {nombre, raza, color, tamanio, descripcion, imagen, listvacunas} = req.body
  try{
    const newMascota = await mascotas.create({
      nombre: nombre, 
      raza: raza,
      color: color,
      tamanio: tamanio,
      descripcion: descripcion
    })
    const id = newMascota.null 
    const newVacunas = await vacunas.bulkCreate(
      listvacunas.map((v) => ({nombre: v.desc, fecha: Date.parse(v.fecha), id_mascota: id}))
    )
    const newImagenes = await imagenes.create({imagen: imagen, id_mascota: id})
  }
  catch(e){
    return res.status(500).send({success:false, message: 'Error al guardar en la base de datos.'})
  }
  return res.status(200).send({success:true, message: 'La información ha sido guardada con exito.'})
  
}

exports.updateMascota = async( req, res ) => {
  const { id } = req.params
  const {nombre, raza, color, tamanio, descripcion} = req.body
  try{
    const updateMascota = await mascotas.update({
      nombre: nombre,
      raza: raza,
      color: color,
      tamanio: tamanio,
      descripcion: descripcion
    },
    {
      where: {id_mascota: id}
    }
    )
  }
  catch(e){
    console.log(e)
    return res.status(500).send({success:false, message: 'Error al guardar en la base de datos.'})
  }
  return res.status(200).send({success:true, message: 'La información ha sido guardada con exito.'})
  
}

exports.deleteMascota = async( req, res ) => {
  const { id } = req.params 
  try{
    const deletedMascota = await mascotas.destroy({
      where: {id_mascota: id}
    })
    if (!deletedMascota){ return res.status(500).send({success:false, message: 'Error al intentar eliminar la mascota.'}) }
  }
  catch(e){
      return res.status(500).send({success:false, message: 'Error al intentar eliminar la mascota.'})
  }
  return res.status(200).send({success:true, message: 'La mascota se ha eliminado con exito.'})
}