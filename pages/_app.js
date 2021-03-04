import 'src/theme/styles.global.scss';

import Footer from 'src/components/Footer';
import NavBar from 'src/components/Navbar';
import React from 'react';

const App = ({ Component, pageProps }) => (
    <>
        {/* <NavBar /> */}
        <Component {...pageProps} />
        {/* <Footer /> */}
    </>
);

export default App;
