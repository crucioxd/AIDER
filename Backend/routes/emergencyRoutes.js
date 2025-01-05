const express = require("express");
const {
  createEmergency,
  getEmergencies,
  updateEmergencyStatus,
  deleteEmergency,
} = require("../controllers/emergencyController");
const router = express.Router();

router.post("/emergencies", createEmergency);
router.get("/emergencies", getEmergencies);
router.put("/emergencies/:id", updateEmergencyStatus); // Update status
router.delete("/emergencies/:id", deleteEmergency); // Delete resolved case

module.exports = router;
