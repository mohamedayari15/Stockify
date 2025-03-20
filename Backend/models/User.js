const mongoose = require('mongoose');

const User = mongoose.model('User', {

    fullName: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        unique: true,
        required: true
    },
    Password: {
        type: String,
        require: true
    },
    Role: {
        type: String,
        required: true,
        enum : ["Admin", "User"]
    }
});


module.exports = User;