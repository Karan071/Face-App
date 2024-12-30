// import React from "react";
// import bg from "../assets/adminPanel.png";
// import VisionEdge from "../utils/VisionEdge"

// const LoginPage = () => {
//     return (
//         <div
//             className="h-screen w-screen bg-cover bg-center"
//             style={{ backgroundImage: `url(${bg})` }}
//         >
//             <div className="h-full w-1/2 flex items-center justify-start">
                
//                 <form className="max-w-lg w-full p-8 bg-white rounded-md shadow-lg ml-12">


//                     <VisionEdge className="flex justify-center items-center" />
//                     <div className="mb-8">
//                         <h3 className="text-xl font-normal mt-10">Admin Access Portal</h3>
//                     </div>

//                     <div>
//                         <label className="text-black text-[15px] mb-2 block font-thin">Email Address</label>
//                         <div className="relative">
//                             <input
//                                 name="email"
//                                 type="text"
//                                 required
//                                 className="w-full text-sm  text-gray-800 bg-gray-100 px-4 py-3.5 rounded-full outline-blue-600 focus:bg-transparent"
//                                 placeholder="Enter your email"
//                             />
//                         </div>
//                     </div>

//                     <div className="mt-6">
//                         <label className="text-black text-[15px] mb-2 block font-thin">Password</label>
//                         <div className="relative ">
//                             <input
//                                 name="password"
//                                 type="password"
//                                 required
//                                 className="rounded-full w-full text-sm text-gray-800 bg-gray-100 px-4 py-3.5 outline-blue-600 focus:bg-transparent"
//                                 placeholder="Enter your password"
//                             />
//                         </div>
//                     </div>

// {/*                     
                    
//                     <div className="flex flex-wrap items-center gap-4 justify-between mt-6">
//                         <div className="flex items-center">
//                             <input
//                                 name="remember-me"
//                                 type="checkbox"
//                                 className="h-4 w-4 text-blue-600 border-gray-300 rounded-md"
//                             />
//                             <label
//                                 className="ml-3 block text-sm text-gray-800"
//                             >
//                                 Remember me
//                             </label>
//                         </div>
//                         <div className="text-sm">
//                             <a
//                                 href="#"
//                                 className="text-blue-600 font-semibold hover:underline"
//                             >
//                                 Forgot your password?
//                             </a>
//                         </div>
//                     </div> */}


//                     <div className="mt-8">
//                         <button
//                             type="button"
//                             className="w-full py-3 text-sm tracking-wide font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 shadow-lg"
//                         >
//                             Log in
//                         </button>
//                     </div>


//                     <p className="text-sm mt-8 text-gray-800 font-thin">
//                         Don't have an account?{" "}
//                         <a
//                             className="text-blue-600 font-semibold hover:underline"
//                         >
//                             Register here
//                         </a>
//                     </p>
//                 </form>

                
//             </div>
//         </div>
//     );
// };

// export default LoginPage;

import React from "react";
import bg from "../assets/adminPanel.png";
import VisionEdge from "../utils/VisionEdge";

const LoginPage = () => {
    return (
        <div
            className="h-screen w-screen bg-cover bg-center flex flex-col md:flex-row"
            style={{ backgroundImage: `url(${bg})`}}
        >
            
            {/* Form Container */}
            <div className="h-full w-full md:w-1/3 flex items-center justify-center md:justify-start bg-white rounded-sm">
                <form className="max-w-lg w-full p-6 sm:p-8 bg-white rounded-md md:ml-12 mx-4">
                    
                    
                    {/* Title */}
                    <div className="mb-6">
                        <h3 className="text-4xl font-normal text-center md:text-left mt-4">
                            Admin Access Portal
                        </h3>
                    </div>

                    {/* Email Input */}
                    <div>
                        <label className="text-black text-[15px] mb-2 block font-thin">
                            Email Address
                        </label>
                        <div className="relative">
                            <input
                                name="email"
                                type="text"
                                required
                                className="w-full text-sm text-gray-800 bg-gray-100 px-4 py-3.5 rounded-full outline-blue-600 focus:bg-transparent"
                                placeholder="Enter your email"
                            />
                        </div>
                    </div>

                    {/* Password Input */}
                    <div className="mt-6">
                        <label className="text-black text-[15px] mb-2 block font-thin">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                name="password"
                                type="password"
                                required
                                className="rounded-full w-full text-sm text-gray-800 bg-gray-100 px-4 py-3.5 outline-blue-600 focus:bg-transparent"
                                placeholder="Enter your password"
                            />
                        </div>
                    </div>

                    {/* Login Button */}
                    <div className="mt-8">
                        <button
                            type="button"
                            className="w-full py-3 text-sm tracking-wide font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 shadow-lg"
                        >
                            Log in
                        </button>
                    </div>

                    {/* Registration Link */}
                    <p className="text-sm mt-8 text-gray-800 font-thin text-center">
                        Don't have an account?{" "}
                        <a
                            href="#"
                            className="text-blue-600 font-semibold hover:underline"
                        >
                            Register here
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
