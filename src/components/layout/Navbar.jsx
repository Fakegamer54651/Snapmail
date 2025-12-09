import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { getTranslation } from '../../translations';
import './Navbar.css';

const LOGO_URL = "https://www.figma.com/api/mcp/asset/efa03553-ec2a-4d9f-b31c-648084987728";
const CHROME_ICON_URL = "https://www.figma.com/api/mcp/asset/c7aef9f3-c1e9-4f19-8d2c-4a96376850a5";

const languages = [
  { code: 'EN', name: 'English' },
  { code: 'UZ', name: 'O\'zbekcha' },
  { code: 'RU', name: 'Русский' }
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage } = useLanguage();
  const langDropdownRef = useRef(null);

  const navLinks = [
    { name: getTranslation(language, 'nav.features'), path: '/#features', isHash: true },
    { name: getTranslation(language, 'nav.feedback'), path: '/#feedback', isHash: true },
    { name: getTranslation(language, 'nav.privacy'), path: '/#privacy', isHash: true }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target)) {
        setIsLangDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleLangDropdown = () => {
    setIsLangDropdownOpen(!isLangDropdownOpen);
  };

  const handleLanguageChange = (langCode) => {
    setLanguage(langCode);
    setIsLangDropdownOpen(false);
  };

  const handleNavClick = (e, link) => {
    if (link.isHash) {
      e.preventDefault();
      const hash = link.path.split('#')[1];
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
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/" className="navbar-logo">
            <img src={LOGO_URL} alt="SNAPTOOLS" />
          </Link>

          <div className={`navbar-links ${isMobileMenuOpen ? 'navbar-links-open' : ''}`}>
            {navLinks.map((link) => (
              link.isHash ? (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => handleNavClick(e, link)}
                  className="navbar-link"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`navbar-link ${location.pathname === link.path ? 'navbar-link-active' : ''}`}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>
        </div>

        <div className="navbar-actions">
          <div className="navbar-lang-wrapper" ref={langDropdownRef}>
            <button className="navbar-link navbar-lang" onClick={toggleLangDropdown}>
              {language}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="arrow-down">
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
              </svg>
            </button>
            {isLangDropdownOpen && (
              <div className="lang-dropdown">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className={`lang-dropdown-item ${language === lang.code ? 'active' : ''}`}
                    onClick={() => handleLanguageChange(lang.code)}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>
          <a href="https://dev.admin.snaptools.pro/signin" className="navbar-link">{getTranslation(language, 'nav.login')}</a>
          <a 
            href="https://chromewebstore.google.com/detail/snapmail/abnhjjcjfklidfkhkefmkohhhhnmdikh?hl=en-GB&utm_source=ext_sidebar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="navbar-cta"
          >
            <img src={CHROME_ICON_URL} alt="Chrome" className="chrome-icon" />
            {getTranslation(language, 'nav.addToChrome')}
          </a>
        </div>

        <button
          className="navbar-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className={`navbar-toggle-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`navbar-toggle-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`navbar-toggle-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
