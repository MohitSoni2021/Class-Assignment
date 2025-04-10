import React, { useState } from "react";
import { Searcharr } from "../Constants.js";

const Livesearch = () => {
  const [Input, SetInput] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#ecf0f1] to-[#e5e9f2] flex items-center justify-center p-6">
      <div className="bg-white/60 backdrop-blur-md rounded-2xl shadow-md p-6 max-w-lg w-full mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">Live Search</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-800 placeholder-gray-500 shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={Input}
            onChange={(e) => SetInput(e.target.value)}
          />
          <ul className={`absolute top-14 left-0 right-0 max-h-56 overflow-y-auto bg-white/90 rounded-lg shadow-md mt-1 divide-y divide-gray-200 ${Input ? "block" : "hidden"}`}>
            {
            Searcharr.filter((item) => item.toLowerCase().includes(Input.toLowerCase())).map((item, index) => (
              <li key={index} className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors">
                {item}
              </li>
            ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Livesearch;

