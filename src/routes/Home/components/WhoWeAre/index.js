import React from 'react';
import Section from 'src/theme/Section';
import SectionTitle from 'src/theme/SectionTitle';
import styles from './styles.module.scss';

const WhoWeAre = () => (
    <Section className={styles.whoWeAre} fluid>
        <SectionTitle>Who we are</SectionTitle>
        <div className={styles.content}>
            <div className={styles.experience}>
                <h2>20+</h2>
                <h2>Year of experience</h2>
                <h2>100+</h2>
                <h2>Job reference</h2>
                <h2>50+</h2>
                <h2>Product</h2>
            </div>
            <div className={styles.quote}>
                <img src="/images/quote.svg" alt="quote" />
                <p>
                    Exercitation excepteur eiusmod Lorem ipsum pariatur aute in irure. Minim
                    consectetur ipsum tempor labore magna ullamco amet irure. Consectetur commodo
                    quis deserunt consequat qui proident proident anim tempor et deserunt.
                </p>
                <div className={styles.name}>
                    <h5>Tony Lau</h5>
                    <h6>Hung Team Building Company Ltd. CEO</h6>
                </div>
                <img src="/images/membership.svg" alt="membership" />
            </div>
        </div>
    </Section>
);

export default WhoWeAre;
