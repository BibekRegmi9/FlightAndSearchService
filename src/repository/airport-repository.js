const { Op } = require('sequelize');

const { Airport } = require('../models/index');


class AirportRepository{

    async createAirport({ name, address }) {
        try {
            const airport = await Airport.create({
                name,
                address
            });
            return airport;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw {error};
        }
    }

    async deleteAirport(airportId) {
        try {
            await Airport.destroy({
                where: {
                    id: airportId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw {error};
        }
    }

    async updateAirport(airportId, data){
        try {
            const airport = await Airport.findByPk(airportId);
            airport.name = data.name;
            await airport.save();
            return airport;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw {error};
        }
    }

    async getAirport(airportId) {
        try {
            const airport = await Airport.findByPk(airportId);
            return airport;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw {error};
        }
    }

    async getAllAirport(filter){
        try {
            if(filter.name){
                const airport = await Airport.findAll({
                    where: {
                        name:{
                            [Op.startsWith]: filter.name
                        }
                    }
                })
                return airport;
            };

            const airport = await Airport.findAll();
            return airport;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw {error};
        }
    }
}



module.exports = AirportRepository;