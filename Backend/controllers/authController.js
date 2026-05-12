require('dotenv').config()

const User = require('../models/users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const secret = process.env.SUPER_SECRET_KEY

const registerUser = async (req, res) => {
    const newUser = {
        "email": req.body.email,
        "password": req.body.password
    }

    if(!newUser.email || !newUser.password){
        return res.status(400).json({
            "message": "bad request"
        })
    }

    const duplicate = await User.findOne({
        "email": newUser.email
    })
    
    if(duplicate){
        return res.status(409).json({
            "message": "user already exists"
        })
    }

    const hashPwd = await bcrypt.hash(newUser.password, 10);

    const user = await User.create({
        "email": newUser.email,
        "password": hashPwd
    })

    res.json(user);
}

const handleLogin = async (req, res) => {
    const userEmail = req.body.email
    const userPass = req.body.password

    if(!userEmail || !userPass){
        return res.status(400).json({
            "message": "missing fields"
        })
    }

    const duplicate = await User.findOne({
        "email": userEmail
    })

    if(!duplicate){
        return res.status(404).json({
            "message": "user does not exists"
        })
    }

    const match = await bcrypt.compare(userPass, duplicate.password);

    if(match){

        const token = jwt.sign({ userEmail }, secret, { expiresIn: '5m' })

        return res.status(200).json({
            "token": token
        })
    }else{
        return res.status(422).json({
            "message": "invalid password"
        })
    }
}

module.exports = { registerUser, handleLogin }