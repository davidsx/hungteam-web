import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.scss';

const FormCheckbox = (props) => {
    const { label } = props;
    const [checked, setChecked] = useState(false);

    return (
        <label className={styles.container}>
            <div className={styles.checkbox}>
                <FontAwesomeIcon
                    icon={faCheck}
                    className={classNames(styles.check, { [styles.show]: checked })}
                />
            </div>
            {label}
            <input type="checkbox" value={checked} onChange={() => setChecked(!checked)} />
        </label>
    );
};

export default FormCheckbox;
