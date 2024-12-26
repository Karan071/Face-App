import React from "react";
import Success from "../utils/Success";
import VisionEdge from "../utils/VisionEdge";

const CheckIn = () => {
  return (
    <div className="h-screen flex flex-col bg-gray-50 font-poppins">
      <div className="w-full">
        <VisionEdge /> 
      </div>

      <div className="flex-1 flex flex-col items-center mt-11">
        <p className="text-5xl font-thin text-gray-700 mb-4 mt-11">
          Check In Successful
        </p>
        <div className="mt-9">
        <Success />
        </div>
      </div>
    </div>
  );
};

export default CheckIn;
