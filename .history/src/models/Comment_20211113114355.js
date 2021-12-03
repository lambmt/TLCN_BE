const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Comment = new Schema({
    authorID: {
        type: String,
        required: true
    },
    courseID: {
        type: String,
        required: true
    },
    content:{
        type: String,
        default: 'It is a nice course'
    },
    createdDate: {
        type: Date,
        default: ''
    },
    phoneNumber: {
        type: String,
        default: ''
    },  
    role: {
        type: String,
        default: 'STUDENT'
    },
    status:{
        type: String,
        default: 'AVAILABLE'
    },
    courses_registerd:{
        type: Array,
        default: null
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


module.exports = mongoose.model('Comment', Comment)