'use strict'

const Nota = require('../tareas/nota')

function getNota(req, res) {
    let notaId = req.params.notaId

    Nota.findById(notaId, (err, nota) => {
        if (err) return res.status(500).send({ message: `Error al realizar la petición: ${err}` })
        if (!nota) return res.status(404).send({ message: `Tarea no existe` })

        res.status(200).send({ nota })
    })
}

function saveNota(req, res) {
    console.log('Post /api/nota');
    console.log(req.body);

    let nota = new Nota()
    nota.description = req.body.description
    nota.priority = req.body.priority
    nota.estado = req.body.estado
    
    nota.save((err, notaStored) => {
        if (err) res.status(500).send({ message: `Error al guardar los datos: ${err}` })
        res.status(200).send({ nota: notaStored })
    })
}

function getNotas(req, res) {
    Nota.find({}, (err, notas) => {
        if (err) return res.status(500).send({ message: `Error al realizar la petición: ${err}` })
        if (!notas) return res.status(404).send({ message: `Tarea no existe` })

        res.send(200, { notas })
    })
}

function updateNota(req, res) {


    let nota = Nota()
    nota.description = req.body.description
    nota.priority = req.body.priority
    nota.estado = req.body.estado
    
    nota.save((err, notaUpdate) => {
        if (err) res.status(500).send({ message: `Error al guardar los datos: ${err}` })
        res.status(200).send({ nota: notaUpdate })
    })

    

}
function deleteNota(req, res) {
    let notaId = req.params.notaId
    Nota.findById(notaId, (err, nota) => {
        if (err) res.status(500).send(`Error al borrar tarea: ${err.message}`)

        nota.remove(err => {
            if (err) res.status(500).send(`Error al borrar tarea: ${err.message}`);
            res.status(200).send({ message: 'Tarea ha sido eliminada' })
        })
    })
}

module.exports = {
    getNota,
    saveNota,
    getNotas,
    updateNota,
    deleteNota
}