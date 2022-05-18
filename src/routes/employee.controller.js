const {
    saveEmployee,
    getEmployeeAndDeg,
    getAllEmployee,
    countEmployee,
    findSeniorAndUpdate,
    updateThreeSeniors,
    deleteEmployee,
    updateAddress,
    deleteOldEmployees,
} = require('../models/employee.model');

async function httpAddNewEmployee(req, res) {
    const employee = req.body;

    if(!employee.employeeID || !employee.employeeName 
        || !employee.employeeAddress || !employee.designation){
            return res.status(400).json({
                error: 'Missing Some Important Properties',
            });
    }

    employee.dateOfJoining = new Date(employee.dateOfJoining);

    if(isNaN(employee.dateOfJoining)){
        return res.status(400).json({
            error: 'Invalid Date',
        });
    }

    await saveEmployee(employee);

    return res.status(201).json(employee);
}

async function httpGetEmployeeAndDeg(req, res) {
    return res.status(200).json(await getEmployeeAndDeg());
}

async function httpGetAllEmployee (req, res) {
    return res.status(200).json(await getAllEmployee());
}

async function httpCountEmployee (req, res) {
    return res.status(200).json(await countEmployee());
}

async function httpFindSeniorAndUpdate (req, res) {
    const employee = req.body;

    if(!employee.designation || !employee.dateOfJoining){
        return res.status(400).json({
            error: 'Missing Some Important Properties',
        });
    }
    employee.dateOfJoining = new Date(employee.dateOfJoining);

    if(isNaN(employee.dateOfJoining)){
        return res.status(400).json({
            error: 'Invalid Date',
        });
    }

    await findSeniorAndUpdate(employee);

    return res.status(201).json(employee);
}

async function httpUpdateThreeSeniors(req, res){
    const designation = req.body;

    await updateThreeSeniors(designation);

    return res.status(201).json(designation);
}

async function httpDeleteEmployee(req, res) {
    const employeeID = req.body;

    await deleteEmployee(employeeID);

    return res.status(200).json(employeeID);
}

async function httpUpdateAddress(req, res) {
    const employeeID = req.body;

    const employee = await updateAddress(employeeID);

    return res.status(201).json(employee);
}

async function httpDeleteOldEmployees(req, res) {
    const employee = await deleteOldEmployees();
    return res.status(200).json(employee);
}

module.exports = {
    httpAddNewEmployee,
    httpGetEmployeeAndDeg,
    httpGetAllEmployee,
    httpCountEmployee,
    httpFindSeniorAndUpdate,
    httpUpdateThreeSeniors,
    httpDeleteEmployee,
    httpUpdateAddress,
    httpDeleteOldEmployees
}