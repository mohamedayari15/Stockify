const mongoose = require('mongoose');

const Product = mongoose.model('Product', {

    Name: { type: String, required: true, unique: true },
    Description: { type: String },
    Price: { type: Number, required: true },
    Quantity: { type: Number, required: true, default: 0 },
    Category: { 
        type: String, 
        enum: ["Laptop", "Smartphone", "Television"], 
        required: true 
    },
    Image: {type: String, required: true},
    CreatedAt: { type: Date, default: Date.now },
    UpdatedAt: { type: Date, default: Date.now }
});


module.exports = Product;