'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NotaSchema = Schema({
    description: String,
    priority: {type: String, enum: ['alta','media', 'baja']},
    estado: {type: String, enum: ['pendiente','completada'], default: 'pendiente'},
},
    

    { 
        timestamps:true
})


module.exports= mongoose.model('Nota', NotaSchema)