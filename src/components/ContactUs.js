import React, { useState } from "react";
import "../styles.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus('');
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(''), 5000);
    }, 2000);
  };

  return (
    <div className="section-container2 contact-section">
      <h2>Contact Us</h2>
      <p className="contact-intro">
        Ready to transform your online presence? Let's start a conversation about your project.
      </p>
      
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-method">
            <div className="contact-icon">📧</div>
            <div className="contact-details">
              <h4>Email Us</h4>
              <p>hello@luminar.com</p>
              <span>We'll respond within 24 hours</span>
            </div>
          </div>
          
          <div className="contact-method">
            <div className="contact-icon">📞</div>
            <div className="contact-details">
              <h4>Call Us</h4>
              <p>+61 (0) 123 456 789</p>
              <span>Mon-Fri, 9AM-5PM AEST</span>
            </div>
          </div>
          
          <div className="contact-method">
            <div className="contact-icon">📍</div>
            <div className="contact-details">
              <h4>Visit Us</h4>
              <p>Melbourne & Sydney</p>
              <span>Australia</span>
            </div>
          </div>
          
          <div className="social-links">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#" className="social-link">🐦</a>
              <a href="#" className="social-link">📘</a>
              <a href="#" className="social-link">📷</a>
              <a href="#" className="social-link">💼</a>
            </div>
          </div>
        </div>
        
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Get Your Free Discovery Call</h3>
            
            {submitStatus === 'success' && (
              <div className="success-message">
                Thank you! Your message has been sent successfully. We'll get back to you soon!
              </div>
            )}
            
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Your full name"
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <div className="form-error">{errors.name}</div>}
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="your@email.com"
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <div className="form-error">{errors.email}</div>}
            </div>
            
            <div className="form-group">
              <label htmlFor="company">Company Name</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Your company (optional)"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Tell us about your project *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="5"
                placeholder="Describe your project, goals, timeline, and any specific requirements..."
                className={errors.message ? 'error' : ''}
              ></textarea>
              {errors.message && <div className="form-error">{errors.message}</div>}
            </div>
            
            <button type="submit" className="btn submit-btn" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <div className="loading-spinner"></div>
                  Sending...
                </>
              ) : (
                '🚀 Send Message'
              )}
            </button>
            
            <p className="form-note">
              We respect your privacy. Your information will never be shared.
            </p>
          </form>
        </div>
      </div>
      
      <div className="contact-footer">
        <p>© 2024 Luminar Design Co. All rights reserved.</p>
      </div>
    </div>
  );
};

export default ContactUs;