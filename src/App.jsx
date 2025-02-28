import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import RoleSelection from "./components/RoleSelection/RoleSelection";
import RegisterDonor from "./components/Register/RegisterDonor";
import RegisterInstitution from "./components/Register/RegisterInstitution";
import RegisterSupplier from "./components/Register/RegisterSupplier";
import DonorList from "./components/Dashboard/DonorList";
import RequirementForm from "./components/Dashboard/RequirementForm";
import SupplierSelection from "./components/Dashboard/SupplierSelection";
import FeedbackForm from "./components/Dashboard/FeedbackForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/role-selection" element={<RoleSelection />} />
      <Route path="/register/donor" element={<RegisterDonor />} />
      <Route path="/register/institution" element={<RegisterInstitution />} />
      <Route path="/register/supplier" element={<RegisterSupplier />} />
      <Route path="/donors" element={<DonorList />} />
      <Route path="/requirements" element={<RequirementForm />} />
      <Route path="/suppliers" element={<SupplierSelection location="New York" />} />
      <Route path="/feedback" element={<FeedbackForm supplierId="123" />} />
    </Routes>
  );
}

export default App;


// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Login from "./components/Login/Login";
// import RoleSelection from "./components/RoleSelection/RoleSelection";
// import DonorDashboard from "./components/DonorDashboard/Donordashboard";
// import SupplierDashboard from "./components/DonorDashboard/SupplierDashboard";
// import InstitutionDashboard from "./components/DonorDashboard/InstitutionDashboard";
// import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

// function App() {
//   return (
//     <Routes>
//       <Route path="/login" element={<Login />} />
//       <Route path="/role-selection" element={<RoleSelection />} />

//       {/* Protected Routes */}
//       <Route element={<ProtectedRoute allowedRoles={["donor"]} />}>
//         <Route path="/donor-dashboard" element={<DonorDashboard />} />
//       </Route>
//       <Route element={<ProtectedRoute allowedRoles={["supplier"]} />}>
//         <Route path="/supplier-dashboard" element={<SupplierDashboard />} />
//       </Route>
//       <Route element={<ProtectedRoute allowedRoles={["institution"]} />}>
//         <Route path="/institution-dashboard" element={<InstitutionDashboard />} />
//       </Route>
//     </Routes>
//   );
// }

// export default App;



