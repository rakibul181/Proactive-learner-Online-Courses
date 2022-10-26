import React from 'react';
import { Link } from 'react-router-dom';

const CoursesListNav = ({ courses }) => {
    return (
        <div className="menu bg-base-100 h-screen sticky top-0 py-10 rounded-box ">
            <h2 className='text-2xl font-bold'>Course List</h2>
            
            <ul className="menu bg-base-100 w-56 rounded-box">
            {
                courses.map(course => <li className="hover-bordered"><Link to={`../course/${course.id}`} key={course.id}>{course.courseName}</Link></li>)
            }  
                
            </ul>
        </div>
    );
};

export default CoursesListNav;