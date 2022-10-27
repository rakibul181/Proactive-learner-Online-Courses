
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './Course';

const CoursesContainear = () => {
    const courses = useLoaderData()
    // console.log(courses);
    return (
        
            <div className=' col-span-3'>
                <div className='grid grid-cols-1  md:grid-cols-2 gap-10'>{
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                    ></Course>)
                }</div>
            </div>
         

    );
};

export default CoursesContainear;