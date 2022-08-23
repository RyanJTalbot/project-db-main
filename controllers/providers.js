const Provider = require('../models/providerModel');

exports.getAllProvider = (req, res) => {
	Provider.find()
		.then((provider) => res.json(provider))
		.catch((err) =>
			res
				.status(404)
				.json({ message: 'Provider not found', error: err.message }),
		);
};
