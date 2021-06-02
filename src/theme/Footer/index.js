import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Heading from '../../components/Heading';
import React from 'react';
import Section from '../Section';
import styles from './styles.module.scss';

const Footer = () => (
    <div className={styles.footer}>Copyright {new Date().getFullYear()} © hungteam.com</div>
);

export default Footer;
