import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const Enrole = () => {
    const { courseID, courseName,  price, duration, picture } = useLoaderData()

    const notify = (courseName, courseID, duration) => toast.success(`Thank You For Enroling ${courseID} : ${courseName} for ${duration}`);
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
             
            <div className="mb-16 md:mb-0 md:max-w-xl sm:mx-auto md:text-center">
                <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                     {courseID } : {courseName}
                </h2>
                <img
                    className="object-cover w-full h-56 rounded shadow-lg md:h-64 lg:h-80"
                    src={picture}
                    alt=""
                />
                 <h2 className="m-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                    Payment : ${price}
                </h2>
                <div className="flex items-center md:justify-center">
                    <button  onClick={()=>notify(courseName, courseID, duration)} className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide btn btn-secondary transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
                        Confirm Enrolment
                    </button>
                    <Toaster></Toaster>
                </div>
            </div>
        </div>
    );
};

export default Enrole;