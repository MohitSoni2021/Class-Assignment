import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const startTimer = () => setIsRunning(true);
  const stopTimer = () => setIsRunning(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#ecf0f1] to-[#e5e9f2] p-8">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white/90 rounded-3xl shadow-md px-8 py-6 w-full max-w-lg mx-4 text-center space-y-6"
      >
        <h1 className="text-3xl font-medium text-gray-800">Timer: {time}s</h1>
        <div className="flex justify-center gap-4">
          <motion.button
            whileTap={{ scale: 0.95 }}
            initial={{ scale: 1 }}
            className="px-6 py-2 bg-[#34d399] hover:bg-[#2ea87c] text-white rounded-md shadow-md transition duration-200"
            onClick={startTimer}
          >
            Start
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            initial={{ scale: 1 }}
            className="px-6 py-2 bg-[#e74c3c] hover:bg-[#c0392b] text-white rounded-md shadow-md transition duration-200"
            onClick={stopTimer}
          >
            Stop
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Timer;

