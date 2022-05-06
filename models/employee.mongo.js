const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    employeeID: {
        type: String,
        required: true,
    },

    employeeName: {
        type: String,
        required: true,
    },

    employeeAddress: {
        type: String,
        required: true,
    },

    designation: {
        type: String,
        required: true,
    },

    seniorityLevel: {
        type: Number,
        required: true,
    },

    dateOfJoining: {
        type: Date,
        required: true,
    },

    dateOfRelieving: {
        type: Date,
        required: true
    },
});

module.exports = mongoose.model('Employee', employeeSchema);