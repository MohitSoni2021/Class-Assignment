import React, { useState } from 'react';

const ApiFetch = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ecf0f1] to-[#e5e9f2] flex items-center justify-center p-6">
      <div className="bg-white/60 rounded-2xl shadow-md p-6 w-full max-w-7xl space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">User List</h1>
        <button 
          onClick={fetchUsers} 
          className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-sm transition duration-200"
        >
          Fetch Users
        </button>
        {loading && <p className="text-center text-lg font-medium">Loading...</p>}
        {error && <p className="text-center text-lg font-medium text-red-600">{error}</p>}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map(user => (
            <li
              key={user.id}
              className="bg-white/90 rounded-2xl shadow-md p-4 hover:shadow-lg transition duration-200"
            >
              <h2 className="text-lg font-medium text-gray-800">{user.name}</h2>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ApiFetch;

