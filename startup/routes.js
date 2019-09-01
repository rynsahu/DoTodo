const home = require('../routes/home');
const register = require('../routes/register');
const login = require('../routes/login');
const express = require('express');

module.exports = function (app) {
    app.use(express.json());
    app.use('/', home);
    app.use('/users/register', register);
    app.use('/users/login', login);
};