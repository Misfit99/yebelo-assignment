const express = require('express');

const app = express();

app.use(express.json());

const employeeRouter = require('./routes/employee.router');

app.use('/employee', employeeRouter);

module.exports = app;