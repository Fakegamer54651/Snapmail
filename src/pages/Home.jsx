import { memo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import AnimatedSection from '../components/ui/AnimatedSection';
import FeatureCard from '../components/ui/FeatureCard';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';
import './Home.css';

const CHROME_ICON_URL = "https://www.figma.com/api/mcp/asset/c7aef9f3-c1e9-4f19-8d2c-4a96376850a5";
const DAT_LOGO_URL = "https://www.figma.com/api/mcp/asset/1a25950e-2fcc-4134-88a3-27eaee94cda9";
const TRUCKSTOP_LOGO_URL = "https://www.figma.com/api/mcp/asset/6b477dd8-25a1-4cd3-805b-605c8e3a9167";
const SIGN_VECTOR_URL = "https://www.figma.com/api/mcp/asset/f68272ca-a172-41d4-9ebe-16b4eea209f0";
const SPARKLE_ICON_URL = "https://www.figma.com/api/mcp/asset/a965304b-11ad-4393-bfe9-a5f749bcbddb";
const DAT_LOGO_SMALL_URL = "https://www.figma.com/api/mcp/asset/647039f6-0d50-40fd-89b7-f18f7007e48b";
const TRUCKSTOP_LOGO_SMALL_URL = "https://www.figma.com/api/mcp/asset/c118173c-6b44-4a82-84df-bdb464017782";
const GMAIL_LOGO_URL = "https://www.figma.com/api/mcp/asset/8c65ec4f-5808-41f3-8e14-f42abcddfda1";
const USER_ICON_URL = "https://www.figma.com/api/mcp/asset/95a7293f-5ae1-4bb2-9f16-3bbe545904e5";
const USER_AVATAR_URL = "https://www.figma.com/api/mcp/asset/0d509a82-cd82-461a-84e7-c9f62399e5b1";
const USER_AVATAR2_URL = "https://www.figma.com/api/mcp/asset/a3d8ef65-a075-4358-aa89-04cfb299b92e";
const PRIVACY_ICON_URL = "https://www.figma.com/api/mcp/asset/cd475649-63f4-4ece-b2ee-0a31893534ae";
const SHIELD_LARGE_URL = "https://www.figma.com/api/mcp/asset/f9f39ff9-cc82-4c85-82a1-b2ecd27945f7";
const PDF_ICON_URL = "https://www.figma.com/api/mcp/asset/31335abf-a0cf-42cb-940c-a32e32953c15";
const AVATAR1_URL = "https://www.figma.com/api/mcp/asset/bace61ed-a0b1-419c-bddd-bdc613892e33";
const AVATAR2_URL = "https://www.figma.com/api/mcp/asset/96359029-74e1-44fe-8711-fe162628658b";

// Feature card images and logos from new Figma design (updated)
const FEATURE_SIGN_PDF_SCREENSHOT = "https://www.figma.com/api/mcp/asset/6e992a32-7ab4-4042-8901-5c41c271d6f5";
const FEATURE_SEND_EMAIL_SCREENSHOT = "https://www.figma.com/api/mcp/asset/bb130214-50bf-4efd-af58-77cea2bbd127";
const SNAPSIGN_LOGO_ICON = "https://www.figma.com/api/mcp/asset/54d31e45-6885-4a3b-9c8f-378ad7405887";
const SNAPSIGN_LOGO_TEXT = "https://www.figma.com/api/mcp/asset/0e48781a-c9af-4a0c-a124-c05808b2889d";
const SNAPSIGN_LOGO_R = "https://www.figma.com/api/mcp/asset/674f4deb-177a-4f1b-af64-22637f46ee82";
const SNAPMAIL_LOGO_ICON = "https://www.figma.com/api/mcp/asset/18ef0ed5-75a9-4232-b039-889afaa07619";
const SNAPMAIL_LOGO_TEXT = "https://www.figma.com/api/mcp/asset/efee9641-3411-46a5-a68c-4336a928e83a";
const SNAPMAIL_LOGO_R = "https://www.figma.com/api/mcp/asset/046dd136-0372-44b9-b431-51c95e48e7a1";

function Home() {
  const { language } = useLanguage();
  const location = useLocation();
  
  useEffect(() => {
    // Handle scroll to section when navigating from another page
    if (location.state?.scrollTo) {
      const hash = location.state.scrollTo;
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const navbarHeight = 56;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - navbarHeight - 20;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [location]);
  
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="home-page"
    >
      <section className="hero-section">
        <div className="hero-container">
          <AnimatedSection animation="slideUp">
            <div className="hero-title-wrapper">
              <div className="hero-title-line">
                <span className="hero-text-black">{getTranslation(language, 'hero.sendEmails')} </span>
                <span className="hero-text-gray">{getTranslation(language, 'hero.thru')}</span>
                <img 
                  src={DAT_LOGO_URL} 
                  alt="DAT" 
                  className="hero-logo-dat"
                />
                <span className="hero-text-gray">{getTranslation(language, 'hero.or')}</span>
                <img 
                  src={TRUCKSTOP_LOGO_URL} 
                  alt="Truckstop" 
                  className="hero-logo-truckstop"
                />
              </div>
              <div className="hero-title-line">
                <img 
                  src={SIGN_VECTOR_URL} 
                  alt="Sign" 
                  className="hero-sign-vector"
                />
                <span className="hero-text-gray">{getTranslation(language, 'hero.ratecons')}</span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slideUp" delay={0.1}>
            <p className="hero-subtitle">
              {getTranslation(language, 'hero.subtitle')}
            </p>
          </AnimatedSection>

          <AnimatedSection animation="slideUp" delay={0.2}>
            <div className="hero-cta-container">
              <a 
                href="https://chromewebstore.google.com/detail/snapmail/abnhjjcjfklidfkhkefmkohhhhnmdikh?hl=en-GB&utm_source=ext_sidebar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hero-cta-button"
              >
                <img src={CHROME_ICON_URL} alt="Chrome" className="chrome-icon" />
                <span>{getTranslation(language, 'hero.ctaButton')}</span>
              </a>
              <p className="hero-cta-subtitle">
                {getTranslation(language, 'hero.ctaSubtitle')}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section id="features" className="features-section">
        <div className="features-container">
          <AnimatedSection animation="slideUp">
            <div className="features-header">
              <div className="features-badge">
                <img src={SPARKLE_ICON_URL} alt="" className="sparkle-icon" />
                <span>{getTranslation(language, 'features.badge')}</span>
              </div>
              <h2 className="features-title">{getTranslation(language, 'features.title')}</h2>
              <p className="features-subtitle">{getTranslation(language, 'features.subtitle')}</p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slideUp" delay={0.1}>
            <div className="features-cards-new">
              <div className="feature-card-split">
                <div className="feature-card-split-top feature-card-green">
                  <div className="feature-card-split-content">
                    <div className="feature-card-split-header">
                      <div className="feature-card-logo">
                        <img src={SNAPSIGN_LOGO_ICON} alt="" className="logo-icon" />
                        <img src={SNAPSIGN_LOGO_TEXT} alt="SNAPSIGN" className="logo-text" />
                        <img src={SNAPSIGN_LOGO_R} alt="" className="logo-r" />
                      </div>
                      <h3>{getTranslation(language, 'features.card2.title')}</h3>
                    </div>
                    <p>{getTranslation(language, 'features.card2.description')}</p>
                  </div>
                </div>
                <div className="feature-card-split-bottom feature-card-green">
                  <div className="feature-card-split-image">
                    <img src={FEATURE_SIGN_PDF_SCREENSHOT} alt="Sign PDFs inside Gmail" />
                  </div>
                </div>
              </div>
              <div className="feature-card-split">
                <div className="feature-card-split-top feature-card-blue">
                  <div className="feature-card-split-content">
                    <div className="feature-card-split-header">
                      <div className="feature-card-logo">
                        <img src={SNAPMAIL_LOGO_ICON} alt="" className="logo-icon" />
                        <img src={SNAPMAIL_LOGO_TEXT} alt="SNAPMAIL" className="logo-text" />
                        <img src={SNAPMAIL_LOGO_R} alt="" className="logo-r" />
                      </div>
                      <h3>{getTranslation(language, 'features.card1.title')}</h3>
                    </div>
                    <p>{getTranslation(language, 'features.card1.description')}</p>
                  </div>
                </div>
                <div className="feature-card-split-bottom feature-card-blue">
                  <div className="feature-card-split-image">
                    <img src={FEATURE_SEND_EMAIL_SCREENSHOT} alt="Send emails from load board" />
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slideUp" delay={0.2}>
            <div className="integrations-section">
              <div className="integrations-left">
                <h2>{getTranslation(language, 'features.integrations.title')}</h2>
                <p>{getTranslation(language, 'features.integrations.subtitle')}</p>
              </div>
              <div className="integrations-divider"></div>
              <div className="integrations-logos">
                <img src={DAT_LOGO_SMALL_URL} alt="DAT" className="integration-logo-dat" />
                <img src={TRUCKSTOP_LOGO_SMALL_URL} alt="Truckstop" className="integration-logo-truckstop" />
                <img src={GMAIL_LOGO_URL} alt="Gmail" className="integration-logo-gmail" />
              </div>
              <div className="integrations-divider"></div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section id="feedback" className="feedback-section">
        <div className="feedback-container">
          <AnimatedSection animation="slideUp">
            <div className="feedback-header">
              <div className="feedback-badge">
                <img src={USER_ICON_URL} alt="" className="user-icon" />
                <span>{getTranslation(language, 'feedback.badge')}</span>
              </div>
              <h2 className="feedback-title">{getTranslation(language, 'feedback.title')}</h2>
              <p className="feedback-subtitle">{getTranslation(language, 'feedback.subtitle')}</p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slideUp" delay={0.1}>
            <div className="feedback-cards">
              <div className="feedback-card">
                <div className="feedback-user">
                  <div className="feedback-avatar">
                    <img src={USER_AVATAR_URL} alt="" />
                  </div>
                  <div className="feedback-user-info">
                    <h3>{getTranslation(language, 'feedback.card1.name')}</h3>
                    <p>{getTranslation(language, 'feedback.card1.company')}</p>
                  </div>
                </div>
                <p className="feedback-text">{getTranslation(language, 'feedback.card1.text')}</p>
              </div>

              <div className="feedback-card">
                <div className="feedback-user">
                  <div className="feedback-avatar">
                    <img src={USER_AVATAR2_URL} alt="" />
                  </div>
                  <div className="feedback-user-info">
                    <h3>{getTranslation(language, 'feedback.card2.name')}</h3>
                    <p>{getTranslation(language, 'feedback.card2.company')}</p>
                  </div>
                </div>
                <p className="feedback-text">{getTranslation(language, 'feedback.card2.text')}</p>
              </div>

              <div className="feedback-card">
                <div className="feedback-user">
                  <div className="feedback-avatar">
                    <img src={USER_AVATAR_URL} alt="" />
                  </div>
                  <div className="feedback-user-info">
                    <h3>{getTranslation(language, 'feedback.card3.name')}</h3>
                    <p>{getTranslation(language, 'feedback.card3.company')}</p>
                  </div>
                </div>
                <p className="feedback-text">{getTranslation(language, 'feedback.card3.text')}</p>
              </div>

              <div className="feedback-card">
                <div className="feedback-user">
                  <div className="feedback-avatar">
                    <img src={USER_AVATAR_URL} alt="" />
                  </div>
                  <div className="feedback-user-info">
                    <h3>{getTranslation(language, 'feedback.card4.name')}</h3>
                    <p>{getTranslation(language, 'feedback.card4.company')}</p>
                  </div>
                </div>
                <p className="feedback-text">{getTranslation(language, 'feedback.card4.text')}</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section id="privacy" className="privacy-section">
        <div className="privacy-container">
          <AnimatedSection animation="slideUp">
            <div className="privacy-header">
              <div className="privacy-badge">
                <img src={PRIVACY_ICON_URL} alt="" className="privacy-icon" />
                <span>{getTranslation(language, 'privacy.badge')}</span>
              </div>
              <h2 className="privacy-title">{getTranslation(language, 'privacy.title')}</h2>
              <p className="privacy-subtitle">{getTranslation(language, 'privacy.subtitle')}</p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slideUp" delay={0.1}>
            <div className="privacy-cards">
              <div className="privacy-card">
                <div className="privacy-card-header">
                  <span className="privacy-card-tag email-tag">{getTranslation(language, 'privacy.card1.tag')}</span>
                  <h3>{getTranslation(language, 'privacy.card1.title')}</h3>
                  <p>{getTranslation(language, 'privacy.card1.description').split('\n').map((line, i) => (
                    <span key={i}>{line}{i === 0 && <br />}</span>
                  ))}</p>
                </div>
                <div className="templates-list">
                  <div className="template-item">
                    <div>
                      <div className="template-title">Template 5</div>
                      <div className="template-desc">
                        Load information from <span className="template-var">{'{{origin}}'}</span> to <span className="template-var">{'{{destination}}'}</span>
                      </div>
                    </div>
                  </div>
                  <div className="template-item">
                    <div>
                      <div className="template-title">Template 4</div>
                      <div className="template-desc">
                        Load info please <span className="template-var">{'{{ref}}'}</span>
                      </div>
                    </div>
                  </div>
                  <div className="template-item template-encoded">
                    <div>
                      <div className="template-title">TWlsZXN0b25lIFJldHJv</div>
                      <div className="template-desc-muted">MjowMCAtIDM6MDBQTQ==</div>
                    </div>
                    <div className="template-avatars">
                      <img src={AVATAR1_URL} alt="" className="template-avatar" />
                      <img src={AVATAR2_URL} alt="" className="template-avatar" />
                    </div>
                  </div>
                </div>
                <div className="privacy-card-divider"></div>
              </div>

              <div className="privacy-card">
                <div className="privacy-card-header">
                  <span className="privacy-card-tag pdf-tag">{getTranslation(language, 'privacy.card2.tag')}</span>
                  <h3>{getTranslation(language, 'privacy.card2.title')}</h3>
                  <p>{getTranslation(language, 'privacy.card2.description')}</p>
                </div>
                <div className="pdf-preview">
                  <img src={PDF_ICON_URL} alt="PDF" className="pdf-icon-large" />
                  <h4 className="pdf-title">{getTranslation(language, 'privacy.pdf.title')}</h4>
                  <div className="pdf-details">
                    <p>{getTranslation(language, 'privacy.pdf.carrier')}</p>
                    <p>{getTranslation(language, 'privacy.pdf.broker')}</p>
                    <p>&nbsp;</p>
                    <p>{getTranslation(language, 'privacy.pdf.origin')}</p>
                    <p>{getTranslation(language, 'privacy.pdf.destination')}</p>
                    <p>&nbsp;</p>
                    <p>{getTranslation(language, 'privacy.pdf.ready')}</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slideUp" delay={0.2}>
            <div className="privacy-bottom">
              <div className="privacy-shield-card">
                <img src={SHIELD_LARGE_URL} alt="Private by design" className="shield-icon-large" />
                <div className="privacy-shield-content">
                  <h3>{getTranslation(language, 'privacy.shield.title')}</h3>
                  <p>{getTranslation(language, 'privacy.shield.subtitle')}</p>
                </div>
              </div>
              <p className="privacy-disclaimer">
                {getTranslation(language, 'privacy.disclaimer')}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="explanation-section">
        <div className="explanation-container">
          <AnimatedSection animation="slideUp">
            <div className="explanation-content">
              <p>
                {getTranslation(language, 'explanation.paragraph1')}
              </p>
              <p>&nbsp;</p>
              <p>
                {getTranslation(language, 'explanation.paragraph2')}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.main>
  );
}

export default memo(Home);
