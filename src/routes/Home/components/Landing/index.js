import React, { useEffect, useState } from 'react';

import Button from 'src/theme/Button';
import FormInput from 'src/theme/FormInput';
import Image from 'next/image';
import Section from 'src/theme/Section';
import { Sliders } from 'src/config/images';
import classNames from 'classnames';
import styles from './styles.module.scss';

const Landing = () => {
    const [photoIndex, setPhotoIndex] = useState(0);

    useEffect(() => {
        const handleSlideshow = setInterval(() => {
            setPhotoIndex((prev) => (prev < Sliders.length - 1 ? prev + 1 : 0));
        }, 4000);
        return () => clearInterval(handleSlideshow);
    }, [photoIndex]);

    // console.log(Sliders[photoIndex]);

    return (
        <Section className={styles.container}>
            {Sliders.map((photo, i) => (
                <div
                    className={classNames(styles.photo, { [styles.active]: i == photoIndex })}
                    key={i}
                >
                    <Image layout="fill" objectFit="cover" src={photo} priority />
                    <div className={styles.photoDesc}>
                        <h5 className={styles.place}>A Random Place</h5>
                        <h6 className={styles.location}>a random location</h6>
                        <div className={styles.indexes}>
                            {Array.from({ length: Sliders.length }, (_, i) => (
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
            ))}
            <h2>We are your Fire Proection expert.</h2>
            <p>Aim to provide the best product and services.</p>
            <form className={styles.form}>
                <FormInput type="text" placeholder="Write down you question here..." />
                <Button text="Ask now" />
            </form>
        </Section>
    );
};

export default Landing;
