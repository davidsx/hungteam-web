// import Landing from 'src/components/Landing';
import React, { useCallback, useState } from 'react';
import { faBars, faThLarge } from '@fortawesome/free-solid-svg-icons';

import Button from 'src/components/Button';
import FilterOption from 'src/components/FilterOption';
import Image from 'next/image';
import { Jobs } from 'src/config/images';
import Logo from 'src/components/Logo';
import RouteLink from 'src/components/RouteLink';
import filters from 'src/config/filters';
import styles from './styles.module.scss';

const Product = () => {
    // const { title, options, defaultActive } = props;
    // const optionRef = useRef(null);
    const [active, setActive] = useState(true);

    const onCLick = useCallback(() => {
        setActive((prev) => !prev);
    }, [setActive]);

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <RouteLink link="/" className={styles.logo}>
                    <Logo />
                </RouteLink>
                <ul className={styles.type}>
                    {[
                        { key: 'AP', label: 'ACCESS PANEL' },
                        { key: 'MP', label: 'MULTI PANEL' },
                        { key: 'TP', label: 'TRAP DOOR' },
                        { key: 'WD', label: 'WINDOW' },
                        { key: 'DR', label: 'DOOR' },
                        { key: 'CD', label: 'COMPOSITE DOOR' },
                        { key: 'SD', label: 'SLIDING DOOR' },
                        { key: 'GD', label: 'GLASS DOOR' },
                        { key: 'TD', label: 'TIMBER DOOR' },
                        { key: 'XD', label: 'EXTRA LARGE DOOR' },
                    ].map((type) => (
                        <li key={type.key}>
                            <RouteLink link={`/product?type=${type.key}`} className={styles.link}>
                                {type.label}
                            </RouteLink>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.banner}>
                <span>Need something more?</span>
                <Button normal dark>
                    Ask for product
                </Button>
            </div>
            <div className={styles.content}>
                <div className={styles.sidebar}>
                    {/* <div className={styles.header}>Visit out latest product !</div> */}
                    <div className={styles.filtering}>Filtering</div>
                    {filters.map((filter) => (
                        <FilterOption
                            key={filter.title}
                            title={filter.title}
                            options={filter.options}
                            onChange={() => {}}
                        />
                    ))}
                </div>
                <div className={styles.main}>
                    {/* <div className={styles.header}>
                        <FontAwesomeIcon icon={faBars} className={styles.menu} />
                        <FontAwesomeIcon icon={faThLarge} className={styles.menu} />
                    </div> */}
                    {Jobs.map((img, i) => (
                        <div key={i} className={styles.product}>
                            <div className={styles.image}>
                                <Image
                                    src={img}
                                    alt={'MX-AP-020-PH-FRP-01'}
                                    // width={280}
                                    // height={220}
                                    // objectFit="cover"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div className={styles.content}>
                                <div className={styles.name}>{'MX-AP-020-PH-FRP-01'}</div>
                                <div className={styles.description}>
                                    {'Ex amet ullamco labore laborum laboris minim nulla.'}
                                </div>
                                <div className={styles.detail}>
                                    <div>Insulation</div>
                                    <li>30mins</li>
                                    <li>1hrs</li>
                                    <li>2hrs</li>
                                    <li>4hrs</li>
                                </div>
                                <div className={styles.detail}>
                                    <div>Integrity</div>
                                    <li>30mins</li>
                                    <li>1hrs</li>
                                    <li>2hrs</li>
                                    <li>4hrs</li>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.other}></div>
            </div>
        </div>
    );
};

export default Product;
