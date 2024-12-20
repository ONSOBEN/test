import React from 'react';

const AdmissionSkeleton = () => {
    return (
        <div>
            <section className={"pb-12 "}>
                {/* banner start here */}
                <div className="relative h-[500px] bg-white-80 sm:h-68 md:h-96 lg:h-[600px] overflow-hidden">
                    {/* Background overlay */}
                    <div className="absolute inset-0  opacity-50 z-10"></div>

                    {/* Video skeleton loader */}
                    <div className="relative w-full h-full bg-gray-200 animate-pulse">
                        {/* Placeholder for video */}
                    </div>

                    <div
                        className="absolute inset-0 flex flex-col justify-center items-start text-white z-20 p-4 md:p-6 lg:p-8 ml-4 sm:ml-8 md:ml-12 lg:ml-16">
                        <div data-aos-duration="800" data-aos-delay="500" data-aos-offset="200" data-aos="fade-down"
                             className="bg-gray-300 h-10 sm:h-12 md:h-14 lg:h-16 w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3 rounded animate-pulse"></div>
                        <div data-aos-duration="1000" data-aos-delay="500" data-aos-offset="200" data-aos="fade-up"
                             className="flex flex-row items-center justify-center text-white-80 mt-4">
                            <div
                                className="h-1 w-12 sm:h-2 sm:w-16 md:h-3 md:w-20 bg-gray-300 rounded mr-2 sm:mr-4 animate-pulse"></div>
                            <div
                                className="bg-gray-300 h-4 sm:h-5 md:h-6 w-1/2 sm:w-1/3 md:w-1/4 rounded animate-pulse"></div>
                            <div
                                className="bg-gray-300 shadow-md border-solid rounded-full ml-2 w-6 h-6 sm:w-8 sm:h-8 animate-pulse"></div>
                        </div>
                        <div data-aos-duration="1000" data-aos-delay="500" data-aos-offset="200" data-aos="fade-up"
                             className="mt-4 sm:mt-6 w-1/3 sm:w-1/4 md:w-1/5 h-8 sm:h-10 bg-gray-300 rounded animate-pulse"></div>
                    </div>
                </div>
                {/* banner end here */}

                <div className={"space-y-9 pt-8"}>
                    <section data-aos-duration="1000" data-aos-delay="500" data-aos-offset="200" data-aos="fade-up"
                             className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        <div className="bg-gray-300 h-8 sm:h-10 w-1/3 sm:w-1/4 rounded animate-pulse mb-2"></div>
                        <div
                            className="bg-gray-300 h-10 sm:h-12 md:h-14 lg:h-16 w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3 rounded animate-pulse mb-8"></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-300 lg:grid-cols-3 gap-6 pt-4">
                            {Array.from({length: 6}).map((_, index) => (
                                <div key={index}
                                     className="bg-gray-300 relative h-full transition-transform transform ">
                                    <div className="w-full h-60 bg-gray-300 rounded-lg animate-pulse"></div>
                                    <div
                                        className="absolute inset-0 bg-gray-100 bg-opacity-50 rounded-lg flex items-center justify-center">
                                        <div className="flex flex-col items-start text-white p-4 sm:p-6 lg:p-8">
                                            <div
                                                className="bg-gray-300 h-6 sm:h-8 md:h-10 w-1/2 rounded animate-pulse"></div>
                                            <div
                                                className="h-1 w-12 sm:w-16 md:w-24 bg-gray-300 rounded my-2 animate-pulse"></div>
                                            <div
                                                className="bg-gray-300 h-4 sm:h-5 md:h-6 w-1/2 rounded animate-pulse"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="container bg-gray-300 p-4 sm:p-8 md:p-12 lg:p-16 mb-4 rounded-lg">
                        <div className="grid place-content-center">
                            <div
                                className="bg-gray-300 h-8 sm:h-10 w-1/2 sm:w-1/3 md:w-1/4 rounded animate-pulse mb-4"></div>
                            <div
                                className="bg-gray-300 h-4 sm:h-5 md:h-6 w-2/3 sm:w-1/2 md:w-1/3 rounded animate-pulse mb-4 ml-4 sm:ml-8 py-4"></div>
                            <div
                                className="bg-gray-300 flex flex-col sm:flex-row items-start justify-start space-y-4 sm:space-y-0 sm:space-x-8">
                                <div
                                    className="h-12 sm:h-14 w-full sm:w-auto bg-gray-300 rounded-lg animate-pulse"></div>
                                <div
                                    className="h-12 sm:h-14 w-full sm:w-auto bg-gray-300 rounded-lg animate-pulse"></div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>

        </div>
    );
};

export default AdmissionSkeleton;