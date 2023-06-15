const express=require("express");
const { validarJWT } = require('../middleware/validarJWT');
const { validarRolAdmin } = require('../middleware/validar-rol-admin');
const {ObtenerDatosTipo,agregarTipo,actualizarDatosTipo,eliminarDatosTipo}= require("../controles/controlTipoEquipo")

const rutaTipoEquipo=express.Router();


rutaTipoEquipo.get("/", [ validarJWT, validarRolAdmin ],ObtenerDatosTipo);
rutaTipoEquipo.post("/", [ validarJWT, validarRolAdmin ],agregarTipo);
rutaTipoEquipo.put("/:id", [ validarJWT, validarRolAdmin ],actualizarDatosTipo);
rutaTipoEquipo.delete("/:id",[ validarJWT, validarRolAdmin ],eliminarDatosTipo);


module.exports=rutaTipoEquipo;

