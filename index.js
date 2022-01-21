const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const router = express.Router();

// Route
const authRoute = require('./routes/auth');

// Optional vars
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require("cors");
const port = 8000;
require('dotenv').config();

// CORS Config
const corsOptions = {
    origin: '*', 
    credentials: true,            
    // access-control-allow-credentials: true,
    // optionSuccessStatus: 200,
}

// middleware
app.use(morgan('common'));
app.use(express.json());
app.use(helmet());
app.use(cors(corsOptions));

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
// app.use("/api/auth", authRoute);

app.listen(port, () => {
    console.log(`App is running at port ${port}`);
});

