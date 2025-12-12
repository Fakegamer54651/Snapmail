import { memo } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

function Support() {
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
            <h1 className="page-title">Support</h1>
            <p className="page-description">
              Need help? We're here for you.
            </p>
          </div>
        </div>
      </section>
    </motion.main>
  );
}

export default memo(Support);



