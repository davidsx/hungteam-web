import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

const RouteLink = (props) => {
    // console.log(props.link);
    return (
        <Link href={props.link}>
            <a className={classNames(props.className, styles.anchor)}>{props.children}</a>
        </Link>
    );
};

RouteLink.defaultProps = {
    link: '',
};

RouteLink.propTypes = {
    children: PropTypes.any,
    className: PropTypes.any,
    link: PropTypes.string,
};

export default RouteLink;
