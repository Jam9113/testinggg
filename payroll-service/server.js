const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 4002;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/payrollDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log(" Payroll-Service connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));

// Routes
const payrollRoutes = require("./routes/payrollRoutes");
app.use("/api", payrollRoutes);

app.listen(PORT, () => console.log(`Payroll-Service running on port ${PORT}`));