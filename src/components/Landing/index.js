import Button from 'src/components/Button';
import FormDropdown from '../FormDropdown';
import FormInput from '../FormInput';
import Heading from 'src/components/Heading';
import React from 'react';
import SlideShow from 'src/components/Slideshow';
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
                {/* <Heading size="xs" white>
                    Get Quotation
                </Heading>
                <div>Fill in the form below to email us:</div> */}
                <div className={styles.row}>
                    <FormInput type="text" placeholder="First name" />
                    <FormInput type="text" placeholder="Last name" />
                </div>
                <div className={styles.row}>
                    <FormInput type="text" placeholder="Email" />
                </div>
                <div className={styles.row}>
                    <FormDropdown
                        options={{ HK: '+852', UK: '+44', CN: '+86', MO: '+853' }}
                        defaultKey="HK"
                    />
                    <FormInput type="text" placeholder="Phone" />
                </div>
                <div className={styles.row}>
                    <FormInput type="textarea" placeholder="Ask your question here" />
                </div>
                <Button>Send Email</Button>
            </div>
        </div>
    </div>
);

export default Landing;
