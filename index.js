const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const router = express.Router();

// Route
const authRoute = require('./routes/auth');

// Optional vars
const morgan = require('morgan');
const port = 8000;
require('dotenv').config();

// middleware
app.use(morgan('common'));
app.use(express.json());

mongoose.connect(
  process.env.MONGO_CONNECT,
  { 
    useUnifiedTopology: true,
    useNewUrlParser: true,
    autoIndex: true, //make this also true  
  },
  () => {
    console.log("Connected to MongoDB");
  }
);

app.use("/api/auth", authRoute);

app.listen(port, () => {
    console.log(`App is running at port ${port}`);
});

