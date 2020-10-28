const express = require("express");
const router = express.Router();

const dbpath = ("../database.js")
const mysqlConnection = require(dbpath);

const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({ extended: false }))

router.post('/pedidos', (req, res) => {

    const nombre = req.body.nombre
    const telefono = req.body.telefono
    const correo = req.body.correo
    const comuna = req.body.comunaselect
    const comentario = req.body.comentario
    const ajuste_entalle = req.body.ajuste_entalle
    const basta = req.body.basta
    const reduccion = req.body.reduccion
    const cambio_cierre = req.body.cambio_cierre
    const entubado_pantalon = req.body.entubado_pantalon

    //res.end();

    mysqlConnection.query("INSERT INTO pedidos (nombre, telefono, correo_electronico, comuna, ajuste_o_entalle, basta_vestido_falda_pantalon, reduccion_de_prenda, cambio_cierre, entubado_pantalon, comentario) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [nombre, telefono, correo, comuna, ajuste_entalle, basta, reduccion, cambio_cierre, entubado_pantalon, comentario], (err, rows, fields) => {

        let data = {};
        if (!err) {
            data = {
                "result": 'Ok'
            }
            res.json(rows);

        } else {

            data = {
                "result": 'No Ok',
                "code": 0,
                "errors": [{
                    "userMessage": "No se pudo actualizar",
                    "internalMessage": "ocurrio un error al procesar en base de datos",
                }],
                "body": req.body
            }
            console.log(data)
            res.status(500).json(data)
            res.end()
        }
    });
});

router.post('/pedidos-detalle', (req, res) => {

    console.log("Vas bien")
    const idpedido = req.body.numero_orden;
    const orden = req.body.correo
        //res.end();

    mysqlConnection.query("SELECT * FROM pedidos WHERE idpedido = ?", [idpedido], (err, rows, fields) => {

        let data = {};
        if (!err) {
            data = {
                "result": 'Ok'
            }
            res.json(rows);

        } else {

            data = {
                "result": 'No Ok',
                "code": 0,
                "errors": [{
                    "userMessage": "No se pudo actualizar",
                    "internalMessage": "ocurrio un error al procesar en base de datos",
                }],
                "body": req.body
            }
            res.status(500).json(data)
            res.end()
        }
    });
});

module.exports = router;