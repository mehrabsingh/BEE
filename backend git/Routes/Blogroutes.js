const mongoose = require('mongoose')
const express = require('express')

const router = express.Router();

const bookController = require('../controllers/Blogcontrollers')

router.post('/create-blog',blogController.createBlog);
router.get('/get-blog',blogController.getBlog);
router.put('/update-blog',blogController.updateBlog);
router.delete('/delete-blog', blogController.deleteBlog);

module.exports=router;