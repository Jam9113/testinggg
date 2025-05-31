const express = require("express");
const router = express.Router();
const Payroll = require("../models/Payroll");

router.post("/payrolls", async (req, res) => {
    try {
        const payroll = new Payroll(req.body);
        await payroll.validate();
        const saved = await payroll.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get("/payrolls", async (req, res) => {
    const records = await Payroll.find();
    res.json(records);
});

module.exports = router;