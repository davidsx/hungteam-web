import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';

const Column = (props) => (
    <div
        className={classNames(styles.container, {
            [`xs-${props.xs}`]: props.xs,
            [`sm-${props.sm}`]: props.sm,
            [`md-${props.md}`]: props.md,
            [`lg-${props.lg}`]: props.lg,
        })}
    >
        {props.children}
    </div>
);

export default Column;
