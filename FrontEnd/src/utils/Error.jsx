// import React from "react";
// import { AiOutlineCloseCircle } from "react-icons/ai";

// const Error = ({ message = "Not Marked, try again!", onRetry }) => {
//   return (
//     <div className="flex flex-col items-center justify-center p-6 border-2 border-red-500 bg-red-100 rounded-lg shadow-md w-80">
//       <AiOutlineCloseCircle className="text-red-500" size={64} />
//       <h2 className="text-2xl font-semibold text-gray-800 mt-3">Error!</h2>
//       <p className="text-gray-600 text-center mt-2">{message}</p>
//       <button
//         onClick={onRetry}
//         className="mt-4 px-4 py-2 border-2 border-red-500 text-red-500 font-bold rounded hover:bg-red-500 hover:text-white transition duration-300"
//       >
//         TRY AGAIN
//       </button>
//     </div>
//   );
// };

// export default Error;

import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Error = ({ message = "Not Marked, try again!", onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 border-2 border-red-600 bg-red-50 rounded-lg shadow-lg w-96 transition-transform transform hover:scale-105">
      <AiOutlineCloseCircle className="text-red-600" size={72} />
      <h2 className="text-3xl font-bold text-gray-800 mt-4">Error!</h2>
      <p className="text-gray-700 text-center mt-3">{message}</p>
      <button
        onClick={onRetry}
        className="mt-6 px-5 py-2 border-2 border-red-600 text-red-600 font-semibold rounded-lg hover:bg-red-600 hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
      >
        TRY AGAIN
      </button>
    </div>
  );
};

export default Error;