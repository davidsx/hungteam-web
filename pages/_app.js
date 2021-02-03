import '@src/theme/styles.global.scss';
import NavBar from '../src/components/Navbar';
import Footer from '../src/components/Footer';

const App = ({ Component, pageProps }) => {
    return (
        <>
            <NavBar />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default App;
