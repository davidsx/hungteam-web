import React, { useCallback, useState } from 'react';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import styles from './styles.module.scss';

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
                    <FontAwesomeIcon icon={active ? faMinus : faPlus} className={styles.icon} />
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
