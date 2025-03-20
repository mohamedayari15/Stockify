const mongoose = require('mongoose');

const Admin = mongoose.model('Admin', {

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
        required: true
    },
    Role: {
        type: String,
        required: true,
        enum: ["Admin", "User"]
    }
});


module.exports = Admin;