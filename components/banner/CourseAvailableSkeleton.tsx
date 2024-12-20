import React from 'react';

const CourseAvailableSkeleton = () => {
    return (

        <section className="container mx-auto p-8">
            <div className="animate-pulse">

                <div className="flex items-center mb-8">
                    <div className="h-10 w-48 bg-gray-300 rounded"></div>
                    <div className="h-10 w-32 bg-gray-300 rounded ml-2"></div>
                </div>

                <div className="mb-8">
                    <div className="h-6 w-40 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 w-64 bg-gray-300 rounded"></div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    <div className="h-24 bg-gray-300 rounded-lg"></div>
                    <div className="h-24 bg-gray-300 rounded-lg"></div>
                    <div className="h-24 bg-gray-300 rounded-lg"></div>
                    <div className="h-24 bg-gray-300 rounded-lg"></div>
                    <div className="h-24 bg-gray-300 rounded-lg"></div>
                    <div className="h-24 bg-gray-300 rounded-lg"></div>
                    <div className="h-24 bg-gray-300 rounded-lg"></div>
                    <div className="h-24 bg-gray-300 rounded-lg"></div>
                    <div className="h-24 bg-gray-300 rounded-lg"></div>
                    <div className="h-24 bg-gray-300 rounded-lg"></div>
                    <div className="h-24 bg-gray-300 rounded-lg"></div>
                    <div className="h-24 bg-gray-300 rounded-lg"></div>
                    <div className="h-24 bg-gray-300 rounded-lg"></div>
                    <div className="h-24 bg-gray-300 rounded-lg"></div>
                    <div className="h-24 bg-gray-300 rounded-lg"></div>
                </div>
            </div>
        </section>
    );
};

export default CourseAvailableSkeleton;