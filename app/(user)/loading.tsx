'use client'
import React from "react";
import Lottie from "lottie-react";
import Loading1 from "@/components/imageJson/Loading1.json";
import Loading2 from "@/components/imageJson/Loading2.json"


export default function Loading() {

    return (
        <div className='w-full flex-col min-h-full h-screen flex items-center justify-center '>

            <Lottie className={"h-[250px] w-[250px] "} animationData={Loading1}/>
            <Lottie className={"h-[150px] w-[150px] "} animationData={Loading2}/>

        </div>
    );
}
