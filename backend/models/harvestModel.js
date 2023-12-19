const mongoose = require("mongoose");

const harvestSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    address: {
        number: {
            type: String,
            required: true
        },
        streetName: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        district: {
            type: String,
            required: true
        },
        postalCode: {
            type: String,
            required: true
        }
        
    },
    quantity: {
        type: Number,
        required: true
    },
    cropName: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "pending"
    }

})

module.exports = mongoose.model("Harvest", harvestSchema);