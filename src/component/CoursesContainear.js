
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './Course';

const CoursesContainear = () => {
    const courses = useLoaderData()
    console.log(courses);
    return (
        <>
             {
                courses.map(course=> <Course 
                    key={course.id}
                    course={course}
                    ></Course>)
             }
        </>

    );
};

export default CoursesContainear;