import React from 'react';
import classNames from 'classnames';
import useScroll from '../../hooks/useScroll';
import styles from './styles.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const NavBar = (props) => {
    const { scrollY, scrollX, scrollDirection, windowSize } = useScroll();

    return (
        <div
            className={classNames(styles.container, {
                [styles.scroll]: scrollY > windowSize.height / 5,
                [styles.dark]: props.dark,
            })}>
            <Link href="/">
                <a>
                    <Image src="/images/hungteam.gif" alt="home" width={90} height={40} />
                </a>
            </Link>
            <Link href="/product">
                <a>
                    <div>Products</div>
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
