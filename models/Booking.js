const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({

    listing_id: {
        type: String,
        required: [true, 'Enter a listing ID'],
      
    },

    booking_id: {
        type: String,
        required: [true, 'Enter a booking ID'],
     
    },


    booking_date: {
        type: Date,
        required: [true, 'Enter a booking date']
            },

    booking_start: {
        type: Date,
        required: [true, 'Enter the start date']
      
    },

    booking_end: {
        type: Date,
        required: [true, 'Enter the end date']

      
    },


    username: {
        type: String,
        required: [true, 'Enter your unique username'],

    }

});

const Booking = mongoose.model("Booking", BookingSchema);
module.exports = Booking;