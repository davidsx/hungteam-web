import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import {
    faFacebookF,
    faInstagram,
    faLinkedin,
    faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Heading from '../Heading';
import React from 'react';
import styles from './styles.module.scss';

const Footer = () => (
    <div className={styles.container}>
        <div className={styles.content}>
            <div className={styles.detail}>
                <Heading size="xs" normal thin>
                    About us
                </Heading>
                <p>
                    Id deserunt consectetur mollit laboris deserunt. Non esse laboris mollit eiusmod
                    voluptate magna labore quis elit commodo. Elit commodo irure officia id
                    exercitation.
                </p>
            </div>
            <div className={styles.detail}>
                <Heading size="xs" normal thin>
                    Contact
                </Heading>
                <div className={styles.contactInfo}>
                    <FontAwesomeIcon icon={faEnvelope} />
                    abc123@hungteam.com
                    <FontAwesomeIcon icon={faPhone} />
                    (852) 1234 5678
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    Flat A, 37 Floor, Block 1, East Point City
                </div>
            </div>
            <div className={styles.detail}>
                <Heading size="xs" normal thin>
                    Social Media
                </Heading>
                <p>
                    We are also very active in social media, trying to answer all the questions you
                    might have. Check out our accounts:
                </p>
                <div className={styles.socialMedia}>
                    {[faFacebookF, faInstagram, faWhatsapp, faLinkedin].map((icon) => (
                        <FontAwesomeIcon
                            key={icon.iconName}
                            icon={icon}
                            className={styles.socialIcon}
                        />
                    ))}
                </div>
            </div>
        </div>
        <hr style={{ width: '100%' }} />
        <div className={styles.footer}>
            Copyright {new Date().getFullYear()} © YourDomainName.com
        </div>
    </div>
);

export default Footer;
