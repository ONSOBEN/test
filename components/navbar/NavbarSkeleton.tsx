import { useState } from 'react';

const HeaderSkeletonLoader = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="bg-white-80 sticky top-0 z-50 animate-pulse">
            <nav className="border-gray-200">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    {/* Logo and name skeleton */}
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <div className="bg-gray-300 rounded-full h-12 w-12"></div>
                        <div className="bg-gray-300 h-8 w-32"></div>
                    </div>

                    <button
                        onClick={toggleMenu}
                        className="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:bg-white-80 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        aria-controls="navbar-multi-level"
                        aria-expanded={isOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>

                    {/* Menu skeleton */}
                    <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-multi-level">
                        <ul className="bg-white-80 flex flex-col font-medium p-4 md:p-0 mt-4 text-white border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <li key={index} className="bg-gray-300 h-4 w-24 mb-2 md:mb-0 rounded"></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default HeaderSkeletonLoader;
