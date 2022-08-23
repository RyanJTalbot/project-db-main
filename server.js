// Server

// Requirements
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

// const connectDB = require('./config/db');
// const Router = require('./routes/routes.js');

// Set express to the variable app
const app = express();

// Routes
const provider = require('./routes/provider');

// connect database
// Connection to our Database API (MongoDB)
mongoose.connect(
	'mongodb+srv://database:qwerty12345@cluster-db.zqzv6.mongodb.net/?retryWrites=true&w=majority',
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
);

// Initialize middleware
app.use(express.json({ extended: false }));
app.get('/', (req, res) => res.send('connection successful'));

// Use Routes
app.use('/provider', provider);

// Setting up port
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
