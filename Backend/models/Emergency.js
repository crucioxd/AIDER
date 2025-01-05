const mongoose = require("mongoose");

const EmergencySchema = new mongoose.Schema({
  name: { type: String, required: true },
  emergencyType: { type: String, required: true },
  contact: { type: String, required: true },
  location: { type: String, required: true },
  status: { type: String, default: "Pending" }, // New status field
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Emergency", EmergencySchema);
