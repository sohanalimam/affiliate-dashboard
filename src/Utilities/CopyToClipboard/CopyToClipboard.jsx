import React, { useState } from "react";

const CopyToClipboard = () => {
  const [link] = useState("https://example.com/your-link");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(link)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset the "copied" status after 2 seconds
      })
      .catch((err) => console.error("Failed to copy text: ", err));
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg shadow-md w-80 mx-auto">
      <div className="flex items-center w-full">
        <input
          type="text"
          readOnly
          value={link}
          className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleCopy}
          className="px-4 py-2 bg-blue-600 text-white rounded-r-md focus:outline-none hover:bg-blue-700 transition duration-150 ease-in-out"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      {copied && (
        <p className="mt-2 text-green-500 text-sm">Link copied to clipboard!</p>
      )}
    </div>
  );
};

export default CopyToClipboard;
