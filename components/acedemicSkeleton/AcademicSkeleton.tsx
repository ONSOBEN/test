import React from 'react';

const AcademicSkeleton = () => {
    return (
        <div>
            {/* banner wrapper */}
            <div className="relative lg:h-[700px] md:h-[500px] sm:h-[400px] h-[300px] overflow-hidden top-0">
                {/* Background overlay */}


                {/* Video Placeholder */}
                <div
                    className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] 2xl:h-[100vh] bg-gray-200 animate-pulse">
                    {/* Placeholder for video */}
                    <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
                </div>

                {/* Text Placeholder */}
                <div
                    className="absolute inset-0 flex flex-col justify-center items-center lg:items-start md:items-start sm:items-center text-white z-20 p-4 lg:ml-24 md:ml-16 sm:ml-0">
                    <div className="w-1/2 lg:w-1/4 h-8 bg-gray-300 animate-pulse mb-4"></div>
                    <div className="h-2 w-24 sm:w-32 lg:w-40 bg-gray-300 animate-pulse mb-4"></div>
                    <div className="w-2/4 lg:w-1/2 h-8 bg-gray-300 animate-pulse mt-4"></div>
                    <div className="w-2/4 lg:w-1/2 h-10 bg-gray-300 animate-pulse mt-2"></div>
                </div>
            </div>
            {/* banner end here */}

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-pulse">
                <div className="bg-gray-200 h-8 w-48 mb-4"></div>
                <div className="bg-gray-200 h-10 w-96 mb-8"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Array(3).fill(0).map((_, index) => (
                        <div key={index}
                             className="relative h-full bg-gray-300 rounded-lg transition-transform duration-300 cursor-pointer hover:scale-105"></div>
                    ))}
                </div>
            </div>

            <div className="container pb-9 px-4 mx-auto animate-pulse">
                <div className="bg-gray-200 h-8 w-64 mb-4"></div>
                <div className="bg-gray-200 h-10 w-96 mb-8"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {Array(4).fill(0).map((_, index) => (
                        <div key={index} className="bg-gray-300 p-4 rounded-lg shadow-sm lg:h-[430px]">
                            <div className="bg-gray-200 h-52 w-full rounded-t-lg mb-4"></div>
                            <div className="bg-gray-200 h-6 w-48 mb-2"></div>
                            <div className="bg-gray-200 h-4 w-24 mb-4"></div>
                            <div className="bg-gray-200 h-16 w-full"></div>
                        </div>
                    ))}
                </div>
                <div className="bg-gray-200 h-8 w-64 my-8"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {Array(4).fill(0).map((_, index) => (
                        <div key={index} className="bg-gray-300 p-4 rounded-lg shadow-sm lg:h-[430px]">
                            <div className="bg-gray-200 h-52 w-full rounded-t-lg mb-4"></div>
                            <div className="bg-gray-200 h-6 w-48 mb-2"></div>
                            <div className="bg-gray-200 h-4 w-24 mb-4"></div>
                            <div className="bg-gray-200 h-16 w-full"></div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default AcademicSkeleton;