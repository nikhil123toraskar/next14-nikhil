"use client"

import styles from "./page.module.css";
import Image from "next/image";
import emailjs from '@emailjs/browser';
import { useState } from 'react';


const ContactPage = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [buttonText, setButtonText] = useState('Send Us An Email');
    const [isSending, setIsSending] = useState(false);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handlePhoneNumberChange = (e) => {
        const { name, value } = e.target;
        if (/^\d*$/.test(value) && value.length <=10) {
            setFormData({ ...formData, [name]: value });
        }
      };



    const sendEmail = async (e) => {


        e.preventDefault();
        console.log(e);

        if (!formData.name) {
            alert('Please fill in the contact name.');
            return;
        }
        if (!formData.email) {
            alert('Please fill in the email.');
            return;
        }
        if (!formData.message) {
            alert('Please fill in the message.');
            return;
        }

        if (formData.phone.length < 10 && formData.phone?.length) {
            alert('Please fill correct phone number.');
            return;
        }

        if (!emailRegex.test(formData.email)) {
            alert('Please enter a valid email address.');
            return;
          }
        

        setIsSending(true);
        setButtonText('Sending...');

        const templateParams = {
            from_email: e.target[1].value, //"nikhilfrom",
            to_name: "nikhil toraskar",
            phone: e.target[2].value,
            message: e.target[3].value,
        }
    
        console.log("test");
         emailjs.send("service_yfkzeyb",
         "template_3adydhl",
         templateParams,
         "tuPWH-_UTQ66yymFG")
         .then(response => {
            console.log(response);
            if (!response.text == 'OK') {
                throw new Error('Network response was not ok');
            }
        })
        .then(data => {
            console.log('Email sent successfully:', data);
            alert('Email sent successfully!');
            // Clear the form
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: ''
            });
            setIsSending(false);
            setButtonText('Send');
        });
    
    }

    return (
        <div className={styles.container}>

            <div className={styles.imgArea}>
                <Image src="/contact.png" fill alt="" className={styles.img}></Image>
            </div>
            <div className={styles.formContainer}>
                <form onSubmit={sendEmail} className={styles.form}>
                    <input type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name *"/>

                    <input type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address *"/>

                    <input  type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handlePhoneNumberChange}
                        placeholder="10 Digit Phone number (Optional)"/>

                    <textarea name="message"
                        value={formData.message}
                        onChange={handleChange}
                        cols="30"
                        rows="10"
                        placeholder="Message *"></textarea>
                    <button 
                    type="submit" 
                    disabled={isSending} 
                    className={styles.button}>{buttonText}</button>
                </form>
            </div>

        </div>
    )
}
export default ContactPage

