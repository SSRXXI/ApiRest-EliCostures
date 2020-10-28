const express = require("express");
const router = express.Router();

const dbpath = ("../database.js")
const mysqlConnection = require(dbpath);

const id = 23;

router.get('/', (req, res) => {

    mysqlConnection.query('SELECT * FROM comunas WHERE provincia_id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log("Mal")
            console.log(err);
        }
    });
});


module.exports = router;