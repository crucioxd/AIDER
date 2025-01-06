import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";
import "./respondent.css";

const RespondentDashboard = () => {
  const [emergencies, setEmergencies] = useState([]);
  const [selectedEmergency, setSelectedEmergency] = useState(null);
  const [error, setError] = useState("");
  const [isEmpty, setIsEmpty] = useState(false); 
  // Track empty state
  const navigate = useNavigate(); // Initialize navigate
  
  
  useEffect(() => {
    const fetchEmergencies = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/emergencies");
        const fetchedEmergencies = response.data.data.map((emergency) => ({
          ...emergency,
          status: emergency.status || "Pending", // Default to "Pending" if not set
        }));
        setEmergencies(fetchedEmergencies);
        setIsEmpty(fetchedEmergencies.length === 0); // Check if the list is empty
        setError("");
      } catch (err) {
        setError("Failed to load emergency cases. Please try again later.");
      }
    };

    fetchEmergencies();
  }, []);

  const handleViewDetails = (emergency) => {
    setSelectedEmergency(emergency);
  };

  const closeDetails = () => {
    setSelectedEmergency(null);
  };

  const handleGetDirections = (location) => {
    const encodedLocation = encodeURIComponent(location);
    const mapUrl = `https://www.google.com/maps?q=${encodedLocation}`;
    window.open(mapUrl, "_blank");
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/emergencies/${id}`, {
        status: newStatus,
      });
      const updatedEmergency = response.data.data;

      setEmergencies((prevEmergencies) =>
        prevEmergencies.map((emergency) =>
          emergency._id === id ? { ...emergency, status: updatedEmergency.status } : emergency
        )
      );
    } catch (err) {
      console.error("Failed to update status:", err);
    }
  };

  const handleRemoveCase = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/emergencies/${id}`);
      setEmergencies((prevEmergencies) => {
        const updatedEmergencies = prevEmergencies.filter(
          (emergency) => emergency._id !== id
        );
        setIsEmpty(updatedEmergencies.length === 0); // Update empty state
        return updatedEmergencies;
      });
    } catch (err) {
      console.error("Failed to remove case:", err);
    }
  };

  const closePopupAndRedirect = () => {
    setIsEmpty(false);
    navigate("/"); // Redirect to the home page
  };

  return (
    <div className="respondent-dashboard">
   <h1>Active Emergency Cases</h1> 
      {error && <p className="error-message">{error}</p>}
      {!error && (
        <>
          {/* Conditionally render the table */}
          {!isEmpty && (
            
            <table className="emergency-table">
                 
              <thead>
                <tr>
                  <th>Patient Name</th>
                  <th>Emergency Type</th>
                  <th className="loc">Location</th>
                  <th>Reported Time</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {emergencies.map((emergency) => (
                  <tr key={emergency._id}>
                    <td>{emergency.name}</td>
                    <td>{emergency.emergencyType}</td>
                    <td>{emergency.location}</td>
                    <td>{new Date(emergency.createdAt).toLocaleString()}</td>
                    <td>
                      <select
                        value={emergency.status}
                        onChange={(e) =>
                          handleStatusChange(emergency._id, e.target.value)
                        }
                        className="status-dropdown"
                      >
                        <option value="Pending" className="pending">Pending</option>
                        <option value="In Progress" className="progress">In Progress</option>
                        <option value="Resolved" className="resolved">Resolved</option>
                      </select>
                    </td>
                    <td>
                      {emergency.status === "Resolved" ? (
                        <button
                          className="removebtn"
                          onClick={() => handleRemoveCase(emergency._id)}
                        >
                          Remove Case
                        </button>
                      ) : (
                        <>
                          <button
                            className="viewbtn"
                            onClick={() => handleViewDetails(emergency)}
                          >
                            View Details
                          </button>
                          <button
                            className="dirbtn"
                            onClick={() =>
                              handleGetDirections(emergency.location)
                            }
                          >
                            Get Directions
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {/* Popup for Empty State */}
          {isEmpty && (
            <div className="popup-overlay">
              <div className="popup-card">
                <h2>No Active Emergency Cases</h2>
                <p>Please check back later.</p>
                <button className="close-btn" onClick={closePopupAndRedirect}>
                  X
                </button>
              </div>
            </div>
          )}
        </>
      )}
      {selectedEmergency && (
        <div className="popup-overlay">
          <div className="popup-card">
            <button className="close-btn" onClick={closeDetails}>
              &times;
            </button>
            <h2 className="headingpop">Emergency Details</h2>
            <p>
              <strong>Patient Name :</strong> {selectedEmergency.name}
            </p>
            <p>
              <strong>Emergency Type :</strong> {selectedEmergency.emergencyType}
            </p>
            <p>
              <strong>Contact:</strong>
              {selectedEmergency.contact}
            </p>
            <p>
              <strong>Location : </strong>
              {selectedEmergency.location}
            </p>
            <p>
              <strong>Reported Time: </strong>
              {new Date(selectedEmergency.createdAt).toLocaleString()}
            </p>
            <iframe
              width="500"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAhrzwn7Y_5FoxfgKKc-mY0Ou78UwgJwtc&q=${encodeURIComponent(
                selectedEmergency.location
              )}`}
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default RespondentDashboard;
