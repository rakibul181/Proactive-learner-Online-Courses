import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesListNav from './CoursesListNav';

const CourseDetails = () => {
    const course = useLoaderData()
    console.log(course);
    return (
        <div className='grid grid-cols-4 gap-4'>
            <div>
                {/* <CoursesListNav   ></CoursesListNav> */}
            </div>
            <div className='col-span-3'>
              <h1>This is Course DEatils</h1>
            </div>
         </div>
    );
};

export default CourseDetails;