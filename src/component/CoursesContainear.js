
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './Course';
import CoursesListNav from './CoursesListNav';

const CoursesContainear = () => {
    const courses = useLoaderData()
    console.log(courses);
    return (
         <div className='grid grid-cols-4 gap-4'>
            <div>
                <CoursesListNav  courses={courses}></CoursesListNav>
            </div>
            <div className='col-span-3'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>{
                courses.map(course=> <Course 
                    key={course.id}
                    course={course}
                    ></Course>)
             }</div>
            </div>
         </div>

    );
};

export default CoursesContainear;