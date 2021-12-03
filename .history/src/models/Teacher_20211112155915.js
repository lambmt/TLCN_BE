const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Teacher = new Schema({
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
    teacher_auth: {
        cmnd: {
            type: String
        },
        maGV:{
            type: String
        },
        university:{
            type: String
        },
    },
    status:{
        type: String,
        default: 'AVAILABLE'
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


module.exports = mongoose.model('Teacher', Teacher)