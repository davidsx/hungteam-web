import React, { useRef, useCallback, useState } from 'react';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

const FilterOption = (props) => {
    const { title, options, defaultActive, onChange } = props;
    // const optionRef = useRef(null);
    const [active, setActive] = useState(defaultActive || true);

    const onCLick = useCallback(() => {
        setActive((prev) => !prev);
    }, [setActive]);

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <button onClick={onCLick}>
                    <span>{title}</span>
                    <FontAwesomeIcon icon={active ? faAngleUp : faAngleDown} size="sm" />
                </button>
            </div>
            <div
                className={classNames(
                    styles['options-container'],
                    active ? styles.show : styles.hide
                )}
            >
                {options.map((option) => (
                    <div key={option.key} className={styles.option}>
                        <label>
                            <input
                                type="checkbox"
                                checked={options.value || true}
                                onChange={onChange}
                            />
                            <span>{option.label}</span>
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FilterOption;
