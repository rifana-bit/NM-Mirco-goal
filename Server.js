const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const authRoutes = require("./router/authRouter");
const goalRoutes = require("./router/goalRouter");

const app = express();

app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/goals", goalRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log("MongoDB Error:", err);
});

// Test Route
app.get("/", (req,res)=>{
    res.send("MicroGoals API Running");
});

// Server Start
const PORT = process.env.PORT || 8000;

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});