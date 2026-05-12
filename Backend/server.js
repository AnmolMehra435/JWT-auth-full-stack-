const express = require("express");
const cors = require("cors")
const mongoose = require('mongoose')
const verifyJwt = require('./middleware/authMiddleware')
require('dotenv').config();
const app = express();

const port = process.env.PORT || 5000;

const URL = process.env.MONGO_DB_URL;

const connectMongo = async () =>{
    try{
        await mongoose.connect(URL);
        console.log("Mongodb connected");
        app.listen(port, () => {
            console.log("Server is running.....")
         })
    }catch(err){
        console.error(err);
    }
}
app.use(express.json())

app.use(cors())

app.use('/auth', require('./routes/authRoutes'))

app.get('/protected', verifyJwt, (req, res) => {
    res.json({
        verified: true,
        message: "Success"
    })
})

app.get('/', (req, res) => {
    res.json({
        "message": "server is working"
    });
})

connectMongo();

