import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import { FaUser, FaLock, FaBell, FaCog } from "react-icons/fa";

const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Settings</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Profile Settings */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <FaUser className="text-blue-600" /> Profile Settings
          </h3>
          <div className="mt-4 space-y-3">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
            />
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Save Changes
            </button>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <FaLock className="text-red-600" /> Security Settings
          </h3>
          <div className="mt-4 space-y-3">
            <input
              type="password"
              placeholder="Current Password"
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-red-400"
            />
            <input
              type="password"
              placeholder="New Password"
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-red-400"
            />
            <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
              Update Password
            </button>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <FaBell className="text-yellow-600" /> Notification Preferences
          </h3>
          <div className="mt-4 flex items-center justify-between">
            <span>Email Notifications</span>
            <Switch
              checked={notifications}
              onChange={setNotifications}
              className={`${
                notifications ? "bg-green-500" : "bg-gray-300"
              } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span
                className={`${
                  notifications ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform bg-white rounded-full transition`}
              />
            </Switch>
          </div>
        </div>

        {/* General Settings */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <FaCog className="text-gray-600" /> General Settings
          </h3>
          <div className="mt-4 flex items-center justify-between">
            <span>Dark Mode</span>
            <Switch
              checked={darkMode}
              onChange={setDarkMode}
              className={`${
                darkMode ? "bg-black" : "bg-gray-300"
              } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span
                className={`${
                  darkMode ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform bg-white rounded-full transition`}
              />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
