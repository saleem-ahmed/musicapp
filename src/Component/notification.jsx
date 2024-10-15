import React, { useEffect, useState } from "react";

const Notification = ({ message, show, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <>
      {show && (
        <div className="fixed bottom-4 right-4 bg-green-100 border-t-4 border-green-500 text-green-700 px-8 py-3 rounded shadow-lg z-50">
          <div className="flex items-center">
            <svg
              className="h-6 w-6 text-green-500 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m0 0a9 9 0 11-5.2 8.48"
              />
            </svg>
            <span>{message}</span>
            <button
              className="ml-auto text-green-500 hover:text-green-700"
              onClick={onClose}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Notification;
