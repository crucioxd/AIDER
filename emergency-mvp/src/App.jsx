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
import { AuthProvider } from "./context/authcontext"; 
import ProtectedRoute from "./components/ProtectedRoute"; 

const App = () => {
  return (
    <AuthProvider> 
      <Router>
        <Header />
        <div className="content-wrapper">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />

            {/* Protected Routes */}
            <Route
              path="/emergency"
              element={
                <ProtectedRoute>
                  <EmergencyForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin-dashboard"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/respondent"
              element={
                <ProtectedRoute>
                  <RespondentDashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;
