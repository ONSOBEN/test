import React from 'react';
import Image from 'next/image';

const EventSkeleton = () => {
    return (
        <div className="max-w-6xl mx-auto py-10">
            <h2 className="py-6 mb-4 h-4 bg-gray-200 rounded w-5/6"></h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {Array(8).fill(null).map((_, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 shadow-md animate-pulse">
                        <div className="h-48 bg-gray-300 rounded mb-4 relative">
                            <Image
                                src="https://lms-api.istad.co/api/v1/medias/view/3f77af06-aad6-4599-8005-ba02e9f9553c.png"
                                alt="Loading"
                                layout="fill"
                                className="object-cover rounded"
                            />
                        </div>
                        <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                        <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
                        <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default EventSkeleton;