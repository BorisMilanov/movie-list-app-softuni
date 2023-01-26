const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:{
        type: String,
        require:true,
        unique:true
    },
    password:{
        type: String,
        require:true
    }
});

userSchema.statics.signup = async function (email,password) {
    const exists = await this.findOne({ email });

    if (exists) {
        throw Error('Email already in use');
    }

    const salt = await bcrypt.salt.genSalt(10);
    const hash = await bvrypt.hash(password,salt);

    const user = await this.create({ email, password: hash});

    return user;
}

module.exports = mongoose.model('User', userSchema);