const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('users', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    login: {type: DataTypes.STRING, unique: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    last_name: {type: DataTypes.STRING},
    first_name: {type: DataTypes.STRING},
    middle_name: {type: DataTypes.STRING},
    bank_details: {type: DataTypes.STRING},
    available: {type: DataTypes.BOOLEAN, defaultValue: true},
    role: {type: DataTypes.STRING, defaultValue:"USER"}
})

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BasketInstrument = sequelize.define('basket_instrument', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Instrument = sequelize.define('instruments', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    img: {type: DataTypes.STRING, allowNull: false}
})

const InstrumentType = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true}
})

const InstrumentBrand = sequelize.define('brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true}
})

const InstrumentRating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, defaultValue: 0}
})

const InstrumentDescription = sequelize.define('description', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: { type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false}
})

const IntrumentTypeBrand = sequelize.define('type_brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(InstrumentRating)
InstrumentRating.belongsTo(User)

Basket.hasMany(BasketInstrument)
BasketInstrument.belongsTo(Basket)

InstrumentType.hasMany(Instrument)
Instrument.belongsTo(InstrumentType)

InstrumentBrand.hasMany(Instrument)
Instrument.belongsTo(InstrumentBrand)

Instrument.hasMany(BasketInstrument)
BasketInstrument.belongsTo(Instrument)

Instrument.hasMany(InstrumentDescription, {as: 'description'});
InstrumentDescription.belongsTo(Instrument)

InstrumentType.belongsToMany(InstrumentBrand, {through: IntrumentTypeBrand})
InstrumentBrand.belongsToMany(InstrumentType, {through: IntrumentTypeBrand})

module.exports = {
    User,
    Basket,
    Instrument,
    BasketInstrument,
    InstrumentType,
    InstrumentBrand,
    InstrumentRating,
    IntrumentTypeBrand,
    InstrumentDescription
}


