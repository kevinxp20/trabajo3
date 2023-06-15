const jwt = require('jsonwebtoken');

const generarJWT = (usuarios) => {
    const payload = { _id: usuarios._id, nombre: usuarios.nombre, email: usuarios.email, rol: usuarios.rol, contraseña: usuarios.contraseña };
    const token = jwt.sign(payload, '12345', { expiresIn: '2h' });
    return token;
}

module.exports = {
    generarJWT
}