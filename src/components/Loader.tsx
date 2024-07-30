import React from "react";

const Loader: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen fixed inset-0 z-10">
      <div className="bg-gray-300 flex flex-col items-center justify-center p-8 rounded-lg">
        <svg
          className="animate-spin h-12 w-12 mb-4 text-gray-900"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24">
          <circle
            className="opacity-90"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"></path>
        </svg>
        <p className="text-lg font-semibold text-gray-700">{text}</p>
      </div>
    </div>
  );
};

export default Loader;
