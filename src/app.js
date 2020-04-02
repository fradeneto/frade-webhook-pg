const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const routes = require('./routes.js');

class AppController {
  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();

    this.express.use(this.logErros);
  }

  middlewares() {
    this.express.use(helmet());
    this.express.use(express.json());
    this.express.use(
      cors({
        origin: '*',
      })
    );
  }

  routes() {
    this.express.use(routes);
  }

  logErros(err, req, res, next) {
    res.status(500).send({ message: 'Alguma coisa falhou!', err });
    // next(err);
  }
}

module.exports = new AppController().express;
