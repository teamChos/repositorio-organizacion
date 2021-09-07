const express = require('express');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/home';

        //Middlewares.
        this.middlewares();

        //Rutas de mi aplicacion.
        this.routes();
    };

    middlewares() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/home.routes'));
    };

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port);
        });
    };

};

module.exports = Server;