import React from 'react';
import {IoEyeSharp} from "react-icons/io5";
import {FaBullseye} from "react-icons/fa";

const MissionAndVision = () => {
    return (
        <section>
            {/* Our mission and vision start here */}
            <div
                className="flex flex-col md:flex-row md:space-x-6 mx-auto my-12">
                <div
                    data-aos="flip-left"
                    className="flex-1 mb-6 md:mb-0 bg-white p-6 rounded-lg shadow-sm text-gray-800 tracking-wide h-auto md:h-96 w-full">
                    <h2 className="flex items-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight sm:leading-tight md:leading-snug lg:leading-snug text-start text-primary ml-4 md:ml-8">
                        <IoEyeSharp className="w-6 h-6 sm:w-10 sm:h-10 md:w-13 md:h-13 lg:h-16 lg:w-16 mr-3"/>Vision
                    </h2>
                    <p className=" text-base sm:text-lg md:text-xl lg:text-xl mt-4 md:mt-6 lg:mt-8 text-start text-gray-800 tracking-wide ml-4 md:ml-8">
                        To become the leading IT institute in Cambodia,
                        empowering individuals with cutting-edge technological
                        skills, fostering innovation, and contributing to
                        the digital transformation of the nation.
                    </p>
                </div>
                <div
                    data-aos="flip-right"
                    className="flex-1 bg-white p-6 rounded-lg shadow-sm text-gray-800 tracking-wide h-auto md:h-96 w-full">
                    <h2 className="flex items-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight sm:leading-tight md:leading-snug lg:leading-snug text-start text-primary ml-4 md:ml-8">
                        <FaBullseye className="w-6 h-6 sm:w-10 sm:h-10 md:w-13 md:h-13 lg:h-16 lg:w-16 mr-3"/> Mission
                    </h2>
                    <ul className="list-disc list-inside text-base sm:text-lg md:text-xl lg:text-xl mt-4 md:mt-6 lg:mt-8 text-start text-gray-800 tracking-wide ml-4 md:ml-8">
                        <li>Provide the latest methodology with high quality training and mentoring</li>
                        <li>Build up the capacity and career of IT experts in Cambodia</li>
                        <li>Consult and connect ISTAD trainees to top IT careers</li>
                    </ul>
                </div>
            </div>
            {/* Our mission and vision end here */}
        </section>
    );
};

export default MissionAndVision;