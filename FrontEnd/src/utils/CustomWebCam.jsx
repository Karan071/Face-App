import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

const CustomWebcam = () => {
  const webcamRef = useRef(null); // Ref for the webcam
  const [capturedImage, setCapturedImage] = useState(null); // State to store captured image

  const capturePhoto = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot(); // Capture the photo
      setCapturedImage(imageSrc); // Store the captured image
    }
  };

  return (
    <div className="container flex flex-col items-center">
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        height={600}
        width={1000}
        className="rounded-lg shadow-md"
      />

      {/* Capture Button */}
      <button
        onClick={capturePhoto}
        type="button"
        className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-6 py-3 transition-all duration-200 ease-in-out"
      >
        Capture Photo
      </button>

      {/* Display Captured Image */}
      {capturedImage && (
        <div className="mt-6">
          <p className="text-gray-600 mb-2 text-center">Captured Photo:</p>
          <img
            src={capturedImage}
            alt="Captured"
            className="rounded-lg shadow-md border border-gray-200"
          />
        </div>
      )}
    </div>
  );
};

export default CustomWebcam;
