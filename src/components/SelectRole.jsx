import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import api from '../services/api';
import { toast } from 'react-toastify';

const SelectRole = () => {
  const [role, setRole] = useState('');
  const navigate = useNavigate();
  const { state } = useLocation(); // userId passed from redirect
  const userId = state?.userId;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!role) return toast.error('Please select a role');
    try {
      await api.post('/auth/set-role', { userId, role });
      toast.success('Role saved! You can now log in.');
      navigate('/login');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Something went wrong');
    }
  };

  if (!userId) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-red-100 to-blue-100">
        <div className="text-center text-xl text-red-600">User ID missing. Please try again.</div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-red-100 to-blue-100">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">Select Your Role</h2>
        <form onSubmit={handleSubmit}>
          <select
            className="w-full p-3 border rounded mb-6 text-gray-700"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">-- Choose Role --</option>
            <option value="Client">Client</option>
            <option value="Owner">Owner</option>
            <option value="Agent">Agent</option>
          </select>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Save Role
          </button>
        </form>
      </div>
    </div>
  );
};

export default SelectRole;
