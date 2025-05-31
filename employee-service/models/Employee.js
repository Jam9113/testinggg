const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    position: { type: String, required: true },
    department: { type: String, required: true },
    monthlySalary: { type: Number, required: true, min: 0 },
    timeIn: { type: String, default: null },
    timeOut: { type: String, default: null }
}, { timestamps: true });

module.exports = mongoose.model("Employee", employeeSchema);