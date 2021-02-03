import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';

const Underline = (props) => (
    <div className={classNames(styles.underline, { [styles.dark]: props.dark })} />
);

export default Underline;
