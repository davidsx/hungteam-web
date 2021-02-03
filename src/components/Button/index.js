import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';

const Button = (props) => (
    <button
        className={classNames(props.className, styles.button, {
            [styles.dark]: props.dark,
            [styles.normal]: props.normal,
        })}
        style={props.style}
    >
        {props.children}
    </button>
);

export default Button;
