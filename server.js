const express = require("express");
const path = require("path");

var PORT = process.env.PORT || 8080;

//Set up Express to handle data parsing.
applicationCache.use(express.urlencoded({extended: true}));
app.use(express.json());
