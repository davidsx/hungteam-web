import Footer from 'src/theme/Footer';
import MainProduct from './components/MainProduct';
import NavBar from 'src/theme/Navbar';
import OtherProduct from './components/OtherProduct';
import React from 'react';
import styles from './styles.module.scss';

const Product = () => (
    <>
        <NavBar isStatic isWhiteBackground />
        <div className={styles.productContainer}>
            <MainProduct
                title="Extra Large Door"
                description={`2000 cm height x 1000 cm width for max \n Accept varying requirement`}
            />
            <OtherProduct
                title="Access Panel"
                description={`2000 cm height x 1000 cm width for max \n Accept varying requirement`}
                position="right"
            />
            <OtherProduct
                title="Multi Panel"
                description={`2000 cm height x 1000 cm width for max \n Accept varying requirement`}
                position="left"
            />
            <OtherProduct
                title="Door"
                description={`2000 cm height x 1000 cm width for max \n Accept varying requirement`}
                position="right"
            />
            <OtherProduct
                title="Window"
                description={`2000 cm height x 1000 cm width for max \n Accept varying requirement`}
                position="left"
            />
        </div>
        <Footer />
    </>
);

export default Product;
