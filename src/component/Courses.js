
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Courses = () => {
    const courses = useLoaderData()
    console.log(courses);
    return (
        <>
             
        </>

    );
};

export default Courses;