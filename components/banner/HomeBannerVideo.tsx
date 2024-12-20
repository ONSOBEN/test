import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const HomeBannerSkeleton = () => {
    return (
        <SkeletonTheme baseColor="#ffffff" highlightColor="#f0f0f0">
            <div className="relative lg:h-[640px] md:h-96 sm:h-68 h-[500px] overflow-hidden bg-white">
                {/* Video placeholder */}
                <Skeleton height="100%" width="100%" className="absolute block w-full h-full object-cover" />
                {/* Overlay Content */}
                <div className="absolute inset-0 flex items-center justify-start text-gray-800 z-20 p-4 md:p-6 lg:p-8 ml-4 sm:ml-6 md:ml-8 lg:ml-12">
                    <div className="flex flex-col items-start space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-2">
                        <Skeleton height={40} width={350} />
                        <Skeleton height={40} width={350} />
                        <Skeleton height={40} width={350} />

                        <div className="grid grid-rows-2 items-center">
                            <Skeleton height={50} width={200} className="mt-4" />
                            <Skeleton height={40} width={100} className="ml-4 pb-4 sm:mt-6" />
                        </div>
                    </div>
                </div>
            </div>
        </SkeletonTheme>
    );
};

export default HomeBannerSkeleton;
