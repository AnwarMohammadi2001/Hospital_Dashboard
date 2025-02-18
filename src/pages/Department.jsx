import React from "react";

const Department = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Hospital Departments
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card for Department 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Card Image"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">Cardiology</h2>
            <p className="text-gray-600 mt-2">
              Our cardiology department offers a wide range of heart-related
              treatments and services.
            </p>
            <div className="mt-4">
              <h3 className="font-semibold text-gray-800">Staff</h3>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Dr. John Doe - Chief Cardiologist</li>
                <li>Dr. Jane Smith - Cardiologist</li>
                <li>Dr. Mark Green - Cardiologist</li>
              </ul>
            </div>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">
              View Details
            </button>
          </div>
        </div>

        {/* Card for Department 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Card Image"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">Orthopedics</h2>
            <p className="text-gray-600 mt-2">
              We provide the best treatments for musculoskeletal disorders,
              fractures, and joint problems.
            </p>
            <div className="mt-4">
              <h3 className="font-semibold text-gray-800">Staff</h3>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Dr. Emily White - Orthopedic Specialist</li>
                <li>Dr. David Black - Orthopedic Surgeon</li>
              </ul>
            </div>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">
              View Details
            </button>
          </div>
        </div>

        {/* Card for Department 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Card Image"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">Pediatrics</h2>
            <p className="text-gray-600 mt-2">
              Our pediatrics department is dedicated to the care and treatment
              of children and infants.
            </p>
            <div className="mt-4">
              <h3 className="font-semibold text-gray-800">Staff</h3>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Dr. Sarah Lee - Pediatrician</li>
                <li>Dr. Lily Adams - Pediatric Specialist</li>
              </ul>
            </div>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Department;
