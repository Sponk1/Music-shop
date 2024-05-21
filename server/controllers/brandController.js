const {InstrumentBrand} = require('../models/models')
const ApiError = require('../error/apiError')

class BrandController {
    async create(req, res) {
        const {name} = req.body
        const brand = await InstrumentBrand.create({name})
        return res.json(brand)

    }

    async getAll(req, res) {
        const brands = await InstrumentBrand.findAll()
        return res.json(brands)
    }
}

module.exports = new BrandController()