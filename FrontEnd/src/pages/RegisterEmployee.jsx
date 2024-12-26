// import React, { useState, useRef } from "react";
// import Webcam from "react-webcam";
// import VisionEdge from "../utils/VisionEdge";

// const RegisterVisitor = () => {
//   const [formData, setFormData] = useState({
//     employeeId: "",
//     name: "",
//     gender: "",
//     contactNo: "",
//     designation: "",
//     department: "",
//     description: "",
//   });
//   const [capturedPhoto, setCapturedPhoto] = useState(null);
//   const webcamRef = useRef(null);

//   const capturePhoto = () => {
//     const photoSrc = webcamRef.current.getScreenshot();
//     setCapturedPhoto(photoSrc);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async () => {
//     const photoBlob = await fetch(capturedPhoto).then((res) => res.blob());
//     const formDataObj = new FormData();
//     formDataObj.append("name", formData.name);
//     formDataObj.append("purpose", formData.purpose);
//     formDataObj.append("photo", photoBlob, "photo.jpg");

//     // const response = await fetch("http://127.0.0.1:8000/register/", {
//     //   method: "POST",
//     //   body: formDataObj,
//     // });

//     // const result = await response.json();
//     // console.log(result);
//     // alert(result.message);
//   };

//   return (
//     <>
//       <VisionEdge />
//       <div className="font-poppins bg-gray-50 min-h-screen flex justify-center items-center px-4 sm:px-6 lg:px-8">
//         <div>
//           <h1 className="text-3xl md:text-4xl font-bold text-center text-gradient bg-gradient-to-r from-indigo-600 via-blue-500 to-indigo-400 bg-clip-text text-transparent mb-4">
//             VisionEdge{" "}
//             <span className="font-thin text-gray-500">Employee Check-In</span>
//           </h1>
//           <p className="text-center text-gray-600 mb-6">
//             Register your details and capture your photo for check-in.
//           </p>

//           {/* Webcam or captured photo */}
//           <div className="flex justify-center mb-6">
//             {!capturedPhoto ? (
//               <Webcam
//                 audio={false}
//                 ref={webcamRef}
//                 screenshotFormat="image/jpeg"
//                 className="border-2 rounded-lg w-full sm:w-[320px] sm:h-[240px] object-cover"
//               />
//             ) : (
//               <img
//                 src={capturedPhoto}
//                 alt="Captured"
//                 required
//                 className="w-50 h-60 rounded-lg object-cover border-2 border-gray-300 shadow-md"
//               />
//             )}
//           </div>

//           {/* Form */}
//           <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>

//             <div className="flex flex-col sm:flex-row gap-4">
//               <input
//                 required
//                 type="text"
//                 name="employeeId"
//                 placeholder="Employee ID"
//                 value={formData.employeeId}
//                 onChange={handleChange}
//               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"

//               />

//               <input
//                 required
//                 type="text"
//                 name="name"
//                 placeholder="Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//               />
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4">
//               <input
//                 required
//                 type="text"
//                 name="designation"
//                 placeholder="Designation"
//                 value={formData.designation}
//                 onChange={handleChange}
//                 className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//               />

//               <input
//                 type="text"
//                 required
//                 name="gender"
//                 placeholder="Gender"
//                 value={formData.gender}
//                 onChange={handleChange}
//                 className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//               />
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4">
//               <input
//                 type="text"
//                 required
//                 name="contactNo"
//                 placeholder="Contact Number"
//                 value={formData.contactNo}
//                 onChange={handleChange}
//                 className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//               />
//             </div>

//             <select
//               name="department"
//               required
//               value={formData.department}
//               onChange={handleChange}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//             >
//               <option value="">Department</option>
//               <option value="Creative">Creative</option>
//               <option value="Business Development Associates">Business Development Associates</option>
//               <option value="Relationship">Relationship</option>
//               <option value="Tech Team">Tech Team</option>
//             </select>

//             <input
//               type="text"
//               name="description"
//               placeholder="Additional Information"
//               value={formData.description}
//               onChange={handleChange}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//             />

//             {/* Buttons */}
//             <div className="flex justify-center">
//               {!capturedPhoto ? (
//                 <button
//                   onClick={capturePhoto}
//                   type="button"
//                   className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-3 md:px-6 md:py-3.5 mt-2 md:mt-0"
//                 >
//                   Capture Photo
//                 </button>
//               ) : (
//                 <button
//                   onClick={handleSubmit}
//                   type="button"
//                   className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-3 md:px-6 md:py-3.5 mt-2 md:mt-0"
//                 >
//                   Submit
//                 </button>
//               )}
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default RegisterVisitor;

import React, { useState, useRef } from "react";
import Webcam from "react-webcam";
import VisionEdge from "../utils/VisionEdge";

const RegisterVisitor = () => {
  const [formData, setFormData] = useState({
    employeeId: "",
    name: "",
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
    setErrors({ ...errors, [name]: "" }); // Clear errors on input change
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.employeeId) newErrors.employeeId = "Employee ID is required.";
    if (!formData.name) newErrors.name = "Name is required.";
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

  const handleSubmit = async () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (!capturedPhoto) {
      alert("Please capture a photo before submitting.");
      return;
    }

    const photoBlob = await fetch(capturedPhoto).then((res) => res.blob());
    const formDataObj = new FormData();
    formDataObj.append("name", formData.name);
    formDataObj.append("purpose", formData.purpose);
    formDataObj.append("photo", photoBlob, "photo.jpg");

    // Submit data (mocked for now)
    alert("Form submitted successfully!");
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
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full">
                <input
                  required
                  type="text"
                  name="employeeId"
                  placeholder="Employee ID"
                  value={formData.employeeId}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
                {errors.employeeId && (
                  <p className="text-red-500 text-sm mt-1">{errors.employeeId}</p>
                )}
              </div>
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
            </div>

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

            <input
              type="text"
              name="description"
              placeholder="Additional Information"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />

            {/* Buttons */}
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
                  onClick={handleSubmit}
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-3 md:px-6 md:py-3.5 mt-2 md:mt-0"
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterVisitor;
