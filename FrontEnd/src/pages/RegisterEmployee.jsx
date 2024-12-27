import React, { useState, useRef } from "react";
import Webcam from "react-webcam";
import VisionEdge from "../utils/VisionEdge";
import axios from "axios";

const RegisterEmployee = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    contactNo: "",
    designation: "",
    department: "",
    description: "",
  });

  const [errors, setErrors] = useState({});
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const webcamRef = useRef(null);

  const capturePhoto = () => {
    const photoSrc = webcamRef.current.getScreenshot();
    setCapturedPhoto(photoSrc);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.age || isNaN(formData.age))
      newErrors.age = "Age is required and must be a number.";
    if (!formData.gender) newErrors.gender = "Gender is required.";
    if (!formData.contactNo) {
      newErrors.contactNo = "Contact Number is required.";
    } else if (!/^\d{10}$/.test(formData.contactNo)) {
      newErrors.contactNo = "Contact Number must be 10 digits.";
    }
    if (!formData.designation) newErrors.designation = "Designation is required.";
    if (!formData.department) newErrors.department = "Department is required.";
    return newErrors;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");

    // Validate the form
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (!capturedPhoto) {
      alert("Please capture a photo before submitting.");
      return;
    }

    // Convert Base64 photo back to Blob
    const byteString = atob(capturedPhoto.split(",")[1]); 
    const arrayBuffer = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++) {
      arrayBuffer[i] = byteString.charCodeAt(i);
    }
    const photoBlob = new Blob([arrayBuffer], { type: "image/jpeg" });

    // Prepare form data
    const formDataObj = new FormData();
    formDataObj.append("name", formData.name);
    formDataObj.append("age", formData.age);
    formDataObj.append("gender", formData.gender);
    formDataObj.append("contactNo", formData.contactNo);
    formDataObj.append("designation", formData.designation);
    formDataObj.append("department", formData.department);
    formDataObj.append("description", formData.description);
    formDataObj.append("photo", photoBlob, "photo.jpg");

    try {
      const response = await axios.post(`http://localhost:8000/register-employee/`,
        formDataObj,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      alert("Employee registered successfully!");
    } catch (error) {
      console.error("Error during form submission:", error);
      alert("Error during submission. Please try again.");
    }
  };


  return (
    <>
      <VisionEdge />
      <div className="font-poppins bg-gray-50 min-h-screen flex justify-center items-center px-4 sm:px-6 lg:px-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gradient bg-gradient-to-r from-indigo-600 via-blue-500 to-indigo-400 bg-clip-text text-transparent mb-4">
            VisionEdge{" "}
            <span className="font-thin text-gray-500">Employee Check-In</span>
          </h1>
          <p className="text-center text-gray-600 mb-6">
            Register your details and capture your photo for check-in.
          </p>

          {/* Webcam or captured photo */}
          <div className="flex justify-center mb-6">
            {!capturedPhoto ? (
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                className="border-2 rounded-lg w-full sm:w-[320px] sm:h-[240px] object-cover"
              />
            ) : (
              <img
                src={capturedPhoto}
                alt="Captured"
                className="w-50 h-60 rounded-lg object-cover border-2 border-gray-300 shadow-md"
              />
            )}
          </div>

          {/* Form */}
          <form className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full">
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full">
                <input
                  required
                  type="text"
                  name="age"
                  placeholder="Age"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
                {errors.age && (
                  <p className="text-red-500 text-sm mt-1">{errors.age}</p>
                )}
              </div>
              <div className="w-full">
                <input
                  type="text"
                  required
                  name="gender"
                  placeholder="Gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
                {errors.gender && (
                  <p className="text-red-500 text-sm mt-1">{errors.gender}</p>
                )}
              </div>
            </div>

            <div className="w-full">
              <input
                type="text"
                required
                name="contactNo"
                placeholder="Contact Number"
                value={formData.contactNo}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
              {errors.contactNo && (
                <p className="text-red-500 text-sm mt-1">{errors.contactNo}</p>
              )}

              <div className="w-full">
                <select
                  name="department"
                  required
                  value={formData.department}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                >
                  <option value="">Department</option>
                  <option value="Creative">Creative</option>
                  <option value="Business Development Associates">
                    Business Development Associates
                  </option>
                  <option value="Relationship">Relationship</option>
                  <option value="Tech Team">Tech Team</option>
                </select>
                {errors.department && (
                  <p className="text-red-500 text-sm mt-1">{errors.department}</p>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full">
                <input
                  required
                  type="text"
                  name="designation"
                  placeholder="Designation"
                  value={formData.designation}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
                {errors.designation && (
                  <p className="text-red-500 text-sm mt-1">{errors.designation}</p>
                )}
              </div>
            </div>

            <div>
              <input
                type="text"
                name="description"
                placeholder="Additional Information"
                value={formData.description}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            <div className="flex justify-center">
              {!capturedPhoto ? (
                <button
                  onClick={capturePhoto}
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-3 md:px-6 md:py-3.5 mt-2 md:mt-0"
                >
                  Capture Photo
                </button>
              ) : (
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-3 md:px-6 md:py-3.5 mt-2 md:mt-0"
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        </div >
      </div >
    </>
  );
};

export default RegisterEmployee;




