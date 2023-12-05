const express = require("express");
const app = express();

//require env and config
require('dotenv').config();

//middleware bodyparser
app.use(express.json());


//port creation
const PORT = process.env.PORT || 3000;

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:3000/your_database_name', { useNewUrlParser: true, useUnifiedTopology: true });

console.log('PORT:', PORT);

//DB connection
const connectDB= require("./config/connectDB");
connectDB();

app.use('/api/person',require('./routes/Person'))

//server creation
app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`Server running on port ${PORT}`);
});
