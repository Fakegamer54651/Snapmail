import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { getTranslation } from '../../translations';
import './Footer.css';

const LOGO_URL = "https://www.figma.com/api/mcp/asset/efa03553-ec2a-4d9f-b31c-648084987728";

function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <Link to="/">
            <img src={LOGO_URL} alt="SNAPTOOLS" />
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
