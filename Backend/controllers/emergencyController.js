const Emergency = require("../models/emergency");

// Create a new emergency
const createEmergency = async (req, res) => {
  try {
    const emergency = new Emergency(req.body);
    await emergency.save();
    res.status(201).json({ success: true, data: emergency });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Fetch all emergencies
const getEmergencies = async (req, res) => {
  try {
    const emergencies = await Emergency.find();
    res.status(200).json({ success: true, data: emergencies });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Update the status of an emergency
const updateEmergencyStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updatedEmergency = await Emergency.findByIdAndUpdate(
      id,
      { status },
      { new: true } // Return the updated document
    );

    if (!updatedEmergency) {
      return res.status(404).json({ success: false, message: "Emergency not found" });
    }

    res.status(200).json({ success: true, data: updatedEmergency });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Delete an emergency
const deleteEmergency = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedEmergency = await Emergency.findByIdAndDelete(id);

    if (!deletedEmergency) {
      return res.status(404).json({ success: false, message: "Emergency not found" });
    }

    res.status(200).json({ success: true, message: "Emergency case removed successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  createEmergency,
  getEmergencies,
  updateEmergencyStatus,
  deleteEmergency,
};
