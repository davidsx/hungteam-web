import ContactUs from 'src/routes/Home/components/ContactUs';
import Coorperator from 'src/routes/Home/components/Coorperator';
import Footer from 'src/theme/Footer';
import JobReference from 'src/routes/Home/components/JobReference';
import Landing from 'src/routes/Home/components/Landing';
import NavBar from 'src/theme/Navbar';
import React from 'react';
import WhoWeAre from 'src/routes/Home/components/WhoWeAre';

const Home = () => (
    <>
        <NavBar />
        <Landing />
        <WhoWeAre />
        <JobReference />
        <Coorperator />
        <ContactUs />
        <Footer />
    </>
);

export default Home;
