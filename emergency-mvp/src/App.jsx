import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmergencyForm from "./pages/EmergencyForm";
import AdminDashboard from "./pages/AdminDashboard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RespondentDashboard from "./pages/respondentForm";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div id="root">
      <Router>
        <Header />
        <div className="content-wrapper">
          <Routes>
          <Route path="/home" element={<HomePage />} />
            <Route path="/" element={<EmergencyForm />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/respondent" element={<RespondentDashboard />} />
          </Routes>
        </div>
       
      </Router>
      <Footer />
    </div>
     
  );
};

export default App;
