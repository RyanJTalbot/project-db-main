// Load express and our Schema
const express = require("express");
const providerModel = require("./model");
const app = express();

// TODO
// If needed add a post endpoint

// GET Endpoint
app.get("/providers", async (request, response) => {
    const providers = await providerModel.find({});

    // Try - Catch
    try {
        response.send(providers);
    } catch (error) {
        response.status(500).send(error);
    }
});

// Export endpoints
module.exports = app;
