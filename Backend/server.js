const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());
//auth routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// Routes
const emergencyRoutes = require("./routes/emergencyRoutes");
app.use("/api", emergencyRoutes);
 // Use the reviews route


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

console.log("MongoDB URI:", process.env.MONGODB_URI);
