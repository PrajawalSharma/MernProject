import express from 'express';
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import postRoutes from './routes/posts.js'

const app = express();


app.use(bodyParser.json({limit:"30mb", extended:true}))
app.use(bodyParser.urlencoded({ limit:"30mb", extended:true}))
app.use(cors())

const CONNECT_URL = 'mongodb+srv://javascript:javascript123@cluster0.2d2bw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000
app.use('/posts', postRoutes)

mongoose.connect(CONNECT_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, ()=> console.log(`Server Running On Port: ${PORT}`)) )
.catch((error) => console.log(error.message))
