const { signIn } = require('./user.service');

const app = require('express').Router();

app.post('/signIn' , signIn)

module.exports = app;