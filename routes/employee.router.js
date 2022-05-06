const express = require('express');

const {
    httpAddNewEmployee,
    httpGetEmployeeAndDeg,
    httpGetAllEmployee,
    httpCountEmployee,
    httpFindSeniorAndUpdate,
    httpUpdateThreeSeniors,
    httpDeleteEmployee,
    httpUpdateAddress,
    httpDeleteOldEmployees
} = require('./employee.controller');

const employeeRouter = express.Router();


// 30 Points

employeeRouter.get('/',  httpGetEmployeeAndDeg);

employeeRouter.get('/all', httpGetAllEmployee);

employeeRouter.get('/count', httpCountEmployee);

employeeRouter.post('/update-senior', httpFindSeniorAndUpdate);

// 50 points
employeeRouter.post('/', httpAddNewEmployee);

employeeRouter.post('/update-three-seniors', httpUpdateThreeSeniors);

employeeRouter.delete('/delete-employee', httpDeleteEmployee);

employeeRouter.post('/update-employee-address', httpUpdateAddress);

employeeRouter.delete('/delete-old-employees', httpDeleteOldEmployees);

module.exports = employeeRouter;