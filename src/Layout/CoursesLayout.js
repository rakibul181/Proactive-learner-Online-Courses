import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import CoursesListNav from '../component/CoursesListNav';

const CoursesLayout = () => {
    const courses = useLoaderData()
    return (
        <div className='grid grid-cols-1 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-4 md:grid-flow-row gap-4 '>
            <div className='sm:block sm:col-span-2 md:col-span-2 lg:col-span-1'>
                    <CoursesListNav courses={courses} ></CoursesListNav>
            </div>
            <div className='sm:col-span-3 md:col-span-5 lg:col-span-3'>
                    <Outlet></Outlet>
            </div>

        </div>
    );
};

export default CoursesLayout;