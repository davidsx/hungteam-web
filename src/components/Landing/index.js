import React from 'react';
import Heading from '@src/components/Heading';
import Button from '@src/components/Button';
import SlideShow from '@src/components/Slideshow';
import styles from './styles.module.scss';

const Landing = () => (
    <div className={styles.container}>
        <SlideShow />
        <div className={styles.content}>
            <div className={styles.heading}>
                <Heading size="md" normal thin>
                    Fire Protection is everywhere
                </Heading>
                <Heading size="sm" normal thin>
                    and we are everywhere
                </Heading>
            </div>
            <div className={styles.form}>
                <Heading size="xs" white>
                    Get Quotation
                </Heading>
                <div>Fill in the form below to email us:</div>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Phone" />
                <input type="text" placeholder="Email" />
                <textarea placeholder="Ask you question here" />
                <Button>Send Email</Button>
            </div>
            {/* <Row>
            <Column md="7"></Column>
            <Column md="3"></Column>
        </Row> */}
        </div>
    </div>
);

export default Landing;
