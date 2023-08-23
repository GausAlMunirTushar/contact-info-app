// imports
const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');


const app = express();


app.get('/', (req, res) => {
    res.send("hello world")
})

module.exports = app;