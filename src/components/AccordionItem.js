'use client';

import React, { useState } from 'react';

export default function AccordianItem({ content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="rounded-lg border overflow-hidden shadow-lg text-white">
      {/* Question Header */}
      <button
        onClick={toggleFAQ}
        className="w-full px-6 py-4 text-left bg-foreground-dark flex items-center justify-between transition-colors duration-200"
      >
        <h3 className="text-lg font-semibold pr-4">
          {content.question}
        </h3>
        <div className="flex-shrink-0">
          <svg
            className={`w-5 h-5 text-accent transform transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="white"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>

      {/* Answer Content */}
      <div
        className={`overflow-hidden transition-all duration-300 bg-foreground-dark/90 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-4 pt-2">
          <p className="leading-relaxed">
            {content.answer}
          </p>
        </div>
      </div>
    </div>
  );
}