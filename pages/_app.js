import 'src/theme/styles.global.scss';

import Footer from 'src/theme/Footer';
import NavBar from 'src/theme/Navbar';
import React from 'react';
import initIcons from 'src/utils/initIcons';

initIcons();

const App = ({ Component, pageProps }) => (
    <>
        {/* <NavBar /> */}
        <Component {...pageProps} />
        {/* <Footer /> */}
    </>
);

export default App;
