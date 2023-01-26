const  User = require('../models/userModel');

const loginUser = async (req, res) => {
    res.json({ mssg: 'login user' });
}

const signupUser = async (req, res) => {
    const {email, password} = req.body;

    try {
     const user = await User.signup(email,password)
        
    } catch (error) {
        console.log(error);
    }

}



module.exports = { signupUser, loginUser }