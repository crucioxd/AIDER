import React from "react";
import "./DashboardTable.css";

const DashboardTable = () => {
  return (
    <div className="dashboard-table-container">
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Patient ID</th>
            <th>Patient Name</th>
            <th>Emergency Type</th>
            <th>Contact</th>
            <th id="actions">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>Heart Attack</td>
            <td>123-456-7890</td>
            <td className="dashboard-actions">
              <button>View</button>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jane Smith</td>
            <td>Accident</td>
            <td>987-654-3210</td>
            <td className="dashboard-actions">
              <button>View</button>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jane Smith</td>
            <td>Accident</td>
            <td>987-654-3210</td>
            <td className="dashboard-actions">
              <button>View</button>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jane Smith</td>
            <td>Accident</td>
            <td>987-654-3210</td>
            <td className="dashboard-actions">
              <button>View</button>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jane Smith</td>
            <td>Accident</td>
            <td>987-654-3210</td>
            <td className="dashboard-actions">
              <button>View</button>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jane Smith</td>
            <td>Accident</td>
            <td>987-654-3210</td>
            <td className="dashboard-actions">
              <button>View</button>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jane Smith</td>
            <td>Accident</td>
            <td>987-654-3210</td>
            <td className="dashboard-actions">
              <button>View</button>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jane Smith</td>
            <td>Accident</td>
            <td>987-654-3210</td>
            <td className="dashboard-actions">
              <button>View</button>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jane Smith</td>
            <td>Accident</td>
            <td>987-654-3210</td>
            <td className="dashboard-actions">
              <button>View</button>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jane Smith</td>
            <td>Accident</td>
            <td>987-654-3210</td>
            <td className="dashboard-actions">
              <button>View</button>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  );
};

export default DashboardTable;
