import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { getTranslation } from '../../translations';
import './Footer.css';
import SnaptoolsLogoFooter from '../../assets/images/SnaptoolsLogoFooter.svg';

function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <Link to="/">
            <img src={SnaptoolsLogoFooter} alt="SNAPTOOLS" />
          </Link>
        </div>

        <div className="footer-links">
          <Link to="/privacy-policy">{getTranslation(language, 'footer.privacyPolicy')}</Link>
          <Link to="/terms">{getTranslation(language, 'footer.terms')}</Link>
        </div>

        <div className="footer-copyright">
          <p>{getTranslation(language, 'footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
