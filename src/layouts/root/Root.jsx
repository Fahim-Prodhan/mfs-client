import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';

const Root = () => {
    return (
        <div className=''>
            <Sidebar></Sidebar>
            <div >
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;