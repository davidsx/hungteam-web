import React, { useState } from 'react';

import LearnMore from 'src/theme/LearnMore';
import classNames from 'classnames';
import styles from './styles.module.scss';

const OtherProduct = (props) => {
    const { title, description, integrity, position = 'right' } = props;
    const [photoIndex, setPhotoIndex] = useState(0);

    const renderPhoto = (p) =>
        position === p && (
            <div className={styles.photo}>
                <img src="/images/slider1.png" />
                <div className={classNames(styles.photoDesc, styles[p])}>
                    <h5 className={styles.place}>A Random Place</h5>
                    <h6 className={styles.location}>a random location</h6>
                    <div className={styles.indexes}>
                        {Array.from({ length: 3 }, (_, i) => (
                            <button
                                key={i}
                                onClick={() => setPhotoIndex(i)}
                                className={classNames(styles.dot, {
                                    [styles.active]: i == photoIndex,
                                })}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );

    return (
        <div className={styles.otherProduct}>
            {renderPhoto('left')}
            <div className={styles.detail}>
                <h2>{title}</h2>
                <p>{description}</p>
                <div className={styles.integrityContainer}>
                    <span>Integrity:</span>
                    <ul className={styles.integrity}>
                        <li data-interity="30 mins">30 mins</li>
                        <li data-interity="1 hr">1 hr</li>
                        <li data-interity="2 hrs">2 hrs</li>
                        <li data-interity="4 hrs">4 hrs</li>
                    </ul>
                </div>
                <LearnMore />
            </div>
            {renderPhoto('right')}
        </div>
    );
};

export default OtherProduct;
