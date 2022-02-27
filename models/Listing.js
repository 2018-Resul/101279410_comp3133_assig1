const mongoose = require('mongoose');


const ListingSchema = new mongoose.Schema({

    username: {
        type: String,
        required: [true, 'Please enter your unique username'],
        trim: true,
        lowercase: true
    },

    email: {
        type: String,
        required: [true, 'Please enter a valid email'],
        trim: true,
        uppercase: true,
        validate: function (value) {
            var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return emailRegex.test(value);
        }
    },

    
    type: {
        type: String,
        default: 'admin',

    },
    

    listing_id: {
        type: String,
        required: [true, 'Please enter an ID'],
        trim: true,
        lowercase: true
    },

    listing_title: {
        type: String,
        required: [true, 'Please enter a title'],
        trim: true,
        lowercase: true
    },

    description: {
        type: String,
        required: [true, 'Please enter a description'],
        trim: true,
        maxLength: 500
    },


    street: {
        type: String,
        required: [true, 'Please enter street name'],
        required: true,
        trim: true,
        lowercase: true
    },

    city: {
        type: String,
        required: [true, 'Please enter city name'],
        required: true,
        trim: true,
        lowercase: true
    },

    postal_code: {
        type: String,
        required: [true, 'Please enter postal code'],
        required: true,
        trim: true,
        lowercase: true
    },

    price: {
        type: Number,
        default: 50.0,
        required: [true, 'Please enter price'],
        validate(value) {
            if (value < 0.0) {
                throw new Error("Price should be positive ");
            }
        }
    },

});

const Listing = mongoose.model("Listing", ListingSchema);
module.exports = Listing;