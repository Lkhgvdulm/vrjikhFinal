const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
    name: { type: String },
    orders: { type: String },
    avatar: { type: String },
    createAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Address', AddressSchema);