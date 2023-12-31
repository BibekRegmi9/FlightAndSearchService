const express = require('express');

const { FlightMiddlewares } = require('../../middlewares/index');

const CityController = require('../../controllers/city-controller');
const AirportController = require('../../controllers/airport-controller');
const FlightController = require('../../controllers/flight-controller');

const router = express.Router();

// City Routes
router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.get);
router.patch('/city/:id', CityController.update);
router.get('/city', CityController.getAll);


// Airport Routes
router.post('/airports', AirportController.create);


// Flight Routes
router.post('/flights', FlightMiddlewares.validateCreateFlight, FlightController.create);
router.get('/flights', FlightController.getAll);

module.exports = router;
