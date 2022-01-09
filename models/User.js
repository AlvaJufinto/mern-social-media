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
    description: {
        type: String,
        max: 50,
    },
    followers: {
        type: Array,
        default: [],
    },
    followings: {
        type: Array,
        default: [],
    },
    city: {
        type: String,
        max: 20,
    }, 
    from : {
        type: String,
        max: 20,      
    },
    work : {
        type: String,
        max: 20
    },
    relationship: {
        type: String,
        max: 10,
    },
    website: {
        type: String,
        max: 10,
    }
});

module.exports = mongoose.model("Post", PostSchema);