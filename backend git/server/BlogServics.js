const mongoose = require('mongoose')
const Blogs=require('../models/Blogs')

exports.createBook=async(Data)=>{
    return await Blogs.create(Data) 
}

exports.getBook=async()=>{
    return await Blogs.find()
}