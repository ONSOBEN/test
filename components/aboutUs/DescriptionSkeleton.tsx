import React from 'react';

const DescriptionSkeleton = () => {
    return (
        <div>
            {/* Skeleton loader for Description 1 */}
            <div className="container flex items-center flex-wrap justify-center mx-auto animate-pulse">
                <div className="w-full md:w-1/2 p-4">
                    <div className="border-l-4 border-gray-300 sm:ml-8 md:ml-20 pl-8">
                        <div className="bg-gray-300 h-10 sm:h-12 md:h-14 lg:h-14 w-32 mb-4"></div>
                        <div className="bg-gray-300 h-6 sm:h-8 md:h-10 lg:h-10 w-full mb-2"></div>
                        <div className="bg-gray-300 h-6 sm:h-8 md:h-10 lg:h-10 w-full mb-2"></div>
                        <div className="bg-gray-300 h-6 sm:h-8 md:h-10 lg:h-10 w-full mb-2"></div>
                        <div className="bg-gray-300 h-6 sm:h-8 md:h-10 lg:h-10 w-full mb-2"></div>
                        <div className="bg-gray-300 h-6 sm:h-8 md:h-10 lg:h-10 w-full mb-2"></div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 pr-8">
                    <div className="bg-gray-300 mx-auto w-full h-64 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"></div>
                </div>
            </div>

            {/* Skeleton loader for Description 2 */}
            <div className="container flex items-center flex-wrap justify-center mx-auto animate-pulse">
                <div className="w-full md:w-1/2 p-4 pl-8">
                    <div className="bg-gray-300 mx-auto w-full h-64 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"></div>
                </div>
                <div className="w-full md:w-1/2 p-4">
                    <div className="border-l-4 border-gray-300 sm:ml-8 md:ml-20 pl-8">
                        <div className="bg-gray-300 h-10 sm:h-12 md:h-14 lg:h-14 w-32 mb-4"></div>
                        <div className="bg-gray-300 h-6 sm:h-8 md:h-10 lg:h-10 w-full mb-2"></div>
                        <div className="bg-gray-300 h-6 sm:h-8 md:h-10 lg:h-10 w-full mb-2"></div>
                        <div className="bg-gray-300 h-6 sm:h-8 md:h-10 lg:h-10 w-full mb-2"></div>
                    </div>
                </div>
            </div>

            {/* Skeleton loader for Our Mission and Vision */}
            <section className="py-8 animate-pulse">
                <div className="container flex flex-col md:flex-row md:space-x-6 mx-auto">
                    <div className="flex-1 mb-6 md:mb-0 bg-gray-300 p-6 rounded-lg shadow-sm h-auto md:h-96 w-full">

                    </div>
                    <div className="flex-1 bg-gray-300 p-6 rounded-lg shadow-sm h-auto md:h-96 w-full">

                    </div>
                </div>
            </section>

        </div>
    );
};

export default DescriptionSkeleton;