const express = require('express');
const mongoose = require('mongoose');
const app = express();

const userRoute = require('./routes/user.route');

// Database
mongoose.connect('mongodb://127.0.0.1:27017/user-manger', { useNewUrlParser: true })
    .then(() => console.log('Connected to mongodb....'))
    .catch(err => console.error(err));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use(userRoute);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server has started on port 3000...'));