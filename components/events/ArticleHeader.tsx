"use client";
import React from 'react';
import { FaUser, FaCalendarAlt, FaEye, FaFolder } from 'react-icons/fa';
import { useGetContentByIdQuery } from "@/redux/features/event-new/eventNew";


const Page = ({ params }: { params: { id: string } }) => {

    console.log("ID", params.id);
    const { data, error, isLoading } = useGetContentByIdQuery(params.id);
    console.log("Data", data );
    if (!params.id) {
        return <p>No ID provided</p>; // Handle case where id is undefined or falsy
    }

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>An error occurred</p>;

    return (
        <div className="flex flex-col items-start">
            <h1 className="text-2xl font-bold text-primary mb-2">
                {data?.data?.title || 'Title not available'}
            </h1>
            <div className="flex flex-col sm:flex-row items-center text-sm text-primary space-y-4 sm:space-y-0 sm:space-x-8">
                <div className="flex items-center space-x-1">
                    <FaUser/>
                    <span>{data?.data?.publishedBy || 'Unknown'}</span>
                </div>
                <div className="flex items-center space-x-1">
                    <FaCalendarAlt/>
                    <span>{new Date(data?.data?.publishedAt).toLocaleDateString() || 'Unknown'}</span>
                </div>
                <div className="flex items-center space-x-1">
                    <FaEye/>
                    <span>{data?.data?.view || 0}</span>
                </div>
                <div className="flex items-center space-x-1">
                    <FaFolder/>
                    <span>{data?.data?.contentType?.type || 'Unknown'}</span>
                </div>
                {data?.data?.tagIds.map((tag: number) => (
                    <div key={tag} className="px-2 py-1 bg-gray-100 rounded-full text-xs sm:text-sm md:text-base">
                        Tag {tag}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page;
