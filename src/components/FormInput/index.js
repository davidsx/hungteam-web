import React from 'react';
import styles from './styles.module.scss';

const FormInput = ({ type, placeholder }) =>
    type === 'textarea' ? (
        <textarea className={styles.input} placeholder={placeholder} />
    ) : (
        <input className={styles.input} type={type} placeholder={placeholder} />
    );

export default FormInput;
