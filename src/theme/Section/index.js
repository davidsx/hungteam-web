import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

const Section = (props) => (
    <div className={classNames(styles.section, props.className, { [styles.fluid]: props.fluid })}>
        {props.children}
    </div>
);

export default Section;
