const Provider = require('../models/providerModel');

// get all providers
exports.getAllProvider = (req, res) => {
	Provider.find()
		.then((provider) => res.json(provider))
		.catch((err) =>
			res
				.status(404)
				.json({ message: 'Provider not found', error: err.message }),
		);
};

// query providers by zip
const query = { zip: '70816' };

const cursor = Provider.find('zip');

// get provider by zip code
exports.getProviderZip = (req, res) => {
	Provider.find()
		// cursor()
		.then((cursor) => res.json(cursor))
		.catch((err) =>
			res
				.status(404)
				.json({ message: 'Zip Code not found', error: err.message }),
		);
};
