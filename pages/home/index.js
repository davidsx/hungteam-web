import CompanyService from 'src/components/CompanyService';
import Coorperator from 'src/components/Coorperator';
import Footer from 'src/components/Footer';
import JobReference from 'src/components/JobReference';
import Landing from 'src/components/Landing';
import NavBar from 'src/components/Navbar';
import React from 'react';

const Home = () => (
    <>
        <NavBar />
        <Landing />
        <CompanyService />
        <JobReference />
        <Coorperator />
        <Footer />
    </>
);

export default Home;
