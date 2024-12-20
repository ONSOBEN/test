import React from "react";


const NewFeatureSkeleton = () => {
    return (
        <div className="container animate-pulse">
            <div className="text-start mb-8">
                <div className="h-6 w-1/4 bg-gray-300 rounded ml-6 mb-2"></div>
                <div className="border-l-8 ">
                    <div className="h-10 w-3/4 bg-gray-300 rounded ml-4 mb-2"></div>
                </div>
            </div>

            <div className="mb-8">
                <div className="h-8 w-2/4 bg-gray-300 rounded mb-4"></div>
                <div className="space-y-4">
                    <div className="h-4 w-full bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 w-full bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 w-full bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 w-3/4 bg-gray-300 rounded mb-2"></div>
                </div>
            </div>

            <div>
                <div className="h-8 w-2/4 bg-gray-300 rounded mb-8"></div>
                <div className="space-y-4 mb-4">
                    <div className="h-6 w-1/4 bg-gray-300 rounded"></div>
                    <div className="pl-10">
                        <div className="h-4 w-2/4 bg-gray-300 rounded"></div>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="h-6 w-1/4 bg-gray-300 rounded"></div>
                    <div className="list-disc list-inside pl-10 space-y-2">
                        <p className="h-4 w-full bg-gray-300 rounded"></p>
                        <p className="h-4 w-full bg-gray-300 rounded"></p>
                        <p className="h-4 w-full bg-gray-300 rounded"></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewFeatureSkeleton;
