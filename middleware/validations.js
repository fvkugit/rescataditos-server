exports.validateEditToken = ( req, res, next ) => {
    const { APP_EDIT_CODE } = process.env
    const { editCode } = req.body
    if (APP_EDIT_CODE !== editCode){
        return res.status(401).send({success: false, message: 'Codigo de edición incorrecto. Acceso no permitido.'})
    }
    next()
}