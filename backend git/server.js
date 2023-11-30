const express = require('express')
const app = express();
const moongose = require('mongoose')
const BlogData = require('./models/Blogs')
const BlogController = require('./controllers/Blogcontrollers')
const BlogRoutes = require('./Routes/Blogroutes')
const dB = require('./middlewares/dB')

app.use(express.json())
dB.connectToDB();

app.use('/Blog',BlogRoutes)


app.get('/',(req, res)=>{
    res.send(`Hello I am  `)
})

app.post('/home',(req, res)=>{
    const inputData = req.body
    const createData = BlogData.create(inputData)
    res.status(200).json(inputData)
})

app.listen(8000,()=>{
    console.log('Server is Started on 8000');
})