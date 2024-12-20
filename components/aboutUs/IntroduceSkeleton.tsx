import React from 'react';

const IntroduceSkeleton = () => {
    return (
        <div>
            {/* Skeleton loader for Introduction */}
            <div className="container mx-auto pt-8 animate-pulse">
                <div className="bg-gray-300 h-8 w-32 mb-4"></div>
                <div>
                    <div className="bg-gray-300 h-10 sm:h-12 md:h-14 lg:h-14 xl:h-16 w-full mb-4"></div>
                    <div className="bg-gray-300 h-10 sm:h-12 md:h-14 lg:h-14 xl:h-16 w-full mb-4"></div>
                    <div className="bg-gray-300 h-10 sm:h-12 md:h-14 lg:h-14 xl:h-16 w-5/6"></div>
                </div>
            </div>
            {/* Skeleton loader for Introduction end here */}
        </div>
    );
};

export default IntroduceSkeleton;