const { Router } = require('express');
const { validationResult, check } = require('express-validator');
const Usuario = require('../Modulos/Usuarios');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');

const router = Router();

router.post('/', [
    check('email', 'email.requerido').isEmail(),
    check('contraseña', 'contraseña.requerida').not().isEmpty()
], async function(req, res) {
    try {

        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({ mensaje: errors.array() });
        } 
        
    const usuario = await Usuario.findOne({ email: req.body.email });
    if (!usuario) {
        return res.status(400).json({ mensaje: 'User no found' });
    } 

    const esIgual = bcrypt.compareSync(req.body.contraseña, usuario.contraseña);
    if (!esIgual) {
        return res.status(400).json({ mensaje: 'User no found' });
    }

    const token = generarJWT(usuario);
    
    res.json({ _id: usuario._id, nombre: usuario.nombre,
        email: usuario.email, rol: usuario.rol, contraseña: usuario.contraseña, access_token: token });

    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: 'Internal server error'});
    }   
})

module.exports = router;