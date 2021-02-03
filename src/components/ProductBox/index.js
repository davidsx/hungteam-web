import React from 'react';
import styles from './styles.module.scss';

const ProductBox = (props) => {
    const { img, id, name, detail } = props;
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img src={img} alt={name} />
            </div>
            <div className={styles.content}>
                <div>{name}</div>
                <div>{detail}</div>
            </div>
        </div>
    );
};

export default ProductBox;
