import React, { useState } from 'react';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
    >
      <button
        type="button"
        onClick={toggleDarkMode}
        className={`px-4 py-2 rounded-md shadow-sm ${darkMode ? 'bg-white text-gray-800' : 'bg-gray-800 text-white'}`}
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};

export default ThemeToggle;

