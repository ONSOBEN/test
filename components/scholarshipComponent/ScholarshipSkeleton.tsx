import React from 'react';

const ScholarshipSkeleton = () => {
    return (
        <div>
            <section>
                <div className="relative lg:h-[600px] md:h-96 sm:h-68 h-[500px] overflow-hidden">
                    {/* Background overlay */}
                    <div className="absolute inset-0 bg-gray-300 opacity-50 z-10"></div>

                    {/* Video skeleton loader */}
                    <div className="relative w-full h-full bg-gray-300 animate-pulse"></div>

                    <div
                        className="absolute inset-0 flex flex-col justify-center items-start text-white z-20 p-4 md:p-6 lg:p-8 ml-4 md:ml-24">
                        <div
                            className="bg-gray-300 h-10 sm:h-12 md:h-14 lg:h-16 w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3 rounded animate-pulse"></div>
                        <div className="flex text-lg items-center justify-center text-white-80 mt-4">
                            <div className="h-3 w-10 bg-gray-300 rounded mr-4 animate-pulse"></div>
                            <div className="bg-gray-300 h-6 w-1/4 rounded animate-pulse"></div>
                            <div
                                className="bg-gray-300 shadow-md border-solid rounded-full ml-2 w-8 h-8 animate-pulse"></div>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div className="min-h-screen">
                    {/* Overview */}
                    <div className="rounded-sm shadow-sm p-6 lg:h-[630px] bg-gray-200 animate-pulse">
                        <div className="bg-gray-300 h-6 w-1/3 rounded animate-pulse mt-4 mx-auto"></div>
                        <div className="bg-gray-300 h-8 md:h-10 lg:h-12 w-2/3 mx-auto rounded animate-pulse mt-4"></div>
                        <table className="w-full max-w-[1345px] mx-auto tracking-wide mt-4">
                            <thead>
                            <tr className="text-2xl border-b text-white-80">
                                <th className="text-start py-2 px-4">
                                    <div className="bg-gray-300 h-6 w-full rounded animate-pulse"></div>
                                </th>
                                <th className="py-2 px-4 text-end">
                                    <div className="bg-gray-300 h-6 w-full rounded animate-pulse"></div>
                                </th>
                            </tr>
                            </thead>
                            <tbody className="text-xl">
                            {Array.from({length: 5}).map((_, index) => (
                                <tr key={index} className="text-white-80 border-b">
                                    <td className="py-4 px-4">
                                        <div className="bg-gray-300 h-6 w-full rounded animate-pulse"></div>
                                    </td>
                                    <td className="py-4 px-4 text-end">
                                        <div className="bg-gray-300 h-6 w-full rounded animate-pulse"></div>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="container bg-gray-200 rounded-sm shadow-sm p-6 mt-6 animate-pulse">
                        <div className="bg-gray-300 h-8 md:h-10 w-1/3 rounded animate-pulse"></div>
                        <div className="bg-gray-300 h-10 md:h-12 lg:h-14 w-2/3 rounded animate-pulse mt-4"></div>
                        <div className="bg-gray-300 h-12 w-full sm:w-auto rounded mt-4 animate-pulse"></div>

                        <nav
                            className="bg-gray-300 py-2 mt-4 flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-8">
                            {Array.from({length: 5}).map((_, index) => (
                                <div key={index} className="bg-gray-300 h-6 w-1/4 rounded animate-pulse"></div>
                            ))}
                        </nav>

                        <div className="relative w-full h-[470px] mt-4 bg-gray-300 animate-pulse"></div>
                    </div>

                    {/* Merit Scholarship Section */}
                    <div className="container bg-gray-200 rounded-sm shadow-md p-6 mt-6 animate-pulse">
                        <div className="bg-gray-300 h-6 w-1/4 rounded animate-pulse"></div>
                        <div className="bg-gray-300 h-10 md:h-12 lg:h-14 w-2/3 rounded animate-pulse mt-4"></div>
                        <div className="bg-gray-300 h-8 w-full rounded mt-4 animate-pulse"></div>
                        <div className="bg-gray-300 h-8 w-1/3 rounded mt-4 animate-pulse"></div>
                        <ul className=" mt-2">
                            {Array.from({length: 6}).map((_, index) => (
                                <li key={index} className="bg-gray-300 h-6 w-full rounded animate-pulse mt-2"></li>
                            ))}
                        </ul>
                        <div className="bg-gray-300 h-8 w-1/3 rounded mt-4 animate-pulse"></div>
                        <ul className=" mt-2">
                            {Array.from({length: 6}).map((_, index) => (
                                <li key={index} className="bg-gray-300 h-6 w-full rounded animate-pulse mt-2"></li>
                            ))}
                        </ul>
                        <div className="bg-gray-300 h-10 w-full sm:w-auto rounded my-6 animate-pulse"></div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ScholarshipSkeleton;