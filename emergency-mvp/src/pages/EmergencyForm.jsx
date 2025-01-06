import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import Footer from "../components/Footer";

const EmergencyForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emergencyType: "",
    otherEmergencyType: "",
    phone: "",
    address: "",
  });

  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emergencyType =
      formData.emergencyType === "Other"
        ? formData.otherEmergencyType
        : formData.emergencyType;

    const emergencyData = {
      name: `${formData.firstName} ${formData.lastName}`,
      emergencyType,
      contact: formData.phone,
      location: formData.address,
    };

    try {
      await axios.post("http://localhost:5000/api/emergencies", emergencyData);
      setMessage("Emergency registered successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        emergencyType: "",
        otherEmergencyType: "",
        phone: "",
        address: "",
      });
      setShowPopup(true);
    } catch (error) {
      setMessage("Error registering emergency. Please try again.");
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setMessage("");
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await axios.get(
              `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyBBQjxEQSQSL1_JDQiYqVOS6vw59oFEo_4`
            );
            const address = response.data.results[0]?.formatted_address;
            if (address) {
              setFormData((prevData) => ({
                ...prevData,
                address,
              }));
            } else {
              alert("Unable to fetch address. Please try again.");
            }
          } catch (error) {
            alert("Error fetching location. Please check your API key or network.");
          }
        },
        (error) => {
          alert("Error fetching location. Please ensure location services are enabled.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  return (
    <div id="root">
      <div className="content-wrapper">
        <div className="form-container">
          <form className="appointment-form" onSubmit={handleSubmit}>
            <h1>Emergency Patient Registration</h1>
            <p>Please complete the form below</p>

            <label htmlFor="firstName">Enter Patient's Name</label>
            <div className="name-fields">
              <input
                type="text"
                id="firstName"
                value={formData.firstName}
                placeholder="First Name"
                onChange={handleChange}
                required
              />
              <input
                type="text"
                id="lastName"
                value={formData.lastName}
                placeholder="Last Name"
                onChange={handleChange}
                required
              />
            </div>

            <label htmlFor="emergencyType">Emergency Type</label>
            <select
              id="emergencyType"
              value={formData.emergencyType}
              onChange={handleChange}
              required
            >
              <option value="">Select Emergency Type</option>
              <option value="Accident">Accident</option>
              <option value="Heart Attack">Heart Attack</option>
              <option value="Other">Other</option>
            </select>

            {formData.emergencyType === "Other" && (
              <div>
                <label htmlFor="otherEmergencyType">Specify Emergency Type</label>
                <input
                  type="text"
                  id="otherEmergencyType"
                  value={formData.otherEmergencyType}
                  placeholder="Describe the emergency"
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            <label className="phone">Phone Number</label>
            <input
              className="phone"
              type="tel"
              id="phone"
              value={formData.phone}
              placeholder="+91"
              onChange={handleChange}
              required
            />

            <label htmlFor="address">Address</label>
            <div className="address-container">
              <textarea
                className="address"
                id="address"
                value={formData.address}
                placeholder="Enter your address"
                rows="2"
                onChange={handleChange}
                required
              ></textarea>
              <button
                type="button"
                className="fetch-location"
                onClick={getCurrentLocation}
              >
                AUTO
              </button>
            </div>

            <button type="submit" className="submit">Submit</button>
          </form>
        </div>
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Success</h2>
            <p>{message}</p>
            <button className="close-popup" onClick={handleClosePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmergencyForm;
