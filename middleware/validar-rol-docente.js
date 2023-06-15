const jwt = require('jsonwebtoken');

const validarRolDocente = (req, res, next) => {
    if (req.payload.rol !== 'DOCENTE' && req.payload.rol !== 'ADMIN') {
        return res.status(401).json({ mensaje: 'Error, no esta autorizado' });
    }
    next();

} 

module.exports = {
    validarRolDocente
}