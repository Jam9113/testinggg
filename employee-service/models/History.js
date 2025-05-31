const mongoose = require("mongoose");

const historySchema = new mongoose.Schema({
    employeeId: { type: mongoose.Schema.Types.ObjectId, ref: "Employee", required: true },
    pay: { type: Number, required: true, min: 0 },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("History", historySchema);