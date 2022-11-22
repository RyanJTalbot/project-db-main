// Server

// Requirements
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Set express to the variable app
const app = express();

// Routes
const provider = require('./routes/provider');
const { collection } = require('./models/providerModel');

// connect database
// Connection to our Database API (MongoDB)
mongoose.connect(
	'mongodb+srv://database:qwerty12345@cluster-db.zqzv6.mongodb.net/?retryWrites=true&w=majority',
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
);

// Use Cors
app.use(cors());

// Parse the body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Use Routes
app.use('/provider', provider);

app.use('/zip', provider);

// connect to search function
app.use('/zip', async (request, response) => {
	try {
		let result = await provider
			.aggregate([
				{
					$search: {
						autocomplete: {
							query: `${request.query.term}`,
							path: 'zip_code',
						},
					},
				},
			])
			.toArray();
		response.send(result);
	} catch (e) {
		response.status(500).send({ message: e.message });
	}
});

// Setting up port
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
