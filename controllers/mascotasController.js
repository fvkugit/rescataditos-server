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
    console.log(listvacunas)
    const id = newMascota.null 
    const newVacunas = await vacunas.bulkCreate(
      listvacunas.map((v) => ({nombre: v.desc, fecha: Date.parse(v.fecha), id_mascota: id}))
    )
    const newImagenes = await imagenes.create({imagen: imagen, id_mascota: id})
  }
  catch(e){
    console.log(e)
  }

}