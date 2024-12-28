import React from 'react'
import VisionEdge from "../utils/VisionEdge"

const Login = () => {
    return (
        <div>
            <VisionEdge/>

            {/* heading */}
            <div className='font-bold text-3xl'>
                <h2>Sign Up</h2>
            </div>

            {/* inputs for login */}
            <div className='flex'>
                <label>
                <input
                type="text"
                placeholder='Email id'
                className='border'
                />
                </label>
                <label>
                <input 
                type="text"
                placeholder='password'
                className='border'
                />
                </label>
                <button
                className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-lg md:text-xl px-6 py-3 md:px-8 md:py-4'>Login</button>
            </div>

        </div>
    )
}

export default Login
