import { memo } from 'react';
import { motion } from 'framer-motion';
import { useRive } from '@rive-app/react-canvas';
import AnimatedSection, { AnimatedItem } from '../components/ui/AnimatedSection';
import './Features.css';

function RivePlayer({ src }) {
  const { RiveComponent } = useRive({
    src: src,
    autoplay: true,
    shouldDisableRiveListeners: true,
  });

  return (
    <div className="rive-wrapper">
      <RiveComponent />
    </div>
  );
}

const featuresList = [
  {
    title: 'PDF Sign',
    description: 'Sign PDFs instantly without leaving Gmail.',
    rive: '/rive/FeaturePDF.riv',
    details: ['Live updates', 'Concurrent editing', 'Team presence']
  },
  {
    title: 'Smart Email',
    description: 'Insert driver info instantly with slash commands.',
    rive: '/rive/FeatureEmail.riv',
    details: ['Custom reports', 'Data visualization', 'Export capabilities']
  },
  {
    title: 'API Integration',
    description: 'Connect with your favorite tools using our comprehensive REST API and webhooks.',
    icon: '🔗',
    details: ['RESTful API', 'Webhooks', 'OAuth support']
  },
  {
    title: 'Automated Workflows',
    description: 'Streamline your processes with intelligent automation and custom workflow builders.',
    icon: '⚙️',
    details: ['Custom triggers', 'Action chains', 'Conditional logic']
  },
  {
    title: 'Enterprise Security',
    description: 'Bank-level security with end-to-end encryption, SSO, and compliance certifications.',
    icon: '🛡️',
    details: ['256-bit encryption', 'SSO/SAML', 'SOC 2 compliant']
  },
  {
    title: '24/7 Support',
    description: 'Get help whenever you need it with our dedicated support team available around the clock.',
    icon: '💬',
    details: ['Live chat', 'Email support', 'Priority assistance']
  }
];

function Features() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="features-page"
    >
      <section className="features-hero section">
        <div className="container">
          <AnimatedSection animation="slideUp" className="text-center">
            <h1 className="page-title">
              Powerful Features for
              <br />
              <span className="text-gradient">Modern Teams</span>
            </h1>
            <p className="page-description">
              Everything you need to build, manage, and scale your business in one comprehensive platform.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="features-list section">
        <div className="container">
          <AnimatedSection stagger staggerDelay={0.1}>
            <div className="grid grid-2">
              {featuresList.map((feature, index) => (
                <AnimatedItem key={feature.title} animation="slideUp">
                  <div className={`feature-item card ${index % 2 === 0 ? 'feature-item-accent' : ''}`}>
                    <div className="feature-item-icon">
                      {feature.rive ? (
                        <RivePlayer src={feature.rive} />
                      ) : (
                        feature.icon
                      )}
                    </div>
                    <div className="feature-item-content">
                      <h3 className="feature-item-title">{feature.title}</h3>
                      <p className="feature-item-description">{feature.description}</p>
                      <ul className="feature-item-details">
                        {feature.details.map((detail) => (
                          <li key={detail}>
                            <span className="checkmark">✓</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AnimatedItem>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="features-cta section">
        <div className="container">
          <AnimatedSection animation="scale">
            <div className="features-cta-content text-center">
              <h2>See It In Action</h2>
              <p className="section-description">
                Experience the power of SnapTools with a personalized demo from our team.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.main>
  );
}

export default memo(Features);
