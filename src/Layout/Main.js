import React from 'react';
import Header from '../component/Header';
import { Outlet } from 'react-router-dom';
import Fotter from '../component/Fotter';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <div>
                <Outlet>

                </Outlet>

            </div>
            <Fotter></Fotter>

        </div>
    );
};

export default Main;