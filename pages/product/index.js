// import Landing from '@src/components/Landing';
import React, { useState, useCallback } from 'react';
import FilterOption from '@src/components/FilterOption';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown, faFire } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.scss';
import filters from '@src/config/filters';
import ProductBox from '@src/components/ProductBox';
import { Jobs } from '@src/config/images';
import Dropdown from '@src/components/Dropdown';
import Checkbox from '@src/components/Checkbox';
import CheckboxList from '@src/components/CheckboxList';
import Button from '@src/components/Button';

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
                {/* <Dropdown
                        title="Insulation"
                        prefixIcon={faFire}
                        defaultKey={30}
                        options={[
                            { key: 30, value: '30 Mins' },
                            { key: 60, value: '1 Hrs' },
                            { key: 120, value: '2 Hrs' },
                            { key: 240, value: '4 Hrs' },
                        ]}
                    />
                    <Dropdown
                        title="Integrity"
                        prefixIcon={faFire}
                        defaultKey={30}
                        options={[
                            { key: 30, value: '30 Mins' },
                            { key: 60, value: '1 Hrs' },
                            { key: 120, value: '2 Hrs' },
                            { key: 240, value: '4 Hrs' },
                        ]}
                    /> */}
                {/* <br /> */}
                <CheckboxList
                    title="Insulation"
                    options={[
                        { key: 30, label: '30 Mins' },
                        { key: 60, label: '1 Hrs' },
                        { key: 120, label: '2 Hrs' },
                        { key: 240, label: '4 Hrs' },
                    ]}
                />
                <CheckboxList
                    title="Integrity"
                    options={[
                        { key: 30, label: '30 Mins' },
                        { key: 60, label: '1 Hrs' },
                        { key: 120, label: '2 Hrs' },
                        { key: 240, label: '4 Hrs' },
                    ]}
                />
                {/* {filters.map((filter) => (
                        <CheckboxList
                            key={filter.title}
                            options={filter.options}
                            title={filter.title}
                        />
                    ))} */}
            </div>
            {/* <div className={styles.filter}>
                    <button onClick={onCLick}>
                        <span>Filters</span>
                        <div className={styles.horizontalLine} />
                        <FontAwesomeIcon icon={active ? faAngleUp : faAngleDown} size="lg" />
                    </button>
                </div> */}
            <div className={styles.banner}>Visit out latest product !</div>
            <div className={styles.content}>
                <div className={styles.sidebar}>
                    <Button normal style={{ marginBottom: '5px' }}>
                        Ask for product
                    </Button>
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
                    {Jobs.map((j, i) => (
                        <ProductBox
                            key={i}
                            img={j}
                            id="MX-AP-020-PH-FRP-01"
                            name="MX-AP-020-PH-FRP-01"
                            detail="Ex amet ullamco labore laborum laboris minim nulla."
                        />
                    ))}
                </div>
                <div className={styles.other}>others</div>
            </div>
        </div>
    );
};

export default Product;
