import { memo } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection, { AnimatedItem } from '../components/ui/AnimatedSection';
import Button from '../components/ui/Button';
import './Pricing.css';

const plans = [
  {
    name: 'Starter',
    price: '$29',
    period: '/month',
    features: ['Up to 10 users', '5GB storage', 'Basic support', 'Core features']
  },
  {
    name: 'Pro',
    price: '$99',
    period: '/month',
    popular: true,
    features: ['Up to 50 users', '50GB storage', 'Priority support', 'All features', 'Advanced analytics']
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    features: ['Unlimited users', 'Unlimited storage', '24/7 support', 'Custom features', 'Dedicated manager']
  }
];

function Pricing() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="pricing-page"
    >
      <section className="pricing-hero section">
        <div className="container">
          <AnimatedSection animation="slideUp" className="text-center">
            <h1 className="page-title">
              Simple, Transparent
              <br />
              <span className="text-gradient">Pricing</span>
            </h1>
            <p className="page-description">
              Choose the perfect plan for your team. No hidden fees, cancel anytime.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="pricing-plans section">
        <div className="container">
          <AnimatedSection stagger staggerDelay={0.15}>
            <div className="grid grid-3">
              {plans.map((plan) => (
                <AnimatedItem key={plan.name} animation="slideUp">
                  <div className={`pricing-card card ${plan.popular ? 'pricing-card-popular' : ''}`}>
                    {plan.popular && <div className="pricing-badge">Most Popular</div>}
                    <h3 className="pricing-name">{plan.name}</h3>
                    <div className="pricing-price">
                      <span className="price-amount">{plan.price}</span>
                      <span className="price-period">{plan.period}</span>
                    </div>
                    <ul className="pricing-features">
                      {plan.features.map((feature) => (
                        <li key={feature}>
                          <span className="checkmark">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant={plan.popular ? 'primary' : 'outline'} size="lg">
                      Get Started
                    </Button>
                  </div>
                </AnimatedItem>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.main>
  );
}

export default memo(Pricing);

