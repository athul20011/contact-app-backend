//connection code of node and mongodb
//1 import mongoose
const mongoose = require('mongoose')

//connection string
mongoose.connect('mongodb://127.0.0.1:27017/ContactApp');


//model creation
const contacts = mongoose.model('contacts',{
    id:String,
    username:String,
    phone:String,
    email:String,
    street:String,
    city:String
})

module.exports={
contacts
}