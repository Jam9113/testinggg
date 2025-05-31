const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 4001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/payrollDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log(" Employee-Service connected to MongoDB"))
  .catch(err => console.error(" MongoDB connection error:", err));

// Routes
const employeeRoutes = require("./routes/employeeRoutes");
app.use("/api", employeeRoutes);

app.listen(PORT, () => console.log(`Employee-Service running on port ${PORT}`));