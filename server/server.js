require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoute')
const movieRoutes = require('./routes/movieRoute')
const Movies = require('./models/movieModel')
const app = express();
const requireAuth = ('./middleware/requireAuth')
app.use(cors());
app.use(express.json());


app.use((req, res, next) => {
    next();
});
app.use('/api/user',userRoutes)
app.use('/api/move',movieRoutes)
const User = require('./models/userModel')
// app.post('/addFav',async(req,res)=>{
//     let { name } = req.body;
//     const user_id = req.user._id

//     try {
        
//         const movies =  new Movies({name,user_id});
//         await movies.save()
//     } catch (error) {
//         console.log(error);
//         res.status(401).json(error);
//     }
// })
mongoose.connect(process.env.MONGO_URI)
    .then(() => {

        app.listen(4000, () => {
            console.log('connected to db & listening on port')
            console.log(`The app is running on http://localhost:4000/`)
        })
    })
    .catch((error) => {
        console.log(error)
 })