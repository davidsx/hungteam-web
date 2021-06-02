import Image from 'next/image';
// import Button from 'src/components/Button';
// import Heading from 'src/components/Heading';
// import Image from 'next/image';
import { Jobs } from 'src/config/images';
import LearnMore from 'src/theme/LearnMore';
import React from 'react';
import Section from 'src/theme/Section';
import SectionTitle from 'src/theme/SectionTitle';
// import Underline from 'src/components/Underline';
import classNames from 'classnames';
import styles from './styles.module.scss';

const JobReference = () => {
    const jobNames = ['Job1', 'Job2', 'Job3', 'Job4'];

    return (
        <Section className={styles.jobReference}>
            <div className={styles.job}>
                <SectionTitle>Design and consultation</SectionTitle>
                <div className={styles.jobContent}>
                    <div className={styles.period}>2017 - current</div>
                    <div className={styles.title}>M+</div>
                    <p className={styles.description}>
                        M+ is one of the largest museums of modern and contemporary visual culture
                        in the world. In the project, we manufactured up to 1000 fire rated access
                        doors. In order to suit architectural requirements, expertise tailor made
                        and designed tons of unprecedented products, included completely concealed
                        access panel and extra-large fire rated door.
                    </p>
                    <LearnMore />
                </div>
                <div className={styles.next}>
                    <h6>West Kowloon Terminus</h6>
                    <img src="/images/arrow.svg" alt="next" />
                </div>
            </div>
            <div className={styles.photo}>
                <img src="/images/slider4.png" />
                <div className={styles.photoDesc}>
                    <h5 className={styles.place}>A Random Place</h5>
                    <h6 className={styles.location}>a random location</h6>
                    {/* <div className={styles.indexes}>
                        {Array.from({ length: Sliders.length }, (_, i) => (
                            <button
                                key={i}
                                onClick={() => setPhotoIndex(i)}
                                className={classNames(styles.dot, {
                                    [styles.active]: i == photoIndex,
                                })}
                            />
                        ))}
                    </div> */}
                </div>
            </div>
        </Section>
    );
};

export default JobReference;
