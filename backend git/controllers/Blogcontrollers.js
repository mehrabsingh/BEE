const mongoose = require('mongoose')
const express = require('express')
const BlogServices=require('../Services/bookServices');
const Blog = require('../models/Blogs');


exports.createBook=async(req, res)=>{
    const inputData=req.body;
    console.log('inputData',inputData);
    const details=await bookServices.createBook(inputData);
    console.log('details', details);
}

exports.getBlog=async(req,res)=>{
    const data=await Blogs.find();
    res.status(200).json({data:data});
}

exports.updateProduct=async(req,res)=>{
    await Blogs.updateOne({Date: 27}, {
        $set:{
            name: req.body.maker
        }
    });
    res.status(200).json({
        message: "Product updated"
    })
}

exports.deleteProduct=async(req,res)=>{
    await Products.deleteMany({name:"Nikhil"});
    res.status(200).json({
        message:"Product deleted"
    })
}

