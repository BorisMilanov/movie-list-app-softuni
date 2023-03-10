const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const requireAuth = async (req, res, next) => {
  // verify user is authenticated
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).json({error: 'Authorization token required'})
  }

  const token = authorization.split(' ')[1] //Clue number one give a headers to a watchedmovies page

  try {
    const { _id } = jwt.verify(token, 'ninjadojoshifuyoshimarioluigipeachbowser')
//
    req.user = await User.findById({ _id }) //TOdo middleware
    next()

  } catch (error) {
    console.log(error)
    res.status(401).json({error: 'Request is not authorized'})
  }
}

module.exports = requireAuth