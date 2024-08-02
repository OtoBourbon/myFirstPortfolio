import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contactus.css'
import { HiArrowCircleRight } from "react-icons/hi";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_aopddpl', 'template_lrgj3nj', e.target, 'aUHZaIWBiX345pyJY')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send the message.');
      });

    // Clear the form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact" id='contact'>
        <form onSubmit={handleSubmit}>
        <h3>Contact me:)</h3>
            <div className="formbox">
                <label>Name:</label><br/>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="formbox">
                <label>Email:</label><br/>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="formbox">
                <label>Message:</label><br/>
                <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
            <button type="submit"><HiArrowCircleRight /></button>
            </div>
        </form>
    </div>
  );
};

export default ContactForm;