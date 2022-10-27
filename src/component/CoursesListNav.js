import React from 'react';
import { Link } from 'react-router-dom';
 

const CoursesListNav = ({ courses }) => {
    console.log(courses);
    
    // const{setCourse} = useContext(AuthContext)
    // setCourse(courses)
    console.log(courses);
    return (
        <div className="menu bg-base-100 flex-nowrap h-screen sticky top-0 py-10 rounded-box ">
            <h2 className='text-2xl font-bold'>Course List</h2>
            
            <ul className="menu bg-base-100   rounded-box">
            {
                    courses.map(course =>  <li key={course.id} className="hover-bordered"><Link to={`../courses/course/${course.id}`} >{course.courseName}</Link></li>)
            }  
                
            </ul>
        </div>
    );
};

export default CoursesListNav;