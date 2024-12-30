
// // import React from "react";
// // import bg from "../assets/adminPanel.png";

// // const LoginPage = () => {
// //     return (
// //         <div className="max-w-7xl mx-auto h-screen"
// //             style={{ background: ~`url(${bg})` }}
// //         >
// //             <div className="grid md:grid-cols-2 items-center h-full">

// //                 {/* Left Form Section */}
// //                 <form className="max-w-lg p-6 flex flex-col justify-center h-full">
// //                     <div className="mb-12">
// //                         <h3 className="text-gray-800 text-4xl font-extrabold">Admin Access</h3>
// //                         <p className="text-gray-800 text-sm mt-6">
// //                             Immerse yourself in a hassle-free login journey with our intuitively designed
// //                             login form. Effortlessly access your account.
// //                         </p>
// //                     </div>

// //                     {/* Email Input */}
// //                     <div>
// //                         <label className="text-gray-800 text-[15px] mb-2 block">Email Address</label>
// //                         <div className="relative flex items-center">
// //                             <input
// //                                 name="email"
// //                                 type="text"
// //                                 required
// //                                 className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600"
// //                                 placeholder="Enter your email"
// //                             />
// //                         </div>
// //                     </div>

// //                     {/* Password Input */}
// //                     <div className="mt-4">
// //                         <label className="text-gray-800 text-[15px] mb-2 block">Password</label>
// //                         <div className="relative flex items-center">
// //                             <input
// //                                 name="password"
// //                                 type="password"
// //                                 required
// //                                 className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600"
// //                                 placeholder="Enter your password"
// //                             />
// //                             {/* Password Icon */}
// //                         </div>
// //                     </div>

// //                     {/* Remember Me & Forgot Password */}
// //                     <div className="flex flex-wrap items-center gap-4 justify-between mt-4">
// //                         <div className="flex items-center">
// //                             <input
// //                                 id="remember-me"
// //                                 name="remember-me"
// //                                 type="checkbox"
// //                                 className="shrink-0 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-md"
// //                             />
// //                             <label
// //                                 htmlFor="remember-me"
// //                                 className="ml-3 block text-sm text-gray-800"
// //                             >
// //                                 Remember me
// //                             </label>
// //                         </div>
// //                         <div className="text-sm">
// //                             <a
// //                                 href="javascript:void(0);"
// //                                 className="text-blue-600 font-semibold hover:underline"
// //                             >
// //                                 Forgot your password?
// //                             </a>
// //                         </div>
// //                     </div>

// //                     {/* Login Button */}
// //                     <div className="mt-8">
// //                         <button
// //                             type="button"
// //                             className="w-full shadow-xl py-3 px-6 text-sm tracking-wide font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
// //                         >
// //                             Log in
// //                         </button>
// //                     </div>

// //                     {/* Register Link */}
// //                     <p className="text-sm mt-8 text-gray-800">
// //                         Don't have an account?{" "}
// //                         <a
// //                         >
// //                             Register here
// //                         </a>
// //                     </p>
// //                 </form>

// //                 {/* Right Background Section */}
// //                 <div
// //                     className="h-full bg-center"
// //                     style={{
// //                         backgroundImage: `url(${bg})`,
// //                     }}
// //                 ></div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default LoginPage;

// import React from "react";
// import bg from "../assets/adminPanel.png";

// const LoginPage = () => {
//     return (
//         <div
//             className="h-screen w-screen bg-cover bg-center"
//             style={{ backgroundImage: `url(${bg})` }}
//         >
//             <div className="h-full w-1/2 flex items-center justify-start">
//                 {/* Login Form Section */}
//                 <form className="max-w-lg w-full p-8 bg-white rounded-md shadow-lg ml-12">
//                     {/* Header */}
//                     <div className="mb-8">
//                         <h3 className="text-gray-800 text-4xl font-extrabold">Admin Access</h3>
//                         <p className="text-gray-800 text-sm mt-4">
//                             Immerse yourself in a hassle-free login journey with our intuitively designed
//                             login form. Effortlessly access your account.
//                         </p>
//                     </div>

//                     {/* Email Input */}
//                     <div>
//                         <label className="text-gray-800 text-[15px] mb-2 block">Email Address</label>
//                         <div className="relative">
//                             <input
//                                 name="email"
//                                 type="text"
//                                 required
//                                 className="w-full text-sm text-gray-800 bg-gray-100 px-4 py-3.5 rounded-md outline-blue-600 focus:bg-transparent"
//                                 placeholder="Enter your email"
//                             />
//                         </div>
//                     </div>

//                     {/* Password Input */}
//                     <div className="mt-6">
//                         <label className="text-gray-800 text-[15px] mb-2 block">Password</label>
//                         <div className="relative">
//                             <input
//                                 name="password"
//                                 type="password"
//                                 required
//                                 className="w-full text-sm text-gray-800 bg-gray-100 px-4 py-3.5 rounded-md outline-blue-600 focus:bg-transparent"
//                                 placeholder="Enter your password"
//                             />
//                         </div>
//                     </div>

//                     {/* Remember Me & Forgot Password */}
//                     <div className="flex flex-wrap items-center gap-4 justify-between mt-6">
//                         <div className="flex items-center">
//                             <input
//                                 id="remember-me"
//                                 name="remember-me"
//                                 type="checkbox"
//                                 className="h-4 w-4 text-blue-600 border-gray-300 rounded-md"
//                             />
//                             <label
//                                 htmlFor="remember-me"
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
//                     </div>

//                     {/* Login Button */}
//                     <div className="mt-8">
//                         <button
//                             type="button"
//                             className="w-full py-3 text-sm tracking-wide font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-lg"
//                         >
//                             Log in
//                         </button>
//                     </div>

//                     {/* Register Link */}
//                     <p className="text-sm mt-8 text-gray-800">
//                         Don't have an account?{" "}
//                         <a
//                             href="#"
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
import VisionEdge from "../utils/VisionEdge"
import bg from "../assets/adminPanel.png"; // Replace with your actual background image path.

const LoginPage = () => {
    return (
        <div className="h-screen w-screen grid md:grid-cols-2">
            {/* Left Section: Login Form */}
            <div className="flex flex-col justify-center items-start bg-white px-12 rounded-md">
                {/* Logo */}
                <div className="mb-8">
                    <VisionEdge/>
                </div>

                {/* Form */}
                <form className="w-full max-w-sm">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Admin Access Portal</h2>

                    {/* Email Input */}
                    <div className="mb-4">
                        <label className="block text-sm text-gray-600 mb-1" htmlFor="email">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-blue-600"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-6">
                        <label className="block text-sm text-gray-600 mb-1" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-blue-600"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    {/* Sign Up Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white rounded-md py-2 font-semibold hover:bg-blue-700"
                    >
                        Sign Up
                    </button>
                </form>
            </div>

            {/* Right Section: Background/Illustration */}
            <div
                className="hidden md:block bg-cover bg-center"
                style={{
                    backgroundImage: `url(${bg})`,
                }}
            ></div>
        </div>
    );
};

export default LoginPage;
