import React from 'react';

const BannerNavbarSkeleton = () => {
    return (
        <section>
            <div id="sticky-banner"
                 className="h-12 fixed top-0 start-0 z-50 flex justify-between w-full p-4 border-b border-gray-200 bg-white">
                <div className="flex items-center mx-auto">
                    <div className="flex items-center text-sm font-normal text-gray-200 space-x-3">
                        <div className="bg-gray-200 rounded-full w-6 h-6"></div>
                        <div className="flex flex-col space-y-1">
                            <div className="w-32 h-4 bg-gray-200 rounded"></div>
                            <div className="w-20 h-4 bg-gray-200 rounded"></div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                </div>
            </div>
        </section>
    );
};

export default BannerNavbarSkeleton;