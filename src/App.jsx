import { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

const LOGO_URL = "https://www.figma.com/api/mcp/asset/efa03553-ec2a-4d9f-b31c-648084987728";

function MobileMessage() {
  return (
    <div style={{
      display: 'none',
      minHeight: '100vh',
      backgroundColor: '#ffffff',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px',
      textAlign: 'center'
    }} className="mobile-only">
      <img src={LOGO_URL} alt="SNAPTOOLS" style={{ width: '171px', height: '16px', marginBottom: '40px' }} />
      <h2 style={{
        fontFamily: 'Poppins, sans-serif',
        fontSize: '24px',
        fontWeight: '600',
        color: '#0a0a0a',
        marginBottom: '16px',
        lineHeight: '1.4'
      }}>
        This page is only available thru desktop or laptop
      </h2>
      <p style={{
        fontFamily: 'Poppins, sans-serif',
        fontSize: '12px',
        fontWeight: '300',
        color: '#999999',
        margin: 0
      }}>
        we didn't have budget for it
      </p>
    </div>
  );
}

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Support = lazy(() => import('./pages/Support'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Terms = lazy(() => import('./pages/Terms'));

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </AnimatePresence>
  );
}

function AppContent() {
  const location = useLocation();
  const isMobileAllowedPage = location.pathname === '/privacy-policy' || location.pathname === '/terms';

  return (
    <>
      {!isMobileAllowedPage && <MobileMessage />}
      <div className={isMobileAllowedPage ? 'mobile-allowed' : 'desktop-only'}>
        <Navbar />
        <Suspense fallback={
          <div className="flex-center" style={{ minHeight: '100vh' }}>
            <div className="animate-pulse" style={{ 
              width: '48px', 
              height: '48px', 
              border: '4px solid var(--color-accent-primary)', 
              borderRadius: '50%', 
              borderTopColor: 'transparent',
              animation: 'spin 1s linear infinite'
            }}></div>
          </div>
        }>
          <AnimatedRoutes />
        </Suspense>
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

