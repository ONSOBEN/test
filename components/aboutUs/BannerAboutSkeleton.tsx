import React from 'react';

const BannerAboutSkeleton = () => {
    return (
        <div>
            {/* Skeleton loader wrapper */}
            <div className="relative lg:h-[600px] md:h-96 sm:h-68 h-[500px] overflow-hidden bg-gray-300 animate-pulse">
                {/* Background overlay */}
                <div className="absolute inset-0 bg-gray-300 z-10"></div>

                {/* Placeholder for video */}
                <div className="relative w-full h-full">
                    <div className="absolute inset-0 w-full h-full bg-gray-300"></div>
                </div>

                <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-20 p-4">
                    <div data-aos-duration="800" data-aos-delay="500" data-aos-offset="200" data-aos-easing="ease-in-out"
                         data-aos="fade-down"
                         className="bg-gray-400 w-3/4 lg:w-1/2 h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28 mb-4 rounded">
                    </div>
                    <div data-aos-duration="800" data-aos-delay="500" data-aos-offset="200"
                         data-aos-easing="ease-in-out" data-aos="fade-down"
                         className="h-2 w-20 sm:w-24 md:w-28 lg:w-32 xl:w-40 bg-gray-400 mx-auto mb-4 rounded"></div>
                    <div data-aos-duration="1000" data-aos-delay="500" data-aos-offset="200" data-aos="fade-up"
                         className="bg-gray-400 w-5/6 lg:w-2/3 h-6 sm:h-8 md:h-10 lg:h-12 xl:h-14 rounded mt-4">
                    </div>
                </div>
            </div>
            {/* Skeleton loader end here */}

        </div>
    );
};

export default BannerAboutSkeleton;