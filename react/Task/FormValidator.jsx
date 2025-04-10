import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormValidator = () => {
    const navigate = useNavigate();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const validate = () => {

    const newErrors = {};
    if (email.trim() === '') newErrors.email = 'Email is required';
    if (password.trim() === '') newErrors.password = 'Password is required';
    if (emailRegex.test(email)) {
        setErrors({ ...newErrors, email: '' });
      } else {
        setErrors({ ...newErrors, email: 'Invalid email format' });
      }
    
      if(passwordRegex.test(password)) {
        setErrors({ ...newErrors, password: '' });
      }
      else {
        setErrors({ ...newErrors, password: 'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character' });
      }
    if (newErrors.email || newErrors.password) {
      setErrors(newErrors);
      return false;
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      console.log('Form is valid');
      if(email === 'admin@gmail.com') {
        localStorage.setItem('usertypetesting', "admin");
        navigate('/adminpannel');
    }else{
        localStorage.setItem('usertypetesting', "user");
      }
    } else {
      console.log('Form is invalid');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#ecf0f1] to-[#e5e9f2] p-6">
      <div className="bg-white/30 backdrop-blur-xl rounded-2xl shadow-md p-8 w-full max-w-md mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="p-3 block w-full rounded-lg bg-white/90 shadow-md focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.email && <div className="text-red-400 text-sm mt-1">{errors.email}</div>}
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="p-3 block w-full rounded-lg bg-white/90 shadow-md focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.password && <div className="text-red-400 text-sm mt-1">{errors.password}</div>}
          </div>
          <button type="submit" className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-200">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormValidator;

