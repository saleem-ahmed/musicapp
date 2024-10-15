import React from "react";

const Stepper = ({ steps, currentStep }) => {
  return (
    <div className="w-full flex justify-between mb-6">
      {steps.map((index) => (
        <div key={index} className="flex items-center">
          {index !== steps.length - 1 && (
            <div className="flex-1 h-1 bg-gray-300 mx-2"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export { Stepper };
