import React, { useState } from 'react';

const Accordian = ({ questions = [] }) => {
  const [expanded, setExpanded] = useState({});

  const toggleExpanded = (id) => {
    setExpanded({
      ...expanded,
      [id]: !expanded[id],
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-purple-400 via-pink-400 to-blue-400 p-8">
      <div className="w-full max-w-4xl space-y-6 px-4">
        {questions.map((question) => (
          <div key={question.id} className="bg-white/40 backdrop-blur-md rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-center">
              <h2 className="font-medium text-lg text-gray-900">{question.title}</h2>
              <button
                onClick={() => toggleExpanded(question.id)}
                className="text-blue-500 hover:text-blue-700 transition"
              >
                {expanded[question.id] ? '-' : '+'}
              </button>
            </div>
            {expanded[question.id] && (
              <div className="mt-4">
                <p className="text-gray-700">{question.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordian;

