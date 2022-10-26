import React from 'react';
import Header from '../component/Header';
import { Outlet } from 'react-router-dom';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='mx-10 md:mx-15 xl:mx-24'>
                <Outlet>

                </Outlet>

            </div>

        </div>
    );
};

export default Main;