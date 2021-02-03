import React, { useCallback, useState } from 'react';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown, faFire } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

const Checkbox = (props) => {
    const { prefixIcon, defaultChecked, name, label } = props;

    const [checked, setChecked] = useState(defaultChecked || true);

    const onChange = useCallback(() => setChecked((prev) => !prev), [setChecked]);

    return (
        <div className={styles.container}>
            {/* {title && <div className={styles.title}>{title}</div>} */}
            <label className={classNames(styles.content, { [styles.checked]: checked })}>
                <input type="checkbox" checked={checked} name={name} onChange={onChange} />
                {/* <FontAwesomeIcon icon={prefixIcon || faFire} size="sm" /> */}
                <div className={styles.description}>{label}</div>
            </label>
        </div>
    );
};

export default Checkbox;
