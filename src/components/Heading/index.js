import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

const Heading = (props) => (
    <div
        className={classNames(styles.heading, styles[props.size], {
            [styles.white]: props.white,
            [styles.thin]: props.thin,
            [styles.inline]: props.inline,
            [styles.normal]: props.normal,
        })}
        style={{ ...props.style }}
    >
        {props.children}
    </div>
);

export default Heading;
