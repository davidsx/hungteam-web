import Button from 'src/theme/Button';
import FormInput from 'src/theme/FormInput';
import React from 'react';
import Section from 'src/theme/Section';
import styles from './styles.module.scss';

const ContactUs = () => (
    <Section className={styles.contactUs}>
        <div className={styles.info}>
            <h2>
                We welcome any kind of <span>IDEA</span>
                <img src="/images/Lightbulb.svg" alt="lightbulb" />
            </h2>
            <div className={styles.contact}>
                <img src="/images/Envelope.svg" alt="envelope" />
                <span>info@hungteambuilding.com</span>
                <img src="/images/Phone.svg" alt="phone" />
                <span>+852 23456789</span>
                <img src="/images/Address.svg" alt="address" />
                <span>Flat A, 37 Floor, Block 1, East Point City</span>
            </div>
        </div>
        <form className={styles.form}>
            <div className={styles.instruction}>
                You can ask for quotation or seek consultation in below
            </div>
            <FormInput type="text" placeholder="Your name" />
            <FormInput type="text" placeholder="Contact Email" />
            <FormInput type="text" placeholder="Company Name" />
            <FormInput
                type="textarea"
                placeholder="Give us more detail and we will return to you"
            />
            <Button text="Ask now" />
        </form>
    </Section>
);

export default ContactUs;
