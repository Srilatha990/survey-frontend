



import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.fullName || !formData.email || !formData.subject || !formData.message) {
      toast.error('All fields are required.');
      return;
    }

    try {
      const response = await axios.post('https://survey-backend-henna.vercel.app/api/contact/contact', formData);
      if (response.status === 200) {
        toast.success('Message sent successfully.');
        setFormData({ fullName: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: window.innerWidth < 768 ? 'column' : 'row',  // Stack vertically for mobile
      padding: '20px',
      backgroundColor: '#f8f9fa',
      minHeight: '500px',
    }}>
      {/* Form Section */}
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '15px',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '500px',
        marginBottom: window.innerWidth < 768 ? '20px' : '0', // Margin for mobile
        width: window.innerWidth < 768 ? '100%' : '50%', // 100% width on mobile, 50% on large screens
      }}>
        <h1 style={{
          fontSize: '2rem',
          fontWeight: '600',
          color: '#002261',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          marginBottom: '30px',
        }}>
          Send Us a Message
        </h1>

        <form onSubmit={handleSubmit} style={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          justifyContent: 'space-between',
        }}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="fullName" style={{ fontSize: '1.1rem', color: '#333', fontWeight: '600', display: 'block' }}>Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '8px',
                fontSize: '0.9rem',
                border: '1px solid #ddd',
                borderRadius: '8px',
                marginTop: '5px',
                height: '35px',
              }}
              required
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="email" style={{ fontSize: '1.1rem', color: '#333', fontWeight: '600', display: 'block' }}>Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '8px',
                fontSize: '0.9rem',
                border: '1px solid #ddd',
                borderRadius: '8px',
                marginTop: '5px',
                height: '35px',
              }}
              required
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="subject" style={{ fontSize: '1.1rem', color: '#333', fontWeight: '600', display: 'block' }}>Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '8px',
                fontSize: '0.9rem',
                border: '1px solid #ddd',
                borderRadius: '8px',
                marginTop: '5px',
                height: '35px',
              }}
              required
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="message" style={{ fontSize: '1.1rem', color: '#333', fontWeight: '600', display: 'block' }}>Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '8px',
                fontSize: '0.9rem',
                border: '1px solid #ddd',
                borderRadius: '8px',
                marginTop: '5px',
                height: '90px',
              }}
              required
            />
          </div>

          <button type="submit" style={{
            width: '100%',
            padding: '10px',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            color: 'white',
            backgroundColor: '#2ea6f7',
            border: 'none',
            borderRadius: '8px',
            transition: 'background-color 0.3s ease',
            marginTop: '20px',
            height: '45px',
          }}>
            Submit
          </button>
        </form>
      </div>

      {/* Right side image */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '500px',
        width: window.innerWidth < 768 ? '100%' : '50%',  // 100% on mobile, 50% on large screens
      }}>
        <img src="/assets/img/cont.jpeg" alt="Contact Us" style={{
          width: '100%',
          height: '100%',
          borderRadius: '15px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          objectFit: 'cover',
        }} />
      </div>

      {/* Toast container for displaying toasts */}
      <ToastContainer />
    </div>
  );
};

export default Contact;


