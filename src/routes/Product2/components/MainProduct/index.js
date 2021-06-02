import LearnMore from 'src/theme/LearnMore';
import React from 'react';
import styles from './styles.module.scss';

const MainProduct = (props) => {
    const { title, description, integrity } = props;

    return (
        <div className={styles.mainProduct}>
            <div className={styles.photo}>
                <img src="/images/slider1.png" />
            </div>
            <div className={styles.title}>
                <h2>{title}</h2>
                <LearnMore />
            </div>
            <div className={styles.detail}>
                <p>{description}</p>
                <span>Integrity:</span>
                <ul className={styles.integrity}>
                    <li data-interity="30 mins">30 mins</li>
                    <li data-interity="1 hr">1 hr</li>
                    <li data-interity="2 hrs">2 hrs</li>
                    <li data-interity="4 hrs">4 hrs</li>
                </ul>
            </div>
        </div>
    );
};

export default MainProduct;
