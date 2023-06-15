const express=require("express");
const { validarJWT } = require('../middleware/validarJWT');
const { validarRolAdmin } = require('../middleware/validar-rol-admin');
const {ObtenerEstadoEquipo,agregarEstadoEquipo,actualizarEstadoEquipo,eliminarEstadoEquipo}= require("../controles/controlEstadoEquipo")

const rutaEstado=express.Router();


rutaEstado.get("/",[ validarJWT, validarRolAdmin ], ObtenerEstadoEquipo);
rutaEstado.post("/",[ validarJWT, validarRolAdmin ], agregarEstadoEquipo);
rutaEstado.put("/:id",[ validarJWT, validarRolAdmin ],actualizarEstadoEquipo);
rutaEstado.delete("/:id",[ validarJWT, validarRolAdmin ],eliminarEstadoEquipo);


module.exports=rutaEstado;
