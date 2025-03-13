const routes = require('express').Router();
const temples = require('../controllers/temple.js');

// Find all temples
routes.get('/', temples.findAll);

// Find Single Temple
routes.get('/:temple_id', temples.findOne);

// Create a Temple entry
routes.post('/', temples.create);

// Update a Temple with id
routes.put('/:id', temples.update);

// Delete a Temple with id
routes.delete('/:id', temples.delete);

// Delete all temples
routes.delete('/', temples.deleteAll);


module.exports = routes;
