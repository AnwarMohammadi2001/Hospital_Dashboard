import { useState } from "react";

import { FaChevronDown, FaBell, FaSearch , FaUser } from "react-icons/fa";
const Navbar = () => {
  const [selectedUser, setSelectedUser] = useState("John Doe");
  const [showDropdown, setShowDropdown] = useState(false);

  const users = ["John Doe", "Alice Smith", "Michael Brown"];

  return (
    <nav className="bg-white text-white px-4 py-2 flex justify-between items-center pr-14">
      {/* Search Bar */}
      <div className="relative w-1/3">
        <input
          type="text"
          placeholder="Search anything..."
          className="bg-gray-200 outline-none placeholder:text-gray-500  text-gray-600 px-10 py-2 rounded-lg w-full"
        />
        <FaSearch
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={18}
        />
      </div>

      {/* Icons and User Profile */}
      <div className="flex items-center gap-6">
        {/* Notification Icon */}
        <button className="relative">
          <FaBell size={22} className="text-indigo-500" />
        </button>

        {/* User Profile with Dropdown */}
        <div className="relative">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setShowDropdown(!showDropdown)}
          >
           <div className="border  rounded-full border-violet-400 p-1">
           <FaUser className="text-violet-500 " size={20} />
           </div>
            <span className="text-gray-500 font-bold">{selectedUser}</span>
            <div className="flex items-center text-gray-600  gap-x-2">
              <span>
                <FaChevronDown
                  className={` transition-all duration-300 ${
                    showDropdown ? "rotate-180" : ""
                  }
            
              `}
                />
              </span>
            </div>
          </div>

          {/* Dropdown Menu */}
          {showDropdown && (
            <ul className="absolute right-0 mt-2 left-0 w-40 z-10 bg-white text-black rounded shadow-lg">
              {users.map((user, index) => (
                <li
                  key={index}
                  className="p-2 hover:bg-gray-200  border-white cursor-pointer"
                  onClick={() => {
                    setSelectedUser(user);
                    setShowDropdown(false);
                  }}
                >
                  {user}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
