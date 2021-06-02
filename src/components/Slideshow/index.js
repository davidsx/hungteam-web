import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import { Sliders } from 'src/config/images';
import classNames from 'classnames';
import styles from './styles.module.scss';

const SlideShow = () => {
    const [photoIndex, setPhotoIndex] = useState(0);

    useEffect(() => {
        const handleSlideshow = setInterval(() => {
            setPhotoIndex((prev) => (prev < Sliders.length - 1 ? prev + 1 : 0));
        }, 4000);
        return () => clearInterval(handleSlideshow);
    }, [photoIndex]);

    return Sliders.map((s, i) => (
        <Image
            layout="fill"
            key={i}
            className={classNames(styles.image, {
                [styles.active]: s == Sliders[photoIndex],
            })}
            src={s}
            priority
        />
    ));
};

export default SlideShow;
