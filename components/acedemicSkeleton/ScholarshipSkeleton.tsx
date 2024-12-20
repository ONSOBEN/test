import React from 'react';

const ScholarshipSkeleton = () => {
    return (
        <section>
            {/* banner program detail start here */}
            <div className="relative lg:h-[580px] md:h-96 sm:h-68 h-[500px] overflow-hidden ">
                {/* Background overlay */}
                <div className="absolute inset-0 bg-gray-500 opacity-50 z-10"></div>

                {/* Video instead of Image */}
                <div className="relative w-full h-full">
                    {/* Skeleton loader for video */}
                    <div className="animate-pulse absolute inset-0 bg-gray-300"></div>
                </div>

                <div className="absolute inset-0 flex flex-col justify-center items-start text-white z-20 p-4 md:p-6 lg:p-8 sm:ml-8 md:ml-16 lg:ml-24 ">
                    {/* Skeleton loader for heading */}
                    <div className="animate-pulse bg-gray-300 h-12 w-96 mb-4"></div>
                    {/* Skeleton loader for subheading */}
                    <div className="animate-pulse bg-gray-300 h-8 w-80 mb-2"></div>
                    {/* Skeleton loader for button */}
                    <div className="animate-pulse flex items-center mt-4">
                        <div className="h-3 w-10 bg-gray-300 mr-4"></div>
                        <div className="h-8 w-24 bg-gray-300 rounded-full"></div>
                        <div className="bg-gray-300 shadow-md border-solid rounded-full ml-2 w-8 h-8"></div>
                    </div>
                </div>
            </div>
            {/* banner program detail end here */}

            {/* description 1 start here */}
            <div className="container tracking-wide py-12 sm:py-8">
                {/* Skeleton loader for section title */}
                <div className="flex items-center mb-4 sm:mb-2">
                    <div className="bg-gray-300 h-6 w-20 mr-2"></div>
                    <div className="bg-gray-300 h-6 w-6"></div>
                    <div className="px-2 bg-gray-300 h-6 w-6"></div>
                    <div className="bg-gray-300 h-6 w-20 ml-auto"></div>
                </div>
                {/* Skeleton loader for main title */}
                <div className="bg-gray-300 h-12 w-96 mb-6"></div>
                {/* Skeleton loader for text content */}
                <div className="bg-gray-300 h-96 w-full mb-8"></div>
            </div>
            {/* description 1 end here */}

            {/* description 2 start here */}
            <div className="tracking-wide bg-gray-200 py-12 sm:py-8">
                <div className="container">
                    {/* Skeleton loader for section title */}
                    <div className="bg-gray-300 h-6 w-40 mb-2"></div>
                    {/* Skeleton loader for main title */}
                    <div className="bg-gray-300 h-12 w-96 mb-6"></div>
                    {/* Skeleton loader for list items */}
                    <div className="bg-gray-300 h-48 w-full space-y-4"></div>
                </div>
            </div>
            {/* description 2 end here */}

            {/* features description 3 start here */}
            <div className="flex items-center justify-center py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 ">
                    <div className="flex flex-col justify-center">
                        {/* Skeleton loader for section title */}
                        <div className="bg-gray-300 h-6 w-32 mb-2"></div>
                        {/* Skeleton loader for main title */}
                        <div className="bg-gray-300 h-12 w-80 mb-6"></div>
                        {/* Skeleton loader for list items */}
                        <div className="bg-gray-300 h-48 w-full space-y-4"></div>
                    </div>
                    <div className="flex justify-center items-center rounded-md">
                        {/* Skeleton loader for iframe */}
                        <div className="bg-gray-300 h-80 w-full"></div>
                    </div>
                </div>
            </div>
            {/* features description 3 end here */}

            {/* evaluation 1 start here */}
            <div className="rounded-sm shadow-sm p-6 bg-gray-200">
                <div className="container mx-auto max-w-5xl">
                    {/* Skeleton loader for section title */}
                    <div className="bg-gray-300 h-6 w-40 mb-4"></div>
                    {/* Skeleton loader for main title */}
                    <div className="bg-gray-300 h-12 w-96 mb-8"></div>
                    {/* Skeleton loader for table */}
                    <div className="bg-gray-300 h-96 w-full"></div>
                </div>
            </div>
            {/* evaluation 1 end here */}

            {/* CURRICULUM start here */}
            <div className="rounded-sm shadow-sm bg-white-80">
                {/* Skeleton loader for section title */}
                <div className="bg-gray-300 h-6 w-40 mt-4 mb-8 ml-4"></div>
                {/* Skeleton loader for curriculum sections */}
                {[1, 2, 3, 4].map((section) => (
                    <div key={section}>
                        {/* Skeleton loader for section title */}
                        <div className="bg-gray-300 h-6 w-40 mb-2 ml-4"></div>
                        {/* Skeleton loader for tables */}
                        <div className="container w-full max-w-[1245px] grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto mt-4 px-4">
                            <table className="w-full tracking-wide">
                                <thead>
                                <tr className="text-[24px] text-primary py-4">
                                    <th className="text-start text-white-80 py-2">SEMESTER 1</th>
                                </tr>
                                </thead>
                                <tbody className="text-[20px]">
                                {[1, 2, 3, 4].map((item) => (
                                    <tr key={item} className="text-black-34 border-b">
                                        <td className="py-4 bg-gray-300"></td>
                                        <td className="py-4 text-end bg-gray-300"></td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                            <table className="w-full tracking-wide">
                                <thead>
                                <tr className="text-[24px] text-primary py-4">
                                    <th className="text-start text-white-80 py-2">SEMESTER 2</th>
                                </tr>
                                </thead>
                                <tbody className="text-[20px]">
                                {[1, 2, 3, 4].map((item) => (
                                    <tr key={item} className="text-black-34 border-b">
                                        <td className="py-4 bg-gray-300"></td>
                                        <td className="py-4 text-end bg-gray-300"></td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ))}
            </div>
            {/* CURRICULUM end here */}
        </section>

    );
};

export default ScholarshipSkeleton;