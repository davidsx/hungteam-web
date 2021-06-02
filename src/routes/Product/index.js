import Button from 'src/theme/Button';
import NavBar from 'src/theme/Navbar';
import React from 'react';
import styles from './styles.module.scss';

const Product2 = () => (
    <div className={styles.container}>
        <NavBar className={styles.abc} />
        {/* <div className={styles.banner}>
            <span>Looking for something else?</span>
            <Button normal dark>
                Ask for product
            </Button>
        </div> */}
        <div className={styles.main}>
            {/* <img src="/images/extra-large-door.jpeg" alt="extra large door" /> */}
            <h2>Extra Large Door</h2>
            <h3>West Kowloon Cultural District M+</h3>
            <p>
                2000 cm height x 1000 cm width for max.
                <br /> Accept varying requirement
            </p>
            <Button normal>Learn More</Button>
        </div>
        <div className={styles.content}>
            <div className={styles.product}>
                {/* <img src="/images/extra-large-door.jpeg" alt="extra large door" /> */}
                <h2>Access Panel</h2>
                <h3>West Kowloon Cultural District M+</h3>
                <p>
                    2000 cm height x 1000 cm width for max.
                    <br /> Accept varying requirement
                </p>
                <Button normal>Learn More</Button>
            </div>
            <div className={styles.product}>
                {/* <img src="/images/extra-large-door.jpeg" alt="extra large door" /> */}
                <h2>Multi Panel</h2>
                <h3>West Kowloon Cultural District M+</h3>
                <p>
                    2000 cm height x 1000 cm width for max.
                    <br /> Accept varying requirement
                </p>
                <Button normal>Learn More</Button>
            </div>
        </div>
    </div>
);

export default Product2;
