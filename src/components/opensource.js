// VedVyasFoundationComponent.js

import React from 'react';

const VedVyasFoundationComponent = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 rounded-lg overflow-hidden shadow-lg bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white hover:shadow-xl transition duration-300 border border-purple-600">
      <h2 className="text-2xl font-bold mb-4"><span className="text-xl">Ved Vyas Foundation - The Gita Initiative</span></h2>
      <p className="text-gray-200">Tech Stack: Next.JS, Nest.JS, Python, FastAPI, OpenAI</p>

      <h3 className="text-xl font-bold mt-4 mb-2">Contributions:</h3>
      <ul className="list-disc pl-6 text-gray-300 text-justify">
        <li>
          Debugged the frontend bugs of v2 of Bhagavad Gita Website.
        </li>
        <li>
          Web scraped Srimad Bhagavatam dataset for chat bot using Python, appended new authors in Bhagavad Gita data, and added their descriptions for 700 verses of Bhagavad Gita.
        </li>
        <li>
          Created embedding of web scraped data in vector form for chat-bot prompts to reduce the cost of operations using OpenAI and Python.
        </li>
      </ul>
    </div>
  );
};

export default VedVyasFoundationComponent;
