const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema({
    title: {
        type: String,

    },
    body: {
        type: String
    },
    author: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true })
const User = mongoose.model('user', userSchema)
module.exports = User