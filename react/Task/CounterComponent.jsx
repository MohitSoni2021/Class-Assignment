import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ecf0f1] to-[#e5e9f2] flex items-center justify-center">
      <div className="bg-white/60 rounded-2xl shadow-md py-6 px-8 max-w-md mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Count: {count}</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <button
            onClick={increment}
            className="bg-[#34d399] hover:bg-[#2ea87c] text-white px-4 py-2 rounded-lg shadow-md transition-all"
          >
            Increment
          </button>
          <button
            onClick={decrement}
            className="bg-[#3498db] hover:bg-[#2e86c1] text-white px-4 py-2 rounded-lg shadow-md transition-all"
          >
            Decrement
          </button>
          <button
            onClick={reset}
            className="bg-[#e74c3c] hover:bg-[#c0392b] text-white px-4 py-2 rounded-lg shadow-md transition-all"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
