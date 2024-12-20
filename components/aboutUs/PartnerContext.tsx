import React from 'react';

const PartnerContext = () => {
    return (
        <div>
            {/* Skeleton loader for OUR PARTNERS */}


            {/* Skeleton loader for Connect with CSTAD */}
            <div data-aos="fade-up" className="container bg-white text-start tracking-wide mx-auto py-16 animate-pulse">
                <div className="bg-gray-300 h-8 w-64 mb-4"></div>
                <div className="bg-gray-300 h-10 w-full mb-4"></div>
                <div className="grid grid-cols-1 gap-2 text-base tracking-wide mt-8">
                    <div className="flex items-center bg-gray-300 h-6 w-full mb-4"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="gap-2">
                            {Array(6).fill(0).map((_, index) => (
                                <div key={index} className="flex items-center bg-gray-300 h-6 w-full mt-4"></div>
                            ))}
                        </div>
                        <div className="bg-gray-300 h-64 w-full rounded-sm shadow-sm mt-4 md:mt-0"></div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PartnerContext;