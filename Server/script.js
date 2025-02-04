const express = require('express');
const { MongoClient } = require('mongodb'); 
const port = 5000;
const app = express();
const mongoUrl = 'mongodb://localhost:27017/';
console.log("Hi, Terminal");
MongoClient.connect(mongoUrl, (err, client) => {
    if (err) {
        console.error("Error connecting to MongoDB:", err);
        return;
    }
    const db = client.db('Edureka');
    console.log("Connected to MongoDB");
    app.listen(port, () => {
        console.log(`Server and MongoDB connected, listening on port ${port}`);
    });
});