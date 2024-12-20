import React from 'react';
const HomeBannerSkeleton = () => {
    return (
        <div className="relative lg:h-[640px] md:h-96 sm:h-68 h-[500px] overflow-hidden bg-gray-200 animate-pulse">
            {/* Background overlay */}
            <div className="absolute inset-0 bg-black opacity-50 z-10">

            </div>
            {/* Video placeholder */}
            <div className="relative w-full h-full">
                <div className="absolute block w-full h-full object-cover bg-gray-300"></div>


            </div>

            {/* Overlay Content */}
            <div
                className="absolute inset-0 flex items-center justify-start text-white z-20 p-4 md:p-6 lg:p-8 ml-4 sm:ml-6 md:ml-8 lg:ml-12">
                <div className="flex flex-col items-start space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-2">
                    <div className="bg-gray-300 h-8 sm:h-10 md:h-12 lg:h-14 w-3/4 rounded"></div>
                    <div className="bg-gray-300 h-8 sm:h-10 md:h-12 lg:h-14 w-1/2 rounded"></div>
                    <div className="bg-gray-300 h-8 sm:h-10 md:h-12 lg:h-14 w-2/3 rounded"></div>
                    <div className="grid grid-rows-2 items-center">
                        <div className="flex items-center space-x-4 mt-4">
                            <div className="bg-gray-300 h-10 sm:h-12 md:h-14 lg:h-14 w-48 sm:w-56 rounded-lg"></div>
                            <div className="bg-gray-300 h-10 sm:h-12 md:h-14 lg:h-14 w-10 sm:w-12 rounded-full"></div>
                        </div>
                        <div className="ml-4 mt-4 sm:mt-6">
                            <div className="bg-gray-300 h-8 sm:h-10 md:h-12 lg:h-14 w-24 sm:w-28 rounded-lg"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBannerSkeleton;
