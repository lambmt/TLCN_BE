const mongoose = require('mongoose')
const Schema = mongoose.Schema


const User = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        default: ''
    },
    birthDay:{
        type: Date,
        default: false
    },
    avatar_url: {
        type: String,
        default: ''
    },
    phoneNumber: {
        type: String,
        default: ''
    },  
    role: {
        type: String,
        default: false
    },
    isVerify: {
        type: Boolean,
        default: false
    },
    otp: {
        type: String,
        default: ''
    }

}, { timestamps: true })


module.exports = mongoose.model('User', User)