const express = require('express')
const Router = express.Router()

const User = require('../models/User')

const Bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')



Router.post('/register', async (req, res) => {
    
    try {
        const Data = req.body
        console.log(Data)
        const Usr = new User(Data)

        const salt = await Bcrypt.genSalt(10)
        const cryptedPassword = await Bcrypt.hash(Data.Password, salt)
        Usr.Password = cryptedPassword

        const savedUsr = await Usr.save()
        console.log(savedUsr)
        res.status(200).send(savedUsr)
        
    } catch (err) {
        console.log("Register Error: ", err); 
        res.status(401).send(err)
    }
});



Router.post('/login', async (req, res) => {

    try {
        const Data = req.body;
        console.log(Data);
        const Usr = await User.findOne({ Email: Data.Email })
        
        if (!Usr) {
            res.status(404).send("Email or Password invalid !")
        }
    
        else {
            const validPassword = await Bcrypt.compare(Data.Password, Usr.Password)
    
            if (!validPassword) {
                res.status(401).send("Email or Password invalid !")
            }
            else {
                const Peyload = {
                    name: Usr.fullName,
                    email: Usr.Email,
                    role: Usr.Role,
                    _id: Usr._id
                };

                const Token = jwt.sign(Peyload, 'hama150701')
                res.status(200).send({
                    'Token': Token,
                    'Role': Usr.Role
                })
        }

    }} catch (err) {
        console.error("Login Error:", err)
        res.status(401).send(err)
    };
});



module.exports = Router;