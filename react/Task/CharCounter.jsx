import React, { useState } from 'react'

const CharCounter = () => {
    const [text, setText] = useState('');
    const [charCount, setCharCount] = useState(0);
    const [wordCount, setWordCount] = useState(0);

    const handleTextChange = (e) => {
        const text = e.target.value;
        setText(text);
        setCharCount(text.length);
        setWordCount(text.split(' ').length);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#ecf0f1] to-[#e5e9f2] flex items-center justify-center p-6">
            <div className="bg-white/60 rounded-2xl shadow-md p-6 w-full max-w-7xl space-y-6">
                <h1 className="text-3xl font-bold text-gray-800">Character Counter</h1>
                <input type="text" value={text} onChange={handleTextChange} className="w-full bg-white/90 rounded-lg shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                <p className="text-lg font-medium text-gray-800">Character count: {charCount}</p>
                <p className="text-lg font-medium text-gray-800">Word count: {wordCount}</p>
            </div>
        </div>
    )
}

export default CharCounter