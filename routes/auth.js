const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

// Register 
router.post("/register", async (req, res) => {
    try {
        // // Generate new password
        // const salt =  await bcrypt.genSalt(10);
        // hashedPassword = await bcrypt.hash(req.body.password, salt);
        
        // const username = await User.findOne({ username: req.body.username });
        // username && res.status(404).json("Username is taken");
        
        // const fullname = await User.findOne({ fullname: req.body.fullname });
        // fullname && res.status(404).json("Fullname is taken");

        // Create new user
        const user = new User({
            username: req.body.username,
            fullname: req.body.fullname,
            email: req.body.email,
            password: req.body.password,
        });

        // Save user and send respond
        await user.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

// Login    
router.post('/login', async (req, res) =>{
    try {
        
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(404).json("User not found");

        console.log(user.password);
        console.log(req.body.password);
        
        const userPassword = user.password;
        const validPassword = userPassword.localeCompare(req.body.password);
        validPassword && res.status(404).json("Wrong password");

        return res.status(200).json(user);
    } catch (err) {
        return res.status(400).json(err);
    }
});

module.exports = router;