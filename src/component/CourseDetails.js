import React from 'react';
import { FaArchive, FaBook, FaClock, FaFeather, FaHardHat, FaSignal, FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import PDFFile from './PDFFile';


const CourseDetails = () => {
    const { id, chapter, courseID, courseName, courseSummery, learning_outcome, price, timeCommitment, outcome, prerequisites, creadit, difficulty, duration, picture, ratting } = useLoaderData()


    return (
        <div id='course-sum' className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="mx-auto sm:text-center lg:max-w-2xl">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">

                        {courseID}: {courseName} 
                        <span className='m-4 py-2'><PDFFile pageID={'course-sum'} pageName={courseName}></PDFFile></span>
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                        {outcome}
                    </p>
                </div>
                <div className="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
                    <img
                        className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
                        src={picture}
                        alt=""
                    />
                </div>

                <h2 className="max-w-lg mb-6 font-sans text-2xl font-bold leading-none tracking-tight text-gray-900 sm:text-2xl md:mx-auto">Course Summery</h2>
                <p className="max-w-xl mb-4 text-base text-justify text-gray-700 sm:mx-auto">
                    {courseSummery}
                </p>

            </div>
            <div className="card-actions font-bold text justify-end">
                <div className="badge p-4 badge-outline font-bold"><FaBook className='mx-2'></FaBook>Course: {courseID}</div>
                <div className="badge p-4 badge-outline font-bold"><FaSignal className='mx-2'></FaSignal>{difficulty}</div>
                <div className="badge p-4 badge-outline font-bold">Creadit: {creadit}</div>
                <div className="badge p-4 badge-outline font-bold"><FaClock className='mx-2'></FaClock>Duration: {duration}</div>
                <div className="badge p-4 badge-outline font-bold"><FaStar className='text-yellow-500 mx-2'></FaStar> {ratting}</div>
                <div className="badge p-4 badge-outline font-bold"><FaHardHat className='text-red-500 mx-2'></FaHardHat> Prerequisites: {prerequisites}</div>
                <div className="badge p-4 badge-outline font-bold"><FaArchive className='  mx-2'></FaArchive> Time Commitment: {timeCommitment}</div>

            </div>


            <div className='my-10'>
                <h6 className="mb-3 mx-auto text-xl font-bold leading-5">Syllabus</h6>
                <div className=" max-w-screen-lg gap-8 mx-auto ">
                    {
                        chapter.map((ch, idx) => {
                            return (
                                <div key={idx} className="flex items-center max-w-md sm:mx-auto flex-row">
                                    <div className="mr-4">
                                        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                                            <FaBook></FaBook>
                                        </div>
                                    </div>

                                    <p className="mb-3 text-sm text-gray-900">
                                        {ch}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>

            </div>


            <div className='my-10'>
                <h6 className="mb-3 text-xl font-bold leading-5">Learning Outcome</h6>
                <div className="grid max-w-screen-lg gap-8 row-gap-10 mx-auto lg:grid-cols-2">
                    {
                        learning_outcome.map((lo, idx) => {
                            return (
                                <div key={idx} className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
                                    <div className="mr-4">
                                        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                                            <FaFeather></FaFeather>
                                        </div>
                                    </div>

                                    <p className="mb-3 text-sm text-gray-900">
                                        {lo}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>

            </div>

            <h2 className="text-center max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">

                Course Fee: ${price}
            </h2>

            <div className='flex justify-center'>
                <Link to={`/enrole/${id}`}><button className="max-w-lg  mb-6 font-sans text-2xl font-bold leading-none tracking-tight btn btn-secondary btn-outline rounded-lg text-white text-center sm:text-2xl md:mx-auto"  >Enrole Now</button></Link>
            </div>
        </div >
    );
};

export default CourseDetails;