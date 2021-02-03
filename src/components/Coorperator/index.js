import React from 'react';
import styles from './styles.module.scss';
import { Companies, Memberships, Logos } from '@src/config/images';
import Underline from '../Underline';
import Heading from '../Heading';
import Image from 'next/image';

const Coorperator = () => {
    return (
        <div className={styles.container}>
            <Underline />
            <Heading size="sm" thin>
                We are cooporating with the best distributor in the industry
            </Heading>
            <div className={styles.content}>
                {Companies.concat(Logos)
                    .concat(Memberships)
                    .map((c, i) => (
                        <div className={styles.imageContainer} key={i}>
                            <Image src={c} alt="company" layout="fill" objectFit="contain" />
                        </div>
                    ))}
            </div>
            <Heading size="sm" thin>
                and many others.
            </Heading>
        </div>
    );
};

export default Coorperator;
