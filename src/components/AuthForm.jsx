import React, { useState } from 'react';
import api from '../services/api';
import { GoogleLogin } from '@react-oauth/google';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EmailVerificationModal from '../components/EmailVerificationModal';

const AuthForm = ({ isSignup }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
  });
  const [userId, setUserId] = useState(null);
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  // const [code, setCode] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = isSignup ? '/auth/register' : '/auth/login';

      const payload = isSignup
        ? {
            fullName: formData.name,
            email: formData.email,
            password: formData.password,
            role: formData.role,
          }
        : {
            email: formData.email,
            password: formData.password,
          };

      const { data } = await api.post(endpoint, payload);

      if (isSignup) {
        setUserId(data.userId);
        setShowVerificationModal(true);
        toast.info('Verification code sent to your email');
      } else {
        localStorage.setItem('token', data.token);
        toast.success('Login successful!');
        // navigate to dashboard
      }
    } catch (err) {
      const errorData = err.response?.data;

      // 🔥 New logic to show modal if user exists but not verified
      if (errorData?.requiresVerification && errorData.userId) {
        setUserId(errorData.userId);
        setShowVerificationModal(true);
        toast.info('We sent a verification code to your email');
      } else {
        toast.error(errorData?.message || 'Something went wrong');
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-red-100">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          {isSignup ? 'Sign Up' : 'Log In'}
        </h2>
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="role"
                >
                  Select Role
                </label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                >
                  <option value="">-- Select Role --</option>
                  <option value="Client">Client</option>
                  <option value="Owner">Owner</option>
                  <option value="Agent">Agent</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </>
          )}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Your Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <GoogleLogin
            onSuccess={async (credentialResponse) => {
              try {
                const credential = credentialResponse.credential;
                const { data } = await api.post('/auth/google', { credential });

                if (data.requiresRole) {
                  toast.info('Please select your role');
                  navigate('/select-role', { state: { userId: data.userId } });
                } else {
                  localStorage.setItem('token', data.token);
                  toast.success('Login successful!');
                  // navigate to dashboard
                }
              } catch (err) {
                toast.error('Google login failed');
              }
            }}
            onError={() => toast.error('Google login failed')}
            useOneTap={false}
          />
          <div className="flex items-center mt-8 justify-between mb-2">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {isSignup ? 'Sign Up' : 'Log In'}
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-red-500 hover:text-red-800"
              href={isSignup ? '/login' : '/signup'}
            >
              {isSignup ? 'Already have an account?' : "Don't have an account?"}
            </a>
          </div>

          {!isSignup && (
            <div className="text-right">
              <a
                className="text-sm text-blue-500 hover:text-blue-700 font-medium"
                href="/forgot-password"
              >
                Forgot Password?
              </a>
            </div>
          )}
        </form>
        {showVerificationModal && (
          <EmailVerificationModal
            userId={userId}
            mode={isSignup ? 'signup' : 'login'}
            onSuccess={() => {
              setShowVerificationModal(false);
            }}
            onClose={() => setShowVerificationModal(false)}
          />
        )}
      </div>
    </div>
  );
};

export default AuthForm;
