const mongoose = require('mongoose')

let menuSchema = new mongoose.Schema({
    name: {type:String, require: true},
    icon: {type:String, require: true},
    menuUrl: {type:String, require: true},
    entryDate: {type:Date, default:Date.now}
})

let userSchema = new mongoose.Schema({
    email: {type:String, require: true},
    password: {type:String, require: true},
    entryDate: {type:Date, default:Date.now}
})

// will export both into 1 parent object -- which we can them later reference its key/value properties in the UI