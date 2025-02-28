import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import RoleSelection from "./components/RoleSelection/RoleSelection";
import DonorDashboard from "./components/Dashboard/DonorDashboard";
import SupplierDashboard from "./components/Dashboard/SupplierDashboard";
import InstitutionDashboard from "./components/Dashboard/InstitutionDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/role-selection" element={<RoleSelection />} />

      {/* Protected Routes */}
      <Route element={<ProtectedRoute allowedRoles={["donor"]} />}>
        <Route path="/donor-dashboard" element={<DonorDashboard />} />
      </Route>
      <Route element={<ProtectedRoute allowedRoles={["supplier"]} />}>
        <Route path="/supplier-dashboard" element={<SupplierDashboard />} />
      </Route>
      <Route element={<ProtectedRoute allowedRoles={["institution"]} />}>
        <Route path="/institution-dashboard" element={<InstitutionDashboard />} />
      </Route>
    </Routes>
  );
}

export default App;