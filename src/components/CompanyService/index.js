import Heading from '../Heading';
import React from 'react';
import Underline from '../Underline';
import styles from './styles.module.scss';

const CompanyService = () => (
    <div className={styles.container}>
        <Underline />
        <Heading size="lg">What we can do?</Heading>
        <div className={styles.content}>
            <div className={styles.service}>
                <Heading size="xs" thin normal>
                    Installation
                </Heading>
                <p>
                    Exercitation excepteur eiusmod Lorem ipsum pariatur aute in irure. Minim
                    consectetur ipsum tempor labore magna ullamco amet irure. Consectetur nostrud
                    commodo quis deserunt consequat qui proident proident anim tempor et amet
                    deserunt.
                </p>
            </div>
            <div className={styles.service}>
                <Heading size="xs" thin normal>
                    Consultation
                </Heading>
                <p>
                    Exercitation excepteur eiusmod Lorem ipsum pariatur aute in irure. Minim
                    consectetur ipsum tempor labore magna ullamco amet irure. Consectetur nostrud
                    commodo quis deserunt consequat qui proident proident anim tempor et amet
                    deserunt.
                </p>
            </div>
            <div className={styles.service}>
                <Heading size="xs" thin normal>
                    Product
                </Heading>
                <p>
                    Exercitation excepteur eiusmod Lorem ipsum pariatur aute in irure. Minim
                    consectetur ipsum tempor labore magna ullamco amet irure. Consectetur nostrud
                    commodo quis deserunt consequat qui proident proident anim tempor et amet
                    deserunt.
                </p>
            </div>
        </div>
    </div>
);

export default CompanyService;
