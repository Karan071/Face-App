import React from 'react'
import VisionEdge from "../utils/VisionEdge"
import bg from "../assets/adminPanel.png"

const Example = () => {
    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-2 items-center gap-4'>
            <div className='h-screen w-screen bg-cover'
                style={{ backgroundImage: `url(${bg})` }}>
            </div>

            <div>
            <form className="w-full max-w-sm bg-white">
                <div className=''>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Admin Access Portal</h2>

                    {/* Email Input */}
                    <div className="mb-4">
                        <label className="block text-sm text-gray-600 mb-1">
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
                        <label className="block text-sm text-gray-600 mb-1">
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
                </div>
            </form>
            </div>


        </div>
    )
}

export default Example
