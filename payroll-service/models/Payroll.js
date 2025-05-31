const mongoose = require("mongoose");

const payrollSchema = new mongoose.Schema({
    employeeName: { type: String, required: true },
    RateperHour: { type: Number, required: true, min: 0 },
    HoursperDay: { type: Number, required: true, min: 0 },
    NumbersofDaysWorked: { type: Number, required: true, min: 0 },
    GrossSalary: { type: Number, required: true, min: 0 },
    Tax: { type: Number, required: true, min: 0 },
    Philhealth: { type: Number, required: true, min: 0 },
    SSS: { type: Number, required: true, min: 0 },
    TotalDeductions: { type: Number, required: true, min: 0 },
    NetSalary: { type: Number, required: true, min: 0 },
    payday: { type: Date, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Payroll", payrollSchema);