import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import styles from './styles.module.scss';

const BrandIcon = (props) => {
    return (
        <div className={styles[`icon-${props.size}`]}>
            <FontAwesomeIcon
                icon={['fab', props.brand]}
                className={classNames(styles.icon, { [styles.dark]: props.dark })}
            />
        </div>
    );
};

export default BrandIcon;
