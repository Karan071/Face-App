// import React from "react";
// import { AiOutlineCheckCircle } from "react-icons/ai";

// const Success = ({ message = "Marked successfully!", onContinue }) => {
//   return (
//     <div className="flex flex-col items-center justify-center p-6 border-2 border-green-500 bg-green-100 rounded-lg shadow-md w-80">
//       <AiOutlineCheckCircle className="text-green-500" size={64} />
//       <h2 className="text-2xl font-semibold text-gray-800 mt-3">Success!</h2>
//       <p className="text-gray-600 text-center mt-2">{message}</p>
//       <button
//         onClick={onContinue}
//         className="mt-4 px-4 py-2 border-2 border-green-500 text-green-500 font-bold rounded hover:bg-green-500 hover:text-white transition duration-300"
//       >
//         CONTINUE
//       </button>
//     </div>
//   );
// };

// export default Success;

import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Success = ({ message = "Marked successfully!", onContinue }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 border-2 border-green-600 bg-green-50 rounded-lg shadow-lg w-96 transition-transform transform hover:scale-105">
      <AiOutlineCheckCircle className="text-green-600" size={72} />
      <h2 className="text-3xl font-bold text-gray-800 mt-4">Success!</h2>
      <p className="text-gray-700 text-center mt-3">{message}</p>
      <button
        onClick={onContinue}
        className="mt-6 px-5 py-2 border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-600 hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
      >
        CONTINUE
      </button>
    </div>
  );
};

export default Success;