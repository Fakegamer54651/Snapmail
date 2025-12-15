import { memo } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

function Feedback() {
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
          <div className="text-center">
            <h1 className="page-title">Feedback</h1>
            <p className="page-description">
              We'd love to hear your thoughts and suggestions.
            </p>
          </div>
        </div>
      </section>
    </motion.main>
  );
}

export default memo(Feedback);





