const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Course = new Schema({
    title: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ''
    },
    price:{
        type: Number,
        default: 0
    },
    imgBanner_url: {
        type: String,
        default: ''
    },
   count_register: {
        type: Number,
        default: 0
    },  
    authorID: {
        type: String,
        required: true
    },
    status:{
        type: String,
        default: 'AVAILABLE'
    }
}, { timestamps: true })


module.exports = mongoose.model('Course', Course)