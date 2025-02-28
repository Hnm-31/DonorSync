import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const RegisterInstitution = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    institutionType: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }
    toast.success("Institution registered successfully!");
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-sky-100 via-orange-100 to-amber-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Register as Institution</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Institution Type</label>
            <select
              value={formData.institutionType}
              onChange={(e) => setFormData({ ...formData, institutionType: e.target.value })}
              className="w-full p-2 border rounded-lg"
              required
            >
              <option value="">Select Institution Type</option>
              <option value="orphanage">Orphanage</option>
              <option value="educational">Educational Institution</option>
              <option value="elderly-care">Elderly Care Home</option>
              <option value="community-center">Community Center</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white p-2 rounded-lg hover:bg-orange-600 transition-all"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterInstitution;