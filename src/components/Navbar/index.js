import Image from 'next/image';
import Link from 'next/link';
import Logo from '../Logo';
import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
import useScroll from '../../hooks/useScroll';

const NavBar = (props) => {
    const { scrollY, scrollX, scrollDirection, windowSize } = useScroll();

    return (
        <div
            className={classNames(styles.container, {
                [styles.scroll]: scrollY > windowSize.height / 5,
                [styles.dark]: props.dark,
            })}
        >
            <Link href="/">
                <a>
                    <Logo />
                </a>
            </Link>
            <Link href="/product">
                <a>
                    <div>Products</div>
                </a>
            </Link>
            <Link href="/product2">
                <a>
                    <div>Job Reference</div>
                </a>
            </Link>
            <Link href="/">
                <a>
                    <div>Job Reference</div>
                </a>
            </Link>
        </div>
    );
};

export default NavBar;
