import React, { useState } from 'react';

const ToggleText = () => {
  const [showText, setShowText] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-400 to-indigo-400 p-6">
      <div className="bg-white/30 rounded-2xl shadow-md w-full max-w-md p-6 text-center space-y-6">
        <h1 className="text-2xl font-bold text-white drop-shadow">Toggle Text Visibility</h1>

        <button
          onClick={() => setShowText(!showText)}
          className="px-6 py-2 bg-white/50 hover:bg-white/70 text-gray-800 rounded-lg shadow-md transition duration-200"
        >
          {showText ? 'Hide' : 'Show'} Text
        </button>

        {showText && (
          <p className="text-gray-800 text-lg font-medium drop-shadow">Hello, World! 👋</p>
        )}
      </div>
    </div>
  );
};

export default ToggleText;
