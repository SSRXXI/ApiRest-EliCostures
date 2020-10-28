const express = require('express');
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);


//Middlewares
app.use(express.json());

app.use(function(req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://192.168.1.83');
    //res.setHeader('Access-Control-Allow-Origin', 'http://192.168.1.83/send-order');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
//Routes
const comu = require('./routes/comunas');
const pedidos = require('./routes/pedidos');

app.use(comu);
app.use(pedidos);

//Starting the server

puerto = app.get('port');
app.listen(puerto, () => {

    console.log('Puerto', puerto, 'configurado correctamente');

})