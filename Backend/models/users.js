const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
    email: {
        required: true, 
        unique: true,
        lowercase: true,
        trim: true,
        type: String
    },
    password: {
        required: true, 
        type: String
    }
})

module.exports = mongoose.model("User", userSchema)