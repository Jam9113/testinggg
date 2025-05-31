const express = require("express");
const router = express.Router();
const Employee = require("../models/Employee");
const History = require("../models/History");

router.post("/employees", async (req, res) => {
    try {
        const employee = new Employee(req.body);
        await employee.validate();
        const saved = await employee.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get("/employees", async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
});

router.post("/history", async (req, res) => {
    try {
        const record = new History(req.body);
        await record.validate();
        const saved = await record.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get("/history", async (req, res) => {
    const history = await History.find().populate("employeeId");
    res.json(history);
});

module.exports = router;