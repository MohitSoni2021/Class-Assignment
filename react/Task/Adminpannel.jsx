import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Adminpannel = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const validator = () => {
    const userRole = localStorage.getItem('usertypetesting');
    if (userRole === 'admin') {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
      navigate('/formvalidator'); // Redirect to home page if not admin
    }
  }

  useEffect(() => {
    validator();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#ecf0f1] to-[#e5e9f2]">
      {isAdmin && (
        <div className="bg-white/60 rounded-2xl shadow-md w-full max-w-7xl p-6 space-y-6">
          <h1 className="text-3xl font-bold text-gray-800 text-center drop-shadow">
            Admin Panel
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-white/90 rounded-lg shadow-md p-4">
              <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
            </div>
            <div className="bg-white/90 rounded-lg shadow-md p-4">
              <h2 className="text-2xl font-bold text-gray-800">Settings</h2>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
            </div>
          </div>
          <div className="flex justify-end">
            <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-6 py-2 transition duration-200" onClick={() => {
              localStorage.removeItem('usertypetesting');
              validator();
            }}>Logout</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Adminpannel

