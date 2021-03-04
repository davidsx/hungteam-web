import { Companies, Logos, Memberships } from 'src/config/images';

import Heading from 'src/components/Heading';
import Image from 'next/image';
import React from 'react';
import Underline from 'src/components/Underline';
import styles from './styles.module.scss';

const Coorperator = () => (
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

export default Coorperator;
