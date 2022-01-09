const mongoose = require('mongoose');

const UserSchema = new.mongoose.Schema({
    username: {
        type: String, 
        require: true,
        min: 3,
        max: 20,
        unique: true,
    },
    fullname:{
        type: String,
        require: true,
        max: 50,
        unique: true,
    },
    email: {
        type: String,
        require: true,
        max: 50,
    },
    profilePicture: {
        type: String,
        default: "",
    },
    coverPicture: {
        type: String,
        default: "",
    },
    followers: {
        type: Array,
        default: [],
    },
    followings: {
        type: Array,
        default: [],
    },
    description: {
        type: String,
        max: 50,
    },
    city: {
        type: String,
        max: 20,
    }, 
    from : {
        type: String,
        max: 20,      
    },
    relationship: {
        type: String,
        max: 10,
    }
})