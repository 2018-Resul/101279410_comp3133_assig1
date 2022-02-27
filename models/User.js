const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    username: {
        type: String,
        required: [true, 'Please enter a unique username'],
        unique: [true, "Sorry! Username has already taken. Try another one"],
        trim: true,
        lowercase: true,

    },
    firstname: {
        type: String,
        required: [true, 'Please enter your First Name'],
        trim: true,
        lowercase: true,
    },
    lastname: {
        type: String,
        required: [true, 'Please enter your Last Name'],
        trim: true,
        lowercase: true,
    },

    password: {
        type: String,
        required: [true, 'Please enter your password'],
        minlength: 6,
        lowercase: true,
        uppercase: true,
        number: true,
        nonalpha: true

    },

    email: {
        type: String,
        required: [true, 'Please enter your email'],
        unique: [true, "Sorry, email  already exist in database"],
        trim: true,
        uppercase: true,
        validate: function (value) {
            var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return emailRegex.test(value);
        }
    },

    type: {
        type: String,
        default: 'customer',
    }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;


