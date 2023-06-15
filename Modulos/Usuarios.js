const mongo=require("mongoose");

const tipoSchema=mongo.Schema(
{
    nombre:{
        type: String,
        required: true,
    },

    email:{
        type: String,
        required: true,
    },

    contraseña:{
        type: String,
        required: true,

    },
    rol:{
        type: String,
        requerid: true,
        enum: ['ADMIN', 'DOCENTE']
    },

    fechaCrea:{
        type: Date,
        default: Date.now()
       },


 fechaAct:{
        type: Date,
        default: Date.now()
       },


});

module.exports = mongo.model("moduloUsuario",tipoSchema);