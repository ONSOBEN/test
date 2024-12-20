import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Image from 'next/image';

const EventComponentSkeleton = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8" >
            <h5 className="text-xl sm:text-2xl md:text-2xl lg:text-2xl font-semibold text-start text-gray-500">
                <Skeleton height={24} width={200} />
            </h5>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-wide text-primary mb-8">
                <Skeleton height={40} width={500} />
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 khmer-font">
                {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className="bg-white shadow-sm rounded-lg overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2 transition hover:scale-105">
                            <div className="relative w-full h-[187px]">
                                {/* Replace this Skeleton with an image */}
                                <Image src="https://i.pinimg.com/564x/2a/86/a5/2a86a560f0559704310d98fc32bd3d32.jpg"
                                       width={500}
                                       height={500}
                                       alt="Mountain"
                                       className="rounded-t-lg md:rounded-none md:rounded-l-lg w-full h-full object-cover" />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center text-sm text-gray-400 mb-2">
                                    <Skeleton width={80} />
                                    <span className="mx-2"></span>
                                    <Skeleton width={100} />
                                </div>
                                <Skeleton height={60} count={2} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventComponentSkeleton;
