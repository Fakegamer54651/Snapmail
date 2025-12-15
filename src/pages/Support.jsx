import { memo } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/ui/AnimatedSection';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';
import './Support.css';

const TELEGRAM_ICON = "https://www.figma.com/api/mcp/asset/6755fb91-293c-4664-9ef5-8bcfe6d42b09";
const EMAIL_ICON = "https://www.figma.com/api/mcp/asset/531c686c-a190-45ec-96fa-cdc9f12a3c93";

function Support() {
  const { language } = useLanguage();

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="support-page"
    >
      <section className="contact-section">
        <div className="contact-container">
          <AnimatedSection animation="slideUp">
            <div className="contact-content">
              <div className="contact-header">
                <h2 className="contact-title">{getTranslation(language, 'support.contact.title')}</h2>
                <p className="contact-subtitle">{getTranslation(language, 'support.contact.subtitle')}</p>
              </div>

              <div className="contact-info">
                <div className="contact-person">
                  <h3 className="contact-person-name">{getTranslation(language, 'support.contact.name')}</h3>
                  <p className="contact-person-role">{getTranslation(language, 'support.contact.role')}</p>
                </div>
                <div className="contact-socials">
                  <a href="https://t.me/AsilbekKhamidullayev" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                    <img src={TELEGRAM_ICON} alt="Telegram" />
                  </a>
                  <a href="mailto:support@snaptools.pro" className="contact-social-link">
                    <img src={EMAIL_ICON} alt="Email" />
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.main>
  );
}

export default memo(Support);





