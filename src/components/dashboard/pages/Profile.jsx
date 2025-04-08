import React from 'react';

const Profile = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg">
      {/* Profile Picture */}
      <div className="flex items-center gap-4">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="w-24 h-24 rounded-full border"
        />
        <div>
          <h2 className="text-xl font-bold">John Doe</h2>
          <p className="text-gray-500">johndoe@example.com</p>
        </div>
      </div>

      {/* Personal Information */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold">Personal Information</h3>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              value="John Doe"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              value="johndoe@example.com"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              value="+1234567890"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
            <input
              type="date"
              value="1990-01-01"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Account Settings */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold">Account Settings</h3>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            value="johndoe"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <button className="mt-1 text-blue-500 hover:underline">Change Password</button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex justify-end gap-4">
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
          Cancel
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Profile;