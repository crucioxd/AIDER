import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmergencyForm from "./pages/EmergencyForm";
import AdminDashboard from "./pages/AdminDashboard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RespondentDashboard from "./pages/respondentForm";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/Signup";

const App = () => {
  return (
    <div id="root">
      <Router>
        <Header />
        <div className="content-wrapper">
          <Routes>
          <Route path="/emergency" element={<EmergencyForm />} />
            <Route path="/" element={<HomePage/>} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/respondent" element={<RespondentDashboard />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage/>} />
          </Routes>
        </div>
       
      </Router>
      <Footer />
    </div>
     
  );
};

export default App;
