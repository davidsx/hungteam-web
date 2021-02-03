import React from 'react';
import styles from './styles.module.scss';

const Row = (props) => <div className={styles.container}>{props.children}</div>;

export default Row;
