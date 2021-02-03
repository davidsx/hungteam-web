import React from 'react';
import styles from 'styles.module.scss';
import classNames from 'classnames';

const Section = (props) => {
    return (
        <div
            className={classNames(styles.container, styles[props.variant], {
                [styles.fluid]: props.fluid,
            })}
        >
            {props.children}
        </div>
    );
};

export default Section;
