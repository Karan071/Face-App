import React from 'react';
import HoverButton from '../utils/Button';
import VisionEdge from '../utils/VisionEdge';
import asset from '../assets/Robot.png';

const MainPage = () => {
    return (
        <div className="font-poppins">
            <VisionEdge />

            <div className="text-center">
                <p className="text-4xl font-semibold text-gray-700 font-poppins mt-20 bg-gradient-to-r from-indigo-600 via-blue-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                    VisionEdge <span className='font-thin text-gray-700 '>Streamlined and Intelligent Check-In Solution</span>
                </p>
            </div>


            <div className="flex flex-col md:flex-row justify-center items-center md:items-between md:space-x-16 space-y-8 md:space-y-0 p-6">
                <div className="flex flex-col items-center space-y-11">
                    <HoverButton
                        text="Check-In"
                        buttonColor="bg-green-200"
                        hoverColor={["bg-green-900", "bg-green-700", "bg-green-600"]}
                        textColor="text-white"
                        width="w-80"
                        height="h-20"
                    />
                    <HoverButton
                        text="Check-Out"
                        buttonColor="bg-red-200"
                        hoverColor={["bg-red-900", "bg-red-700", "bg-red-600"]}
                        textColor="text-white"
                        width="w-80"
                        height="h-20"
                    />
                </div>

                {/* Right Section (Image) */}
                <div className="flex justify-center items-center">
                    <img
                        src={asset}
                        alt="MainPage"
                        className="max-w-full h-auto md:w-[500px] rounded-sm shadow-sm"
                    />
                </div>
            </div>
        </div>
    );
};

export default MainPage;