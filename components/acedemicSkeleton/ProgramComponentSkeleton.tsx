"use client";
import React from 'react';

const ProgramComponentSkeleton = () => {
    const programs = new Array(6).fill(null); // Placeholder array to create 6 skeleton loaders

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="h-8 bg-gray-300 rounded w-1/4 mb-4 animate-pulse"></div>
            <div className="h-12 bg-gray-300 rounded w-2/3 mb-8 animate-pulse"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {programs.map((_, index) => (
                    <div key={index}
                         className="relative h-full transition-transform duration-300 cursor-pointer hover:scale-105 ">
                        <div className="w-full h-64 bg-gray-300 rounded-lg animate-pulse">

                        </div>
                        <div
                            className="absolute inset-0 rounded-lg flex items-center justify-center">
                            <div className="flex flex-col items-start text-white">
                                <div className="h-6 bg-gray-300 rounded w-3/4 mb-2 animate-pulse"></div>
                                <div className="h-1 bg-gray-300 bg-left w-24 mb-2"></div>
                                <div className="h-4 bg-gray-300 rounded w-1/2 animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProgramComponentSkeleton;
