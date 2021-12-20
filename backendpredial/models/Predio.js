const { Schema, model } = require("mongoose");
const mongoose = require('mongoose');
/* const Users = mongoose.model('Usuario'); */


const predioSchema = new Schema({
    codigo_predio: {
        type: String,
        required: true
    },

    nombre_predio: {
        type: String,
        required: true
    },

    cedula_propietario: {
        type: Number,
        ref: "Users"
    },

    area_total_predio: {
        type: String,
        required: true
    },

    area_construida: {
        type: String,
        required: true
    },

    direccion: {
        type: String,
        required: true
    },

    barrio: {
        type: String,
        required: true
    },

    codigo_predio: {
        type: String,
        required: true
    }


    /* nombre: { 
                type: String, 
                max: [50, 'La longitud del campo supera lo permitido (50)'],
                required: [true, 'El nombre es obligatorio.']
            },
    fecha: { 
            type: Date, 
            required: [true, "Le fecha es obligatoria."]
           },
    descripcion: { 
                    type: String, 
                    max: [250, 'La longitud del campo supera lo permitido (250)']
                },
    director: {
                type: String,
                required: [true, 'El nombre del director es obligatorio.']
            },
    completado: {
        type: Boolean,
        required: [true, 'El estado del proyecto es obligatorio.']
    } */
},
    {
        collection: 'Predios'
    });

exports.Predio = model('Predio', predioSchema);