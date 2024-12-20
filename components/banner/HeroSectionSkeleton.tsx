'use client';
import React from 'react';

const GallerySkeleton = () => {
    return (
        <section className="container pb-8 my-16">
            <div>
                <div className="flex flex-row items-start border-l-8 border-gray-300">
                    <div className="animate-pulse">
                        <div className="h-8 w-48 bg-gray-300 rounded ml-2 sm:ml-4"></div>
                    </div>
                </div>
                <div className="py-8 animate-pulse">
                    <div className="h-6 w-32 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 w-full bg-gray-300 rounded"></div>
                </div>
                <div className="container grid grid-cols-2 md:grid-cols-4 gap-4 my-12">
                    {[...Array(4)].map((_, colIndex) => (
                        <div className="grid gap-4" key={colIndex}>
                            {[...Array(4)].map((_, index) => (
                                <div key={index} className="animate-pulse">
                                    <div className="h-40 bg-gray-300 rounded-lg"></div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default GallerySkeleton;
