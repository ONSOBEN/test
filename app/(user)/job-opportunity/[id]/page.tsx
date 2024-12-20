"use client";
import React from 'react';
import { FaUser, FaCalendarAlt, FaEye, FaFolder } from 'react-icons/fa';
import { useGetContentByIdQuery } from "@/redux/features/event-new/eventNew";
import Image from 'next/image';
import Lottie from "lottie-react";
import Loading1 from "@/components/imageJson/Loading1.json";
import Loading2 from "@/components/imageJson/Loading2.json";


const Page = ({ params }: { params: { id: string } }) => {

    console.log("ID", params.id);
    const { data, error, isLoading } = useGetContentByIdQuery(params.id);
    console.log("Data", data );
    if (!params.id) {
        return <p>No ID provided</p>; // Handle case where id is undefined or falsy
    }

    if (isLoading) return <div className='w-full flex-col min-h-full h-screen flex items-center justify-center '>

        <Lottie className={"h-[250px] w-[250px] "} animationData={Loading1}/>
        <Lottie className={"h-[150px] w-[150px] "} animationData={Loading2}/>

    </div>;
    if (error) return <p>An error occurred</p>;

    // Extract the image URL from the HTML content
    const imageUrlMatch = data?.data?.editorContent.match(/<img[^>]+src="([^">]+)"/);
    const imageUrl = imageUrlMatch ? imageUrlMatch[1] : '/default-image.png';
    const contentType = data?.data?.contentType?.type || 'Content not available';

    return (
        <section className="min-h-screen bg-gray-100 khmer-font text-black-34">
            <div
                className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8 bg-white rounded-sm shadow-sm tracking-wide space-y-4">

                {/* Head */}
                <div className="flex flex-col items-start">
                    <h1 className="text-2xl font-bold text-primary mb-2">
                        {data?.data?.title || 'Title not available'}
                    </h1>
                    <div
                        className="flex flex-col sm:flex-row items-center text-sm text-primary space-y-4 sm:space-y-0 sm:space-x-8">
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
                    </div>
                </div>
                {/* End Head */}

                {/* Content Type Header */}
                <h1 className="text-center text-xl sm:text-2xl font-bold my-4 text-primary">
                    {contentType}
                </h1>
                {/* End Content Type Header */}

                {/* Image */}
                <div className="flex justify-center mb-8">
                    <Image
                        src={imageUrl}
                        alt={data?.data?.title}
                        width={881}
                        height={881}
                        className="w-full sm:w-auto h-auto"
                    />
                </div>
                {/* End Image */}

                {/* Title */}
                <h4 className="text-base tracking-wide text-gray-800 line-clamp-3">
                    {data?.data?.title}
                </h4>
                {/* End Title */}

            </div>
        </section>

    );
};
export default Page;
