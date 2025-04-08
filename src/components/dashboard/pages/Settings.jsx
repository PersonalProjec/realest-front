import React from 'react';

const Settings = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>

      {/* Account Settings */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Account Settings</h3>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            value="John Doe"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            value="johndoe@example.com"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* Privacy and Security */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Privacy and Security</h3>
        <div className="mt-4">
          <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
            Delete Account
          </button>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Notification Settings</h3>
        <div className="mt-4">
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
            <span className="ml-2 text-gray-700">Enable Email Notifications</span>
          </label>
        </div>
      </div>

      {/* Save Changes Button */}
      <div className="flex justify-end">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Settings;