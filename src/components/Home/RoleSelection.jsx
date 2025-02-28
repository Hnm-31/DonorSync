import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RoleSelection = () => {
  const [selectedRole, setSelectedRole] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedRole) {
      navigate(`/register/${selectedRole}`);
    } else {
      alert("Please select a role.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-sky-100 via-orange-100 to-amber-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Select Your Role</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center">
            <input
              type="radio"
              id="donor"
              name="role"
              value="donor"
              onChange={(e) => setSelectedRole(e.target.value)}
              className="mr-2"
            />
            <label htmlFor="donor" className="text-gray-700">Donor</label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="institution"
              name="role"
              value="institution"
              onChange={(e) => setSelectedRole(e.target.value)}
              className="mr-2"
            />
            <label htmlFor="institution" className="text-gray-700">Needy Institution</label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="supplier"
              name="role"
              value="supplier"
              onChange={(e) => setSelectedRole(e.target.value)}
              className="mr-2"
            />
            <label htmlFor="supplier" className="text-gray-700">Supplier</label>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white p-2 rounded-lg hover:bg-orange-600 transition-all"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default RoleSelection;