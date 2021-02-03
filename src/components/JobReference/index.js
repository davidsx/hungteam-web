import React from 'react';
import Underline from '../Underline';
import styles from './styles.module.scss';
import { Jobs } from '@src/config/images';
import Button from '../Button';
import Heading from '../Heading';
import classNames from 'classnames';
import Image from 'next/image';

const JobReference = () => {
    const jobNames = ['Job1', 'Job2', 'Job3', 'Job4'];

    return (
        <div className={styles.container}>
            <div className={styles.intro}>
                <Heading size="lg">Job Reference</Heading>
                <Underline />
                <p>
                    Ex anim incididunt cillum tempor anim exercitation aute id ullamco aute.
                    Deserunt labore non aliqua quis sunt. Non deserunt et eu duis. Sunt exercitation
                    irure ex nostrud sint.
                </p>
            </div>
            {Jobs.map((j, i) => (
                <div className={classNames(styles.job, styles[`image-${i + 1}`])} key={i}>
                    <div className={styles.imageContainer}>
                        <Image src={j} alt="job" layout="fill" objectFit="cover" />
                    </div>
                    <div className={styles.background} />
                    <div className={styles.jobName}>{jobNames[i]}</div>
                </div>
            ))}
            <div className={styles.quotation}>
                <Heading size="xs" thin>
                    Asking for quotation?
                </Heading>
                <div className="fs-1x">(852) 1234-5678</div>
            </div>
            <div className={styles.contact}>
                <Button>Contact Now</Button>
            </div>
        </div>
    );
};

export default JobReference;
