import { Companies, Logos, Memberships } from 'src/config/images';

import Heading from 'src/components/Heading';
import Image from 'next/image';
import React from 'react';
import Section from 'src/theme/Section';
import SectionTitle from 'src/theme/SectionTitle';
import Underline from 'src/components/Underline';
import styles from './styles.module.scss';

const Coorperator = () => (
    <Section className={styles.coorperator}>
        <SectionTitle>Design and consultation</SectionTitle>
        <div className={styles.content}>
            <div className={styles.header}>
                <h3>
                    Fire Rated Board, Fastener, Door, Sealant, Insulation Material, Access Panel,
                    and Ironmongary...
                </h3>
                <p>
                    As the leading company in the Fire protection industry, we have been working
                    with the best suppliers in order to meet any needs of our customers. We not only
                    focus on consultation or design project but also retailing of various material.
                </p>
            </div>
            <div className={styles.brand}>
                <div className={styles.row}>
                    <img src="/images/intumex.svg" alt="intumex" />
                    <img src="/images/promat.svg" alt="promat" />
                    <img src="/images/gamma.svg" alt="gamma" />
                </div>
                <div className={styles.row}>
                    <img src="/images/rockwool.svg" alt="rockwool" />
                    <img src="/images/hilti.svg" alt="hilti" />
                </div>
                <div className={styles.row}>
                    <img src="/images/knauf.svg" alt="knauf" />
                    <img src="/images/meilux.svg" alt="meilux" />
                    <img src="/images/firestar.svg" alt="firestar" />
                </div>
                <div className={styles.next}>
                    <h6>Visit our Retail Store</h6>
                    <img src="/images/arrow.svg" alt="next" />
                </div>
            </div>
        </div>
    </Section>
);

export default Coorperator;
