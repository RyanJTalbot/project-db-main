// Load express and our Schema
const express = require('express');
const router = express.Router();

// TODO
// If needed add a post endpoint

const { getAllProvider, getProviderZip } = require('../controllers/providers');

router.get('/', getAllProvider);
router.get('/zip', getProviderZip);

// Export endpoints
module.exports = router;
