import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import Image from 'next/image';
import { Sliders } from '@src/config/images';

const SlideShow = () => {
    const [photoIndex, setPhotoIndex] = useState(0);

    useEffect(() => {
        const handleSlideshow = setInterval(() => {
            setPhotoIndex((prev) => (prev < Sliders.length - 1 ? prev + 1 : 0));
        }, 4000);
        return () => clearInterval(handleSlideshow);
    }, [photoIndex]);

    return (
        <>
            {Sliders.map((s, i) => (
                <Image
                    layout="fill"
                    key={i}
                    className={classNames(styles.image, {
                        [styles.active]: s == Sliders[photoIndex],
                    })}
                    src={s}
                    priority
                />
            ))}
        </>
    );
};

export default SlideShow;
