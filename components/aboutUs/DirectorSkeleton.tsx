import React from 'react';

const DirectorSkeleton = () => {
    return (
        <div className="container animate-pulse py-12">

            <div className="flex justify-between items-center">
                <div className="h-8 bg-gray-300 rounded w-32 mb-4"></div>
                <div className="flex space-x-2">
                    <div className="h-8 bg-gray-300 rounded w-16"></div>
                    <div className="h-8 bg-gray-300 rounded w-16"></div>
                </div>
            </div>
            <div className="h-6 bg-gray-300 rounded w-full mb-4"></div>
            <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
            <div className="h-6 bg-gray-300 rounded w-2/3 mb-4"></div>
            <div className="flex space-x-4">
                <div className="h-48 bg-gray-300 rounded w-1/4"></div>
                <div className="h-48 bg-gray-300 rounded w-3/4"></div>
            </div>

            <div className="flex justify-between items-center pt-8">
                <div className="h-8 bg-gray-300 rounded w-32 mb-4"></div>
                <div className="flex space-x-2">
                    <div className="h-8 bg-gray-300 rounded w-16"></div>
                    <div className="h-8 bg-gray-300 rounded w-16"></div>
                </div>
            </div>
            <div className="h-6 bg-gray-300 rounded w-full mb-4"></div>
            <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
            <div className="h-6 bg-gray-300 rounded w-2/3 mb-4"></div>
            <div className="flex space-x-4">
                <div className="h-48 bg-gray-300 rounded w-1/4"></div>
                <div className="h-48 bg-gray-300 rounded w-3/4"></div>
            </div>

        </div>
    );
};

export default DirectorSkeleton;