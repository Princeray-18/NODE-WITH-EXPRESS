const mongoose = require('mongoose');
const BikeSchema = new mongoose.Schema({
    bikeName: {
        type: String,
        required: true,     
    },
    price: {
        type: Number,
        required: true,     
    },
    model: {
        type: String,
        required: true,     
    },
});
const Bike = mongoose.model('Bike', BikeSchema);
module.exports = Bike;