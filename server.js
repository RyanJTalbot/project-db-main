// Server

// Requirements
const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes");

// Set express to the variable app
const app = express();

app.use(express.json());

// Connection to our Database API (MongoDB)
mongoose.connect(
    "mongodb+srv://database:qwerty12345@cluster-db.zqzv6.mongodb.net/?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        // useFindandModify causing errors
        // useFindAndModify: false,
        useUnifiedTopology: true,
    }
);

// Connection to database - Error Messages and Successfully
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});

// Connecting Express to our Router
app.use(Router);

// Setting the Port to 3000
app.listen(3000, () => {
    console.log("Server is running at port 3000");
});
