const mongoose = require('mongoose');


const AccountsScheme = new mongoose.Schema({
    AccountName: {
        type: String,
        required: [true, 'please select a name to give the account'],
        unique: [true, 'that account name is already taken please choose another'],
        trim: true

    },
    Currency:{
        type: String,
        required: [true, 'please select the currency for the account'],
        trim: true
    },
    OpeningBalance: {
        type: String,
        required: [true, 'enter the opening balance for the account'],
        trim: true
    }
})

module.exports = mongoose.model('Accounts', AccountsScheme);