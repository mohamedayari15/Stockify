const express = require('express');
const Router = express.Router();

const Product = require('../models/Product');

const multer = require('multer');



const myStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); 
    },
    filename: (req, file, cb) => {
        let filename = Date.now() + '.' + file.mimetype.split('/')[1];
        cb(null, filename);
    }
});

const upload = multer({ storage: myStorage });

Router.post('/post', upload.single('Image'), async (req, res) => {
    try {
        console.log("Received Data:", req.body);
        console.log("Uploaded File:", req.file);

        if (!req.file) {
            return res.status(400).json({ error: "Image is required!" });
        }

        const Prod = new Product({
            Name: req.body.Name,
            Price: req.body.Price,
            Description: req.body.Description,
            Category: req.body.Category,
            Quantity: req.body.Quantity,
            Image: req.file.filename
        });

        const savedProduct = await Prod.save();
        res.status(200).json(savedProduct);
        
    } catch (err) {
        console.error("Error saving product:", err);
        res.status(500).json({ error: err.message });
    }
});



Router.get('/getProducts', async (req, res) => {
    
    try {
        const Products = await Product.find()
        console.log(Products)
        res.status(200).send(Products)
        
    } catch (err) {
        console.log("Error getting products: ", err)
        res.status(401).send(err)
    }
});



Router.get('/getProductById/:id', async (req, res) => {
    
    try {
        const id = req.params.id
        const Prod = await Product.findById({ _id: id })
        console.log(Prod)
        if (!Prod) {
            return res.status(404).send({ message: "Product not found" });
        }
        res.status(200).send(Prod)
        
    } catch (err) {
        console.log("Error Getting Product: ", err)
        res.status(401).send(err)
    }
});



Router.put('/update/:id', upload.single('Image'), async (req, res) => {

    try {
        const id = req.params.id
        const Data = req.body

        if (req.file) {
            Data.Image = req.file.filename
        }

        Data.UpdatedAt = Date.now()
        const updatedProd = await Product.findByIdAndUpdate(id, Data, { new: true })
        console.log(updatedProd)
        res.status(200).send(updatedProd)

    } catch (err) {
        res.status(401).send(err)
    }
});



Router.delete('/delete/:id', async (req, res) => {

    try {
        const id = req.params.id

        const deletedProd = await Product.findByIdAndDelete(id)
        console.log(deletedProd)
        res.status(200).send(deletedProd)

    } catch (err) {
        console.log("Error deleting product", err)
        res.status(401).send(err)
    }
});



module.exports = Router;