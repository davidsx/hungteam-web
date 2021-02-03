import React, { useState, useEffect, useCallback } from 'react';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown, faFire } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

const Dropdown = (props) => {
    const { prefixIcon, defaultKey, options, title } = props;

    const [value, setValue] = useState('');
    const [active, setActive] = useState(false);

    const onClick = useCallback(() => setActive((prev) => !prev), [setActive]);
    const onChange = useCallback(
        (e) => {
            setValue(e.target.value);
            setActive(false);
        },
        [setValue, setActive]
    );

    useEffect(() => {
        if (options && options.length) {
            if (defaultKey && options.map((option) => option.key).includes(defaultKey)) {
                setValue(options.find((option) => option.key === defaultKey).value);
            } else {
                setValue(options[0]);
            }
        }
    }, [setValue]);

    return (
        <div className={classNames(styles.container, { [styles.active]: active })}>
            {title && <div className={styles.title}>{title}</div>}
            <button className={styles.content} onClick={onClick}>
                <FontAwesomeIcon icon={prefixIcon || faFire} size="sm" />
                <div className={styles.selectedOption}>{value}</div>
                <FontAwesomeIcon icon={active ? faAngleUp : faAngleDown} size="sm" />
            </button>
            <div className={styles.optionContainer}>
                {options
                    .filter((option) => option.value !== value)
                    .map((option) => (
                        <button
                            key={option.key}
                            value={option.value}
                            className={styles.option}
                            onClick={onChange}
                        >
                            {option.value}
                        </button>
                    ))}
            </div>
        </div>
    );
};

export default Dropdown;
