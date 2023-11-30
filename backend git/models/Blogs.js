const mongoose = require ('mongoose')
const Blog = new mongoose.Schema({
    BlogName: {type:String },
    Author:{type:String},
    Date:{type:Number},
    Description:{type:String}
}) 

module.exports = mongoose.model('Blog', Blog)