const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({

    host: 'b6ocjxpdt6tccrjggtgl-mysql.services.clever-cloud.com',
    database: 'b6ocjxpdt6tccrjggtgl',
    user: 'uhmbdwvjj4p7onav',
    password: 'ZTyRxt1MFC1i72gBir4H',
    port: '3306'
});

mysqlConnection.connect(function(err) {

    if (err) {
        console.log(err, 'No se conectó xD');
        return;
    } else {
        console.log('tamos al otro lado papa')
    }

});

module.exports = mysqlConnection;