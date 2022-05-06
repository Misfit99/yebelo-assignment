const { db } = require('./employee.mongo');
const employeeDatabase = require('./employee.mongo');


async function saveEmployee(employeeData) {
    const employee = await employeeDatabase.findOne({
        employeeName: employeeData.employeeName,
    });

    if (employee) {
        throw new Error('Employee Found');
    }

    await employeeDatabase.findOneAndUpdate({
        employeeName: employeeData.employeeName,
    }, employeeData, {
        upsert: true,
    });
}

async function getEmployeeAndDeg() {
    return await employeeDatabase.find({}, {
        'employeeName': 1,
        'designation': 1,
        '_id': 0,
    }).sort('seniorityLevel');
}

async function getAllEmployee() {
    return await employeeDatabase.find({}, {
        '_id': 0,
        '__v': 0,
        'seniorityLevel': 0,
    }).sort('seniorityLevel');
}

async function countEmployee() {
    const count = await employeeDatabase.collection.count();
    return count;
}

async function findSeniorAndUpdate(employeeData) {
    let seniorityLevel = 3;
    await employeeDatabase.findOneAndUpdate({
        dateOfJoining: employeeData.dateOfJoining,
        seniorityLevel: 2,
    }, {
        designation: employeeData.designation,
        seniorityLevel: seniorityLevel
    }, {
        new: true,
    });
}

async function updateThreeSeniors(employeeData) {
    let seniorityLevel = 4;
    for (let i = 0; i < 3; i++) {
        await employeeDatabase.findOneAndUpdate({
            seniorityLevel: 2,
        }, {
            seniorityLevel: seniorityLevel,
            designation: employeeData.designation,
        }, {
            new: true
        });
    }
}

async function deleteEmployee(employeeData) {
    await employeeDatabase.findOneAndDelete({
        employeeID: employeeData.employeeID,
    });
}

async function updateAddress(employeeData) {
    const employee = await employeeDatabase.findOneAndUpdate({
        employeeID: employeeData.employeeID,
    }, {
        employeeAddress: employeeData.employeeAddress,
    }, {
        new: true,
    });
    return employee;
}

async function deleteOldEmployees() {
    await employeeDatabase.deleteMany({dateOfRelieving: {"$lte": new Date((new Date().getTime() - (24 * 60 * 60 * 1000)))}})
}

module.exports = {
    saveEmployee,
    getEmployeeAndDeg,
    getAllEmployee,
    countEmployee,
    findSeniorAndUpdate,
    updateThreeSeniors,
    deleteEmployee,
    updateAddress,
    deleteOldEmployees,
}