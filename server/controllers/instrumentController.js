const uuid = require('uuid')
const path = require('path')
const {Instrument} = require('../models/models')
const ApiError = require('../error/apiError')

class InstrumentController {
    async create(req, res, next) {
        try {
            const {name, price, brandId, typeId, description} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const instrument = await Instrument.create({name, price, brandId, typeId, img: fileName})
    
            return res.json(instrument)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {

    }

    async getOne(req, res) {

    }
}

module.exports = new InstrumentController()