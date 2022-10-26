import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../image/logo.png'
import { FaBars, FaTimes, } from "react-icons/fa";
import { AuthContext } from '../Contexts/AuthProvider';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user } = useContext(AuthContext)
    return (
        <div className="bg-gray-900">
            <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="relative flex items-center justify-between">
                    <div className="flex items-center">
                        <Link
                            to={"/"}
                            aria-label="Company"
                            title="Company"
                            className="inline-flex items-center mr-8"
                        >
                            <img src={logo} alt="" style={{ width: '60px' }} />
                            <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                                Proactive Learner
                            </span>
                        </Link>
                        <ul className="flex items-center hidden space-x-8 lg:flex">
                            <li>
                                <Link
                                    to="/"
                                    aria-label="Home"
                                    title="Home"
                                    className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="courses"
                                    aria-label="courses"
                                    title="courses"
                                    className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                                >
                                    Courses
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="blog"
                                    aria-label="Blog"
                                    title="Blog"
                                    className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                                >
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="faq"
                                    aria-label="FAQ"
                                    title="Product pricing"
                                    className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                                >
                                    FAQ
                                </Link>
                            </li>

                        </ul>
                    </div>
                    <ul className="flex items-center hidden space-x-8 lg:flex">

                        {
                            (user) ?
                                <>
                                    <li>
                                        <div className="avatar online">
                                            <div className="w-10 rounded-full">
                                                <img src={user.photoURL} />
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <button className='btn btn-outline btn-error btn-sm'>
                                            Log Out
                                        </button>
                                    </li>
                                </>
                                :
                                <>
                                    <li>
                            <Link
                                to="signin"
                                aria-label="Sign in"
                                title="Sign in"
                                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                            >
                                Sign in
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="resister"
                                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                aria-label="Sign up"
                                title="Sign up"
                            >
                                Resister
                            </Link>
                        </li>
                                </>
                        }

                        
                        <li>
                            <input type="checkbox" className="toggle" />
                        </li>
                    </ul>
                    <div className="lg:hidden">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <FaBars className='text-white text-3xl'></FaBars>
                        </button>
                        {isMenuOpen && (
                            <div className="absolute top-0 left-0 w-full">
                                <div className="p-5 bg-white border rounded shadow-sm">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <Link
                                                to="/"
                                                aria-label="Company"
                                                title="Company"
                                                className="inline-flex items-center"
                                            ><img src={logo} alt="" style={{ width: '60px' }} />
                                                <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                                                    Proactive Learner
                                                </span>
                                            </Link>
                                        </div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}
                                            >

                                                <FaTimes></FaTimes>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul className="space-y-4">
                                            <li>
                                                <Link
                                                    to="/"
                                                    aria-label="Home"
                                                    title="Home"
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Home
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="courses"
                                                    aria-label="Courses"
                                                    title="Courses"
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Courses
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="blog"
                                                    aria-label="blog"
                                                    title="blog"
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Blog
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="faq"
                                                    aria-label="faq"
                                                    title="faq"
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    FAQ
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="signin"
                                                    aria-label="Sign in"
                                                    title="Sign in"
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Sign in
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="resister"
                                                    aria-label="Sign Up"
                                                    title="Sign Up"
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Resister
                                                </Link>
                                            </li>
                                            <li>
                                                <input type="checkbox" className="toggle" />
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;