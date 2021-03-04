import React, { useState } from 'react';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles.module.scss';

const FormDropdown = (props) => {
    const { defaultKey, options } = props;

    const [value, setValue] = useState(options[defaultKey] || '');
    const [active, setActive] = useState(false);

    return (
        <button className={styles.container} onClick={() => setActive(!active)}>
            {/* <FormInput value={'asdf'} /> */}
            <div className={styles.value}>{value}</div>
            <div className={styles.arrow}>
                <FontAwesomeIcon icon={active ? faAngleUp : faAngleDown} size="sm" />
            </div>
            {active && (
                <div className={styles.optionsContainer}>
                    {Object.entries(options).map(([key, data]) => (
                        <button
                            key={key}
                            onClick={() => {
                                setValue(options[key]);
                                setActive(false);
                            }}
                            className={styles.option}
                        >
                            {data}
                        </button>
                    ))}
                </div>
            )}
        </button>
    );
};

export default FormDropdown;
