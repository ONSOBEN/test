
const FooterSkeletonLoader = () => {
    return (
        <footer className="px-3 pt-4 bg-white-80 lg:px-9 border-t-2 text-start sm:text-start md:text-start animate-pulse">
            <div className="container mx-auto grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">

                {/* Logo and description skeleton */}
                <div className="flex flex-col items-center mt-8">
                    <div className="bg-gray-300 rounded-full h-30 w-30 mb-2"></div>
                    <div className="bg-gray-300 h-4 w-48 mb-2"></div>
                    <div className="bg-gray-300 h-4 w-60"></div>
                </div>

                {/* Column 1 skeleton */}
                <div className="flex flex-col gap-2 text-lg text-white-80">
                    <div className="bg-gray-300 h-4 w-24 mb-2 mt-3"></div>
                    <div className="bg-gray-300 h-4 w-32"></div>
                    <div className="bg-gray-300 h-4 w-32"></div>
                    <div className="bg-gray-300 h-4 w-32"></div>
                    <div className="bg-gray-300 h-4 w-32"></div>
                    <div className="bg-gray-300 h-4 w-32"></div>
                    <div className="bg-gray-300 h-4 w-32"></div>
                    <div className="bg-gray-300 h-4 w-32"></div>
                    <div className="bg-gray-300 h-4 w-32"></div>
                </div>

                {/* Column 2 skeleton */}
                <div className="text-white-80 text-lg mt-3">
                    <div className="bg-gray-300 h-4 w-24 mb-3"></div>
                    <div className="bg-gray-300 h-4 w-60 mb-2"></div>
                    <div className="bg-gray-300 h-4 w-60 mb-2"></div>
                    <div className="bg-gray-300 h-4 w-60 mb-2"></div>

                    <div className="mt-3">
                        <div className="bg-gray-300 h-4 w-24 mb-3"></div>
                        <div className="flex flex-col items-start sm:items-start mt-3">
                            <div className="flex items-start">
                                <div className="bg-gray-300 h-4 w-32 mb-2"></div>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-start mb-2">
                                    <div className="bg-gray-300 h-4 w-32"></div>
                                </div>
                                <div className="flex items-start mb-2">
                                    <div className="bg-gray-300 h-4 w-32"></div>
                                </div>
                            </div>
                            <div className="flex space-x-3 text-2xl mt-3 items-start">
                                <div className="bg-gray-300 h-8 w-8 rounded-full"></div>
                                <div className="bg-gray-300 h-8 w-8 rounded-full"></div>
                                <div className="bg-gray-300 h-8 w-8 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Column 3 skeleton */}
                <div className="flex flex-col gap-2 text-lg text-white mt-3">
                    <div className="bg-gray-300 h-4 w-48 mb-2"></div>
                    <div className="bg-gray-300 h-4 w-24 mb-2 mt-3"></div>
                    <div className="flex flex-wrap justify-start sm:justify-start gap-1 mt-3">
                        <div className="bg-gray-300 h-10 w-32 mb-2"></div>
                        <div className="bg-gray-300 h-10 w-32 mb-2"></div>
                    </div>
                    <div className="w-full md:w-1/4 mt-3">
                        <div className="bg-gray-300 h-4 w-24 mb-2"></div>
                        <div className="bg-gray-300 h-32 w-full"></div>
                    </div>
                </div>
            </div>

            {/* Footer bottom skeleton */}
            <div className="text-center pt-5 pb-5 border-t lg:flex-row">
                <div className="bg-gray-300 h-4 w-72 mx-auto"></div>
            </div>
        </footer>
    );
};

export default FooterSkeletonLoader;
