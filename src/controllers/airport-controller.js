const { AirportService } = require('../services/index');

const airportService = new AirportService();


// POST method
// data -> req.body

const create = async(req, res) => {
    try {
        const airport = await airportService.createAirport(req.body);
        return res.status(201).josn({
            data: airport,
            success: true,
            message: 'Successfully created a airport',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a airport',
            err: error
        });
    }
}


// DELETE Method
// data -> /city/:id
const destroy = async(req, res) => {
    try {
        const response = await airportService.deleteAirport(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully deleted a airport',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to delete a airport',
            err: error
        });
    }
}


// GET Method
// GET -> /city/:id
const get = async(req, res) => {
    try {
        const response = await airportService.getAirport(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully fetched the airport',
            err: {}
    })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch the airport',
            err: error
        });
    }
}


// PATCH Method
// patch -> /city/:id
const update = async(req, res) => {
    try {
        const response = await airportService.updateAirport(req.params.id, req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully updated a airport',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to update the airport',
            err: error
        });
    }
}


const getAll = async(req, res) => {
    try {
        const airport = await airportService.getAllAirport(req.query);
        return res.status(200).json({
            data: airport,
            success: true,
            message: 'Successfullt fetched all airports',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to get all airport',
            err: error
        });
    }
}


module.exports = {
    create,
    destroy,
    get,
    update,
    getAll
}

