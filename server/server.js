require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoute')
const movieRoutes = require('./routes/movieRoute')
const Movies = require('./models/movieModel')
const app = express();
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    next();
});
app.use('/api/user',userRoutes)


app.post('/addFav',async(req,res)=>{
    try {
        let {  name } = req.body;
        const movies =  new Movies({name});
        await movies.save()
    } catch (error) {
        console.log(error);
        res.status(401).json(error);
    }
})
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