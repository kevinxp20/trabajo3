const express=require("express");
const { validarJWT } = require('../middleware/validarJWT');
const { validarRolAdmin } = require('../middleware/validar-rol-admin');
const {ObtenerMarcas,agregarMarcas,actualizarMarcas,eliminarDatosTipo}= require("../controles/controlMarcas")

const rutamarca=express.Router();


rutamarca.get("/", [ validarJWT, validarRolAdmin ],ObtenerMarcas);
rutamarca.post("/", [ validarJWT, validarRolAdmin ],agregarMarcas);
rutamarca.put("/:id", [ validarJWT, validarRolAdmin ], actualizarMarcas);
rutamarca.delete("/:id",[ validarJWT, validarRolAdmin ],eliminarDatosTipo);


module.exports=rutamarca;