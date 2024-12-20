"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { menuItems } from './menu';
import { IoMenu } from 'react-icons/io5';
import { IoMdCloseCircle } from 'react-icons/io';
import { IconType } from "react-icons";
import {GiArchiveRegister, GiMaterialsScience,} from "react-icons/gi";
import NavbarSkeleton from "@/components/navbar/NavbarSkeleton";
import {HiAcademicCap} from "react-icons/hi";
import {FaGoogleScholar} from "react-icons/fa6";
import {TbSettingsQuestion} from "react-icons/tb";
import { BiSolidSchool } from "react-icons/bi";
import {MdQuestionAnswer, MdWork} from "react-icons/md";
import {FaCalendarAlt, FaChalkboardTeacher, FaChartBar} from "react-icons/fa";
import {RiTeamFill} from "react-icons/ri";

const iconMap: { [key: string]: IconType } = {
    MdQuestionAnswer,
    FaCalendarAlt,
    FaChartBar,
    MdWork,
    HiAcademicCap,
    FaGoogleScholar,
    GiArchiveRegister,
    TbSettingsQuestion,
    GiMaterialsScience,
    BiSolidSchool,
    FaChalkboardTeacher,
    RiTeamFill,

};

const NavbarComponent = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [activeItem, setActiveItem] = useState<string | null>(null);

    const toggleDropdown = (itemName: string) => {
        setDropdownOpen(!isDropdownOpen);
        setOpenDropdown(isDropdownOpen ? null : itemName);
        setActiveItem(itemName);
    };

    const closeMenus = () => {
        setDropdownOpen(false);
        setMenuOpen(false);
        setOpenDropdown(null);
    };

    const handleItemClick = (itemName: string) => {
        setActiveItem(itemName);
        closeMenus();
    };

    useEffect(() => {
        if (!isMenuOpen) {
            setDropdownOpen(false);
        }
    }, [isMenuOpen]);

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <section>
            {loading ? <NavbarSkeleton /> : (
                <div>
                    <nav className="bg-primary border-gray-200 dark:border-gray-600 dark:bg-gray-900">
                        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-1 md:p-2">
                            <Link href="/" className="flex items-center space-x-2 rtl:space-x-reverse">
                                <Image src="/school-logo/logo-white-version.png" alt="ISTAD LMS Logo" width={120} height={40} />
                            </Link>
                            <button
                                onClick={toggleMenu}
                                type="button"
                                className={`inline-flex items-center p-1 w-8 h-8 justify-center text-sm text-white lg:hidden hover:text-secondary focus:outline-none focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600`}
                                aria-controls="mega-menu-full"
                                aria-expanded={isMenuOpen ? "true" : "false"}
                            >
                                <span className="sr-only">{isMenuOpen ? "Close main menu" : "Open main menu"}</span>
                                {isMenuOpen ? <IoMdCloseCircle className="w-8 h-8"/> : <IoMenu className="w-5 h-5"/>}
                            </button>
                            <div
                                id="mega-menu-full"
                                className={`items-center justify-between font-medium ${isMenuOpen ? "block" : "hidden"} w-full lg:flex lg:w-auto lg:order-1`}
                            >
                                <ul className="text-white flex flex-col p-1 mt-4 border border-gray-100 rounded-lg bg-primary lg:space-x-4 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-primary dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700 text-sm">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            {item.subItems ? (
                                                <button
                                                    onClick={() => toggleDropdown(item.name)}
                                                    className={`flex items-center justify-between w-full py-1 px-2 rounded lg:w-auto hover:bg-blue-700 lg:hover:bg-transparent lg:border-0 lg:p-0 dark:hover:bg-yellow-700 dark:border-blue-700 ${activeItem === item.name ? 'text-yellow-500' : ''}`}
                                                >
                                                    {item.name}
                                                    <svg
                                                        className={`w-2.5 h-2.5 ms-2.5 transition-transform duration-300 ${isDropdownOpen && openDropdown === item.name ? 'rotate-180' : 'rotate-0'}`}
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 10 6"
                                                    >
                                                        <path
                                                            stroke="currentColor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="m1 1 4 4 4-4"
                                                        />
                                                    </svg>
                                                </button>
                                            ) : (
                                                <Link
                                                    href={item.href}
                                                    className={`block py-1 px-2 rounded hover:bg-blue-700 lg:hover:bg-transparent lg:p-0 dark:hover:bg-gray-700 dark:border-gray-700 ${activeItem === item.name ? 'text-yellow-500' : ''}`}
                                                    aria-current={item.current ? "page" : undefined}
                                                    onClick={() => handleItemClick(item.name)}
                                                    target={["SHORT COURSE", "LEARNING PORTAL"].includes(item.name) ? "_blank" : "_self"}
                                                >
                                                    {item.name}
                                                </Link>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        {isDropdownOpen && openDropdown && (
                            <div
                                id="mega-menu-full-dropdown"
                                className="mt-1 border-gray-200 shadow-sm bg-gray-50 lg:bg-white border-y dark:bg-gray-800 dark:border-gray-600"
                            >
                                <div
                                    className="grid max-w-screen-xl px-2 py-3 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 lg:px-4 overflow-y-auto text-sm"
                                    style={{ maxHeight: '400px' }}
                                >
                                    {menuItems.find(item => item.name === openDropdown)?.subItems?.map((subItem, index) => (
                                        <ul key={index}>
                                            <li>
                                                <Link
                                                    href={subItem.href}
                                                    className={`block p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 ${activeItem === subItem.name ? 'text-yellow-500' : ''}`}
                                                    onClick={() => handleItemClick(subItem.name)}
                                                >
                                                    <div className="flex flex-row items-center hover:text-primary">
                                                        <div className="mr-4 text-lg">
                                                            {subItem.icon && iconMap[subItem.icon] && iconMap[subItem.icon]({
                                                                className: "w-6 h-6 text-primary dark:text-primary-500"
                                                            })}
                                                        </div>
                                                        <div>
                                                            <div className="font-semibold">{subItem.name}</div>
                                                            <span
                                                                className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary line-clamp-1 sm:line-clamp-none">
                                                                {subItem.description}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>
                                    ))}
                                </div>
                            </div>
                        )}
                    </nav>
                </div>
            )}
        </section>
    );
};

export default NavbarComponent;
