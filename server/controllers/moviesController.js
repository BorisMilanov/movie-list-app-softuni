const Movies = require('../models/movieModel')
const mongoose = require('mongoose')

// const getMovies = async (req,res) => {
//     const user_id = req.body._id;

//     const movies = await Movies.find({user_id})

//     res.status(200).json(movies)
// }

const createMovie = async (req,res)=>{ 
  // const user_id = req.user._id
  // console.log(user_id);
  //    console.log(user_id);

    try {
      let {  name } = req.body;
      await Movies.create(name);
  } catch (error) {
      console.log(a + error);
      res.status(401).json(error);
  }
  }


const deleteWorkout = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such workout'})
    }
  
    const workout = await Workout.findOneAndDelete({_id: id})
  
    if (!workout) {
      return res.status(400).json({error: 'No such workout'})
    }
  
    res.status(200).json(workout)
  }

  module.exports = {
    // getMovies,
    createMovie
  }