// components/EmailVerificationModal.jsx
import { useState } from 'react';
import api from '../services/api';
import { toast } from 'react-toastify';

const EmailVerificationModal = ({
  userId,
  onSuccess,
  onClose,
  mode = 'signup',
}) => {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);

  const handleVerify = async (e) => {
    e.preventDefault();
    if (code.length !== 6) return toast.error('Enter the 6-digit code');
    try {
      setLoading(true);
      const { data } = await api.post('/auth/verify-email', { userId, code });
      localStorage.setItem('token', data.token);
      toast.success('Email verified successfully!');
  
      onSuccess && onSuccess(data);
  
      if (mode === 'signup') {
        window.location.href = '/login';
      } else {
        window.location.href = '/dashboard'; // or use navigate('/dashboard') if using react-router
      }
    } catch (err) {
      toast.error(err.response?.data?.message || 'Invalid or expired code');
    } finally {
      setLoading(false);
    }
  };
  

  const handleResend = async () => {
    try {
      await api.post('/auth/resend-code', { userId });
      toast.success('Code resent to your email');
    } catch {
      toast.error('Failed to resend code');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-sm">
        <h3 className="text-xl font-semibold text-center text-blue-600 mb-4">
          Verify Your Email
        </h3>
        <form onSubmit={handleVerify}>
          <input
            type="text"
            placeholder="Enter 6-digit code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full p-2 border rounded mb-3"
            maxLength={6}
            autoFocus
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded font-bold mb-2"
            disabled={loading}
          >
            {loading ? 'Verifying...' : 'Verify Email'}
          </button>
          <button
            type="button"
            className="w-full text-sm text-blue-500 underline hover:text-blue-700"
            onClick={handleResend}
          >
            Didn’t get the code? Resend
          </button>
          <div className="text-center mt-4">
            <button
              type="button"
              onClick={onClose}
              className="text-sm text-red-500 hover:text-red-700"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmailVerificationModal;
