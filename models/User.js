const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
        username: {
            type: String, 
            required: [true, 'Username is required'],
            minLength: [6, 'Fullname atleast has 6 characters'],
            maxLength: 20,
            // unique: [true, 'username is taken'],
        },
        fullname:{
            type: String,
            required: [true, 'Fullname is required'],
            minLength: [6, 'Fullname atleast has 6 characters'],
            maxLength: 50,
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            maxLength: 50,
            // unique: [true, 'Email is taken'],
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
            minLength: [6, 'Password atleast has 6 characters'],
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
            maxLength: 50,
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
        city: {
            type: String,
            maxLength: 20,
        }, 
        from : {
            type: String,
            maxLength: 20,      
        },
        work : {
            type: String,
            maxLength: 20
        },
        relationship: {
            type: String,
            maxLength: 10,
        },
        website: {
            type: String,
            maxLength: 10,
        },  
    },
    { timestamps: true }, 
);

module.exports = mongoose.model("User", UserSchema);