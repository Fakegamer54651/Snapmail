import { memo, useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/ui/AnimatedSection';
import Button from '../components/ui/Button';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="contact-page"
    >
      <section className="contact-hero section">
        <div className="container">
          <AnimatedSection animation="slideUp" className="text-center">
            <h1 className="page-title">
              Get In <span className="text-gradient">Touch</span>
            </h1>
            <p className="page-description">
              Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="contact-form-section section">
        <div className="container">
          <AnimatedSection animation="slideUp">
            <div className="contact-wrapper">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-input form-textarea"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button type="submit" variant="primary" size="lg">
                  Send Message
                </Button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.main>
  );
}

export default memo(Contact);





