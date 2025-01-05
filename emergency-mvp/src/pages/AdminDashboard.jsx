import React from "react";
import Navbar from "../components/Header";
import Footer from "../components/Footer";
import DashboardTable from "../components/DashboardTable";

const AdminDashboard = () => {
  return (
    <div id="root">
     <div className="content-wrapper">
    <div className="admin-dashboard">
      <Navbar />
      <main>
        
        <DashboardTable />
      </main>
 
    </div>
    </div>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
