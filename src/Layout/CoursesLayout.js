import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import CoursesListNav from '../component/CoursesListNav';

const CoursesLayout = () => {
    const courses = useLoaderData()
    return (
        <div className='grid grid-cols-4 gap-4'>
            <div>
                    <CoursesListNav courses={courses} ></CoursesListNav>
            </div>
            <div className='col-span-3'>
                    <Outlet></Outlet>
            </div>

        </div>
    );
};

export default CoursesLayout;