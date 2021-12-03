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
        default: Date.now()
    },
    status:{
        type: String,
        default: 'AVAILABLE'
    }
}, { timestamps: true })


module.exports = mongoose.model('Comment', Comment)