const {InstrumentType} = require('../models/models')
const ApiError = require('../error/apiError');

class TypeController {
    async create(req, res) {
        const {name} = req.body
        const type = await InstrumentType.create({name})
        return res.json(type)
    }

    async getAll(req, res) {
        const types = await InstrumentType.findAll()
        return res.json(types)
    }
}

module.exports = new TypeController()