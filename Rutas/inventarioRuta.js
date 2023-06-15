const express=require("express");
const { validarJWT } = require('../middleware/validarJWT');
const { validarRolAdmin } = require('../middleware/validar-rol-admin');
const { validarRolDocente } = require('../middleware/validar-rol-docente');
const {obtenerEstadoEquipo,agregarInventarioEquipo,actulizarInventarioEquipo,eliminarInventarioEquipo}= require("../controles/controlInventario")

const rutaInventario=express.Router();


rutaInventario.get("/", [ validarJWT, validarRolDocente ],obtenerEstadoEquipo);
rutaInventario.post("/", [ validarJWT, validarRolAdmin ],agregarInventarioEquipo);
rutaInventario.put("/:id", [ validarJWT, validarRolAdmin ],actulizarInventarioEquipo);
rutaInventario.delete("/:id",[ validarJWT, validarRolAdmin ],eliminarInventarioEquipo);


module.exports=rutaInventario;
