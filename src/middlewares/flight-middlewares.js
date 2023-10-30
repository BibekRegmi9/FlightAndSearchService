const { ClientErrorCodes } = require('../utils/error-codes');

const validateCreateFlight = (req, res, next) => {

    // to check if body params field is missing
    if(
        !req.body.flightNumber || 
        !req.body.airplaneId || 
        !req.body.departureAirportId || 
        !req.body.arrivalAirportId || 
        !req.body.arrivalTime || 
        !req.body.departureTime || 
        !req.body.price
        ) {
            return res.status(ClientErrorCodes.BAD_REQUEST).json({
                data: {},
                success: false,
                message: 'Invalid request body to create flight',
                err: 'Mandatory fields missing'
            });
    }

    next();
}


module.exports = {
    validateCreateFlight
}