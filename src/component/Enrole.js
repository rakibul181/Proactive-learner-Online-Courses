import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Enrole = () => {
    const course = useLoaderData() 
    console.log(course);
    return (
        <div>
            {
                course.courseName
            }
        </div>
    );
};

export default Enrole;