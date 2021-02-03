import React, { useState, useEffect, useCallback } from 'react';
import styles from './styles.module.scss';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import Checkbox from '../Checkbox';

const CheckboxList = (props) => {
    const { options, title } = props;

    return (
        <div className={styles.container}>
            {title && <div className={styles.title}>{title}</div>}
            <div className={styles.checkboxes}>
                {options.map((option) => (
                    <Checkbox
                        prefixIcon={faFire}
                        key={option.key}
                        name={option.key}
                        label={option.label}
                    />
                ))}
            </div>
        </div>
    );
};

export default CheckboxList;
