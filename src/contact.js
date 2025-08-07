import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage({
        type: 'success',
        text: 'Your message has been sent successfully!'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitMessage(null), 5000);
    }, 1500);
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="container">
          <h1>Get in Touch</h1>
          <p>We'd love to hear from you. Contact us using any method below.</p>
        </div>
      </div>

      <div className="contact-container">
        <div className="container">
          <div className="contact-info">
            <div className="info-card">
              <div className="icon"><FaMapMarkerAlt /></div>
              <h3>Our Location</h3>
              <p>123 Tech Avenue, Innovation District</p>
              <p>San Francisco, CA 94103</p>
            </div>

            <div className="info-card">
              <div className="icon"><FaPhone /></div>
              <h3>Phone Number</h3>
              <p>+1 (415) 555-0123</p>
              <p>+1 (888) 555-9876</p>
            </div>

            <div className="info-card">
              <div className="icon"><FaEnvelope /></div>
              <h3>Email Address</h3>
              <p>support@techshop.com</p>
              <p>sales@techshop.com</p>
            </div>

            <div className="info-card">
              <div className="icon"><FaClock /></div>
              <h3>Working Hours</h3>
              <p>Monday - Friday: 9AM - 6PM</p>
              <p>Saturday: 10AM - 4PM</p>
            </div>
          </div>

          <div className="contact-content">
            <div className="contact-form">
              <h2>Send Us a Message</h2>
              {submitMessage && (
                <div className={`submit-message ${submitMessage.type}`}>
                  {submitMessage.text}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows="5"
                    required
                  ></textarea>
                </div>
                
                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : (
                    <>
                      Send Message <FaPaperPlane />
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="contact-map">
              <div className="map-placeholder">
                <iframe 
                  title="Our Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.434602669488!2d-122.406744684682!3d37.78311997975907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1621960383981!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }}
                  allowFullScreen="" 
                  loading="lazy">
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;