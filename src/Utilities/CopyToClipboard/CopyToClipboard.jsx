import React, { useState } from "react";
import { FaClipboard } from "react-icons/fa";

const CopyToClipboard = ({ initialLink = "https://example.com/your-link" }) => {
  const [link] = useState(initialLink);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(link)
      .then(() => {
        setCopied(true);
        setError(false);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
        setError(true);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg shadow-md w-4/7 mx-auto">
      <h2 className="mb-4 text-lg font-semibold">Your Affiliate Link</h2>
      <div className="flex items-center justify-center w-full">
        <input
          type="text"
          readOnly
          value={link}
          className="w-3/5 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-ecomtech focus:ring-0" // Set focus border color and remove ring
          style={{ borderWidth: '1px' }} // Set border width to 1px
        />
        <button
          onClick={handleCopy}
          className="flex items-center px-4 py-2 bg-ecomtech text-white rounded-r-md focus:outline-none hover:bg-ecomtechLame transition duration-150 ease-in-out"
          aria-label="Copy link to clipboard"
        >
          <FaClipboard className="mr-2" />
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      {copied && (
        <p className="mt-2 text-ecomtech text-sm" aria-live="polite">Link copied to clipboard!</p>
      )}
      {error && (
        <p className="mt-2 text-red-500 text-sm" aria-live="polite">Failed to copy link.</p>
      )}
    </div>
  );
};

export default CopyToClipboard;
