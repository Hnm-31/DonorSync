import React, { useEffect, useState } from "react";
import axios from "axios";

const DonorList = () => {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    // Fetch donors from the backend
    axios.get("/api/donors")
      .then((response) => setDonors(response.data))
      .catch((error) => console.error("Error fetching donors:", error));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">List of Donors</h2>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total Donations</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {donors.map((donor) => (
              <tr key={donor.id}>
                <td className="px-6 py-4 text-sm text-gray-800">{donor.name}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{donor.email}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{donor.totalDonations}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DonorList;