import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const HomeBanner2Skeleton = () => {
    return (
        <SkeletonTheme baseColor="#ffffff" highlightColor="#EEEEEE">
            <div className="my-12 relative w-full bg-white">
                {/* Carousel wrapper */}
                <div className="relative lg:h-[580px] md:h-96 sm:h-68 h-[500px] overflow-hidden rounded-lg">
                    <Skeleton height="100%" width="100%" className="block w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-start text-gray-800 z-20 p-4 md:p-6 lg:p-8 ml-4 sm:ml-6 md:ml-8 lg:ml-12">
                        <div className="flex flex-col items-start space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-2">
                            <Skeleton height={40} width={300} />
                            <Skeleton height={40} width={300} />
                            <Skeleton height={40} width={150} className="mt-4" />
                        </div>
                    </div>
                    {/* Navigation buttons */}
                    <Skeleton circle={true} height={32} width={32} className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 rounded-full focus:outline-none z-20" />
                    <Skeleton circle={true} height={32} width={32} className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 rounded-full focus:outline-none z-20" />
                    {/* Navigation circles */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                        <Skeleton circle={true} height={8} width={8} />
                        <Skeleton circle={true} height={8} width={8} />
                        <Skeleton circle={true} height={8} width={8} />
                    </div>
                </div>
            </div>
        </SkeletonTheme>
    );
};

export default HomeBanner2Skeleton;
