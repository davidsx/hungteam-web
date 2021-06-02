import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

const Button = (props) => (
    <button
        className={classNames(props.className, styles.button, {
            [styles.dark]: props.dark,
            [styles.normal]: props.normal,
        })}
        style={props.style}
    >
        {props.text}
    </button>
);

export default Button;
