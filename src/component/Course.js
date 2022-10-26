import React from 'react';
import { FaBook, FaClock, FaSignal, FaStar, } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    const { id,courseID, courseName, creadit, difficulty,duration, picture,  ratting } = course
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl my-10">
                <figure><img src={picture } alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                         {courseName}
                        <div className="badge badge-secondary">Premium</div>
                    </h2>
                     <div className="card-actions justify-end">
                        <div className="badge badge-outline font-bold"><FaBook className='mx-2'></FaBook>Course: {courseID}</div>
                        <div className="badge badge-outline font-bold"><FaSignal className='mx-2'></FaSignal>{difficulty}</div>
                        <div className="badge badge-outline font-bold">Creadit: {creadit}</div>
                        <div className="badge badge-outline font-bold"><FaClock className='mx-2'></FaClock> {duration}</div>
                        <div className="badge badge-outline font-bold"><FaStar className='text-yellow-500 mx-2'></FaStar> {ratting}</div>
                    </div>
                    <Link to={`../course/${id}`}><button className="btn btn-secondary rounded-2xl">Details</button></Link>

                </div>
            </div>
        </div>
    );
};

export default Course;