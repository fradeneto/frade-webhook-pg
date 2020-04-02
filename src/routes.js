const routes = require('express').Router();

const RequestsController = require('./app/controllers/RequestsController');

routes.use('/', RequestsController.index);

module.exports = routes;
