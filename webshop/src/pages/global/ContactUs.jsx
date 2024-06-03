import React from 'react'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';


function ContactUs() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7h3da4x', 'template_2i4xs8z', form.current, {
        publicKey: 'qC-Cs1P7cVkZQUkY1',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div><br /><b>Contact Us</b><br /> <br />
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label><br />
        <input type="text" name="from_name" /> <br />
        <label>Email</label> <br />
        <input type="email" name="from_email" /> <br />
        <label>Message</label> <br />
        <textarea name="message" /> <br />
        <input type="submit" value="Send" /> <br />
      </form>
      <br /><br />
    </div>
  );
};

export default ContactUs