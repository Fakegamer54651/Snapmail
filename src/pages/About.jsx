import { memo } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/ui/AnimatedSection';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';
import './About.css';

// Team member images
const ASILBEK_IMAGE = "https://www.figma.com/api/mcp/asset/5112599b-16dc-4491-be8f-f4b8602da429";
const ASADBEK_IMAGE = "https://www.figma.com/api/mcp/asset/49824896-1ab3-4ee9-917e-3987f0cda091";
const LINKEDIN_ICON = "https://www.figma.com/api/mcp/asset/dcab1bcb-654f-4c28-a4b9-e15005524fa3";
const TELEGRAM_ICON = "https://www.figma.com/api/mcp/asset/a89e6fd9-8a6a-4883-8516-4ff421c717bd";
const WEBSITE_ICON = "https://www.figma.com/api/mcp/asset/23d017dd-bdb0-441e-910c-468e803a15f8";

function About() {
  const { language } = useLanguage();

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="about-page"
    >
      <section className="reason-section">
        <div className="reason-container">
          <AnimatedSection animation="slideUp">
            <div className="reason-content">
              <div className="reason-header">
                <p className="reason-label">{getTranslation(language, 'about.reason.label')}</p>
                <h1 className="reason-title">{getTranslation(language, 'about.reason.title')}</h1>
                <p className="reason-subtitle">{getTranslation(language, 'about.reason.subtitle')}</p>
              </div>
              <p className="reason-description">{getTranslation(language, 'about.reason.description')}</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="team-section">
        <div className="team-container">
          <AnimatedSection animation="slideUp">
            <div className="team-content">
              <div className="team-header">
                <p className="team-label">{getTranslation(language, 'about.team.label')}</p>
                <h2 className="team-title">{getTranslation(language, 'about.team.title')}</h2>
                <p className="team-subtitle">{getTranslation(language, 'about.team.subtitle')}</p>
              </div>

              <div className="team-members">
                <div className="team-member">
                  <div className="team-member-image">
                    <img src={ASILBEK_IMAGE} alt="Asilbek Khamidullayev" />
                  </div>
                  <div className="team-member-info">
                    <div className="team-member-text">
                      <h3>{getTranslation(language, 'about.team.member1.name')}</h3>
                      <p className="team-member-role">{getTranslation(language, 'about.team.member1.role')}</p>
                    </div>
                    <p className="team-member-description">{getTranslation(language, 'about.team.member1.description')}</p>
                    <div className="team-member-socials">
                      <a href="https://www.linkedin.com/in/asilbek-khamidullayev/" target="_blank" rel="noopener noreferrer" className="social-link">
                        <img src={LINKEDIN_ICON} alt="LinkedIn" />
                      </a>
                      <a href="https://t.me/AsilbekKhamidullayev" target="_blank" rel="noopener noreferrer" className="social-link">
                        <img src={TELEGRAM_ICON} alt="Telegram" />
                      </a>
                      <a href="https://asilbek.design" target="_blank" rel="noopener noreferrer" className="social-link">
                        <img src={WEBSITE_ICON} alt="Website" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="team-member">
                  <div className="team-member-info">
                    <div className="team-member-text">
                      <h3>{getTranslation(language, 'about.team.member2.name')}</h3>
                      <p className="team-member-role">{getTranslation(language, 'about.team.member2.role')}</p>
                    </div>
                    <p className="team-member-description">{getTranslation(language, 'about.team.member2.description')}</p>
                    <div className="team-member-socials">
                      <a href="https://www.linkedin.com/in/asadbek-ergashev-313614213/" target="_blank" rel="noopener noreferrer" className="social-link">
                        <img src={LINKEDIN_ICON} alt="LinkedIn" />
                      </a>
                      <a href="https://t.me/asadbek_yasiin" target="_blank" rel="noopener noreferrer" className="social-link">
                        <img src={TELEGRAM_ICON} alt="Telegram" />
                      </a>
                    </div>
                  </div>
                  <div className="team-member-image">
                    <img src={ASADBEK_IMAGE} alt="Asadbek Ergashev" />
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.main>
  );
}

export default memo(About);
