const mongoose = require('mongoose');


const AuthentificationScheme = new mongoose.Schema({
    Email:{
        type: String,
        unique: [true,'this email is already taken'],
        trim: true,
        required: [true, 'please enter the email you wish to register with'],
 
    },
    FirstName: { 
        type: String,
        trim: true,
        required: [false, 'please enter your first name']
    },
    LastName: {
        type: String,
        trim: true,
        required: [false, 'please enter your first name']
    },  
    PhoneNumber: {
        type: Number,
        required: [false, 'please enter your phone number'],

    },
    password: {
        type: String,
        trim: true, 
        required: [true, 'please select a password to use'],
    },
    password2: {
        type: String,
        trim: true, 
        required: [false, 'please verify your password'],
    }
    
})

module.exports = mongoose.model('Auth', AuthentificationScheme);