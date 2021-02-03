// import Landing from '@src/components/Landing';
import React from 'react';

import Landing from '@src/components/Landing';
import CompanyService from '@src/components/CompanyService';
import JobReference from '@src/components/JobReference';
import Coorperator from '@src/components/Coorperator';


const Home = () => {
    return (
        <>
            {/* <NavBar /> */}
            <Landing />
            <CompanyService />
            <JobReference />
            <Coorperator />
            {/* <Footer /> */}
        </>
    );
};

export default Home;
