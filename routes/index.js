'use strict'
const express = require('express')
const notaCtrl = require('../controles/nota')
const userCtrl = require('../controles/user')
const auth = require('../middlewares/auth')
const api = express.Router()


api.get('/nota', auth, notaCtrl.getNotas)
api.get('/nota/:notaId', auth, notaCtrl.getNota)
api.post('/nota', auth, notaCtrl.saveNota)
api.put('/nota/:notaId', auth, notaCtrl.updateNota)
api.delete('/nota/:notaId', auth, notaCtrl.deleteNota)
api.post('/signup', userCtrl.signUp)
api.post('/signin', userCtrl.signIn)
api.get('/private', auth, function (req, res) {
    res.status(200).send({message: 'Tienes acesso'})
})


module.exports = api