import React, { useEffect, useState } from "react";
import axios from "axios";

const SupplierSelection = ({ location }) => {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    // Fetch suppliers based on location
    axios.get(`/api/suppliers?location=${location}`)
      .then((response) => setSuppliers(response.data))
      .catch((error) => console.error("Error fetching suppliers:", error));
  }, [location]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Select Supplier</h2>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rating</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {suppliers.map((supplier) => (
              <tr key={supplier.id}>
                <td className="px-6 py-4 text-sm text-gray-800">{supplier.name}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{supplier.location}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{supplier.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SupplierSelection;