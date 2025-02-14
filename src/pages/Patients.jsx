import React, { useState } from "react";

const Patients = () => {
  // Sample patient data
  const [patients, setPatients] = useState([
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      phone: "123-456-7890",
      email: "john.doe@example.com",
      gender: "Male",
      dateOfBirth: "1990-05-15",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      phone: "987-654-3210",
      email: "jane.smith@example.com",
      gender: "Female",
      dateOfBirth: "1985-10-22",
    },
    {
      id: 3,
      firstName: "Ali",
      lastName: "Khan",
      phone: "555-123-4567",
      email: "ali.khan@example.com",
      gender: "Male",
      dateOfBirth: "1992-03-10",
    },
    {
      id: 4,
      firstName: "Sara",
      lastName: "Williams",
      phone: "444-987-6543",
      email: "sara.williams@example.com",
      gender: "Female",
      dateOfBirth: "1988-07-25",
    },
    {
      id: 5,
      firstName: "David",
      lastName: "Brown",
      phone: "666-789-0123",
      email: "david.brown@example.com",
      gender: "Male",
      dateOfBirth: "1995-12-05",
    },
    {
      id: 6,
      firstName: "Emma",
      lastName: "Johnson",
      phone: "777-234-5678",
      email: "emma.johnson@example.com",
      gender: "Female",
      dateOfBirth: "1993-08-18",
    },
    {
      id: 7,
      firstName: "Michael",
      lastName: "Miller",
      phone: "888-345-6789",
      email: "michael.miller@example.com",
      gender: "Male",
      dateOfBirth: "1980-06-30",
    },
    {
      id: 8,
      firstName: "Sophia",
      lastName: "Anderson",
      phone: "999-456-7890",
      email: "sophia.anderson@example.com",
      gender: "Female",
      dateOfBirth: "1991-11-12",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter patients based on search term
  const filteredPatients = patients.filter((patient) =>
    `${patient.firstName} ${patient.lastName}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  // Handle delete patient
  const handleDelete = (id) => {
    setPatients(patients.filter((patient) => patient.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Patients List</h2>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search patients by name..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Patients Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Phone
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Gender
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date of Birth
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredPatients.map((patient) => (
                <tr key={patient.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {patient.firstName} {patient.lastName}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{patient.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{patient.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {patient.gender}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {patient.dateOfBirth}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        View
                      </button>
                      <button className="text-green-600 hover:text-green-900">
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(patient.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination (Optional) */}
        <div className="mt-6 flex justify-center">
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
            <button className="px-3 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              Previous
            </button>
            <button className="px-3 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              1
            </button>
            <button className="px-3 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              2
            </button>
            <button className="px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              Next
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Patients;
