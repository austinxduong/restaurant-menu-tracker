const mongoose = require('mongoose')

let menuSchema = new mongoose.Schema({
    name: {type:String, require: true},
    icon: {type:String, require: true},
    menuUrl: {type:String, require: true},
    entryDate: {}
})