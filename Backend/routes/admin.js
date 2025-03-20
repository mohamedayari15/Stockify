const express = require('express')
const Router = express.Router()

const Admin = require('../models/Admin')

const Bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')



Router.post('/register', async (req, res) => {
    
    try {
        const Data = req.body
        console.log(Data)
        const Adm = new Admin(Data)

        const salt = await Bcrypt.genSalt(10)
        cryptedPassword = await Bcrypt.hash(Data.Password, salt)
        Adm.Password = cryptedPassword

        const savedAdm = await Adm.save()
        console.log(savedAdm)
        res.status(200).send(savedAdm)

    } catch (err) {
        console.log("Register Error: ", err)
        res.status(401).send(err)
    }
});



Router.post('/login', async (req, res) => {
    
    try {
        const Data = req.body
    console.log(Data)
    const Adm = await Admin.findOne({ Email: Data.Email })

    if (!Adm) {
        res.status(404).send("Email or Password invalid !")
    }
    
    else {
        const validPassword = await Bcrypt.compareSync(Data.Password, Adm.Password)

        if (!validPassword) {
            res.status(401).send("Email or Password invalid !")
        }
        else {
            const Peyload = {
                name: Adm.fullName,
                email: Adm.Email,
                role: Adm.Role,
                _id: Adm._id
            };

            const Token = jwt.sign(Peyload, 'admin12345')
            res.status(200).send({
                 'Token': Token,
                 'Role': Adm.Role
                })
        }

    }} catch (err) {
        console.error("Login Error:", err)
        res.status(401).send(err)
    };
});



module.exports = Router;