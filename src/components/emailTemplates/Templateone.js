import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const Templateone = () => {
  const [headerContent, setHeaderContent] = useState('Header content');
  const [bodyContent, setBodyContent] = useState('Body content');
  const [footerContent, setFooterContent] = useState('Footer content');

  return (
    <div className="w-full max-w-2xl mx-auto mt-8">
      <div className="border border-gray-300 rounded-lg shadow-sm p-6 bg-white">
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2">Header</label>
          <textarea
            className="w-full h-24 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            value={headerContent}
            onChange={(e) => setHeaderContent(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2">Body</label>
          <textarea
            className="w-full h-48 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            value={bodyContent}
            onChange={(e) => setBodyContent(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2">Footer</label>
          <textarea
            className="w-full h-16 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            value={footerContent}
            onChange={(e) => setFooterContent(e.target.value)}
          />
        </div>

        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Send Email
        </button>
      </div>
    </div>
  );
};

export default Templateone;
