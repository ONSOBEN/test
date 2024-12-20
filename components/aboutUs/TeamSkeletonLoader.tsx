import React from 'react';

const TeamSkeletonLoader = () => {
    return (
        <div className="p-8">
            <div className="text-center mb-8">
                <div className="h-6 bg-gray-200 rounded w-[50px] mx-auto mb-4"></div>
                <div className="h-6 bg-gray-200 rounded w-[100px] mx-auto mb-8"></div>
            </div>
            <div className="flex justify-center mb-16">
                <div className="flex flex-col items-center mx-4">
                    <div className="w-32 h-32 bg-gray-200 rounded-full mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
                <div className="flex flex-col items-center mx-4">
                    <div className="w-32 h-32 bg-gray-200 rounded-full mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
            </div>
            <div className="text-center mb-8">
                <div className="h-6 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
            </div>
            <div className="flex justify-center space-x-6">
                <div className="flex flex-col items-center">
                    <div className="w-32 h-32 bg-gray-200 rounded-full mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-32 h-32 bg-gray-200 rounded-full mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-32 h-32 bg-gray-200 rounded-full mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
            </div>
        </div>
    );
};

export default TeamSkeletonLoader;