import React from 'react';
import './Terms.css';

const Terms = () => {
  return (
    <div className="terms-page">
      <div className="terms-header">
        <h1>SNAPTOOLS — TERMS & CONDITIONS</h1>
        <p className="terms-updated">Last updated on 09 December 2025</p>
      </div>

      <div className="terms-content">
        <section className="terms-section">
          <h2>Agreement to These Terms</h2>
          <p>By accessing or using SnapTools (the "Service"), including the Chrome Extension and Web App, you agree to be bound by these Terms & Conditions.</p>
          <p className="terms-highlight">If you do not agree, you must not use SnapTools.</p>
        </section>

        <section className="terms-section">
          <h2>What SnapTools Is</h2>
          <p>SnapTools is a productivity tool built for dispatchers and logistics workflows. It provides features such as:</p>
          <ul>
            <li>Email templates</li>
            <li>PDF signing</li>
            <li>Driver data organization</li>
            <li>Email workflow automation</li>
          </ul>
          <p>SnapTools is provided as-is and may change at any time.</p>
        </section>

        <section className="terms-section">
          <h2>Your Account</h2>
          <p>You access SnapTools using Google OAuth.</p>
          <p className="terms-subheading">You are responsible for:</p>
          <ul>
            <li>Keeping access to your Google account secure</li>
            <li>All activity performed under your SnapTools account</li>
          </ul>
          <p className="terms-subheading">You agree not to:</p>
          <ul>
            <li>Share your account</li>
            <li>Use someone else's account</li>
            <li>Bypass access controls</li>
          </ul>
        </section>

        <section className="terms-section">
          <h2>Acceptable Use</h2>
          <p>You agree NOT to use SnapTools for:</p>
          <ul>
            <li>Spam, phishing, or mass unsolicited emails</li>
            <li>Fraud, identity theft, or deception</li>
            <li>Harassment or illegal communication</li>
            <li>Sending content that violates any law</li>
          </ul>
          <p>SnapTools may suspend or restrict your access at any time if misuse is detected.</p>
        </section>

        <section className="terms-section">
          <h2>Emails, Templates & Automation</h2>
          <p>You acknowledge that:</p>
          <ul>
            <li>All emails sent using SnapTools are fully your responsibility</li>
            <li>You control the content, recipients, and usage</li>
            <li>SnapTools does not guarantee delivery</li>
            <li>Third-party services (Gmail, providers) control actual sending behavior</li>
          </ul>
          <p>We are not responsible for:</p>
          <ul>
            <li>Failed deliveries</li>
            <li>Incorrect recipients</li>
            <li>Misused templates</li>
            <li>Account penalties imposed by email providers</li>
          </ul>
        </section>

        <section className="terms-section">
          <h2>PDF Signing & Documents</h2>
          <p className="terms-subheading">You understand and agree that:</p>
          <ul>
            <li>SnapTools provides tools, not legal advice</li>
            <li>Signed documents are handled on your device</li>
            <li>You are responsible for:
              <ul className="terms-nested-list">
                <li>Accuracy of documents</li>
                <li>Legal validity</li>
                <li>Regulatory compliance</li>
              </ul>
            </li>
          </ul>
          <p>SnapTools is not liable for:</p>
          <ul>
            <li>Invalid contracts</li>
            <li>Improper document usage</li>
            <li>Legal disputes related to signed files</li>
          </ul>
        </section>

        <section className="terms-section">
          <h2>Third-Party Services & Platforms</h2>
          <p>SnapTools depends on external services including:</p>
          <ul>
            <li>Google / Gmail</li>
            <li>Chrome Web Store</li>
            <li>DAT (page-level access only)</li>
            <li>Truckstop (page-level access only)</li>
            <li>Hosting providers</li>
          </ul>
          <p>We are not responsible for:</p>
          <ul>
            <li>Downtime of third-party platforms</li>
            <li>API failures</li>
            <li>Account penalties</li>
            <li>Data loss caused by third parties</li>
          </ul>
          <p>Their rules, limits, and failures are outside our control.</p>
        </section>

        <section className="terms-section">
          <h2>No Business Guarantees</h2>
          <p>SnapTools does NOT guarantee that you will:</p>
          <ul>
            <li>Save money</li>
            <li>Increase profits</li>
            <li>Improve delivery performance</li>
            <li>Avoid business losses</li>
          </ul>
          <p>You use SnapTools at your own business risk.</p>
          <p>We are NOT responsible for:</p>
          <ul>
            <li>Lost loads</li>
            <li>Missed deliveries</li>
            <li>Dispatcher mistakes</li>
            <li>Financial damages</li>
            <li>Contract failures</li>
          </ul>
        </section>

        <section className="terms-section">
          <h2>Free Service & Future Changes</h2>
          <p>SnapTools is currently offered as a free service, with no payments required.</p>
          <p>"Free forever" refers to the lifetime of the SnapTools product and company — meaning the service is intended to remain free for as long as SnapTools is actively maintained and operated.</p>
          <p>We reserve the right to:</p>
          <ul>
            <li>Add new features</li>
            <li>Change existing features</li>
            <li>Remove features</li>
            <li>Improve or restructure the service</li>
          </ul>
          <p>If any paid features or pricing model are ever introduced in the future:</p>
          <ul>
            <li>Users will be clearly notified in advance</li>
            <li>No user will ever be charged without explicit consent</li>
          </ul>
          <p>If the SnapTools service is discontinued, the free offering naturally ends with it.</p>
        </section>

        <section className="terms-section">
          <h2>Suspension & Termination</h2>
          <p>We reserve the right to:</p>
          <ul>
            <li>Suspend access</li>
            <li>Restrict features</li>
            <li>Permanently terminate accounts</li>
          </ul>
          <p>This may happen without notice if:</p>
          <ul>
            <li>Abuse is detected</li>
            <li>Laws are violated</li>
            <li>System integrity is threatened</li>
          </ul>
          <p>You may stop using SnapTools at any time.</p>
        </section>

        <section className="terms-section">
          <h2>No Warranties</h2>
          <p>SnapTools is provided:</p>
          <ul>
            <li>"As is"</li>
            <li>"As available"</li>
          </ul>
          <p>We make no warranties regarding:</p>
          <ul>
            <li>Uptime</li>
            <li>Performance</li>
            <li>Accuracy</li>
            <li>Reliability</li>
            <li>Bug-free operation</li>
          </ul>
        </section>

        <section className="terms-section">
          <h2>Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, SnapTools and its creator shall not be liable for:</p>
          <ul>
            <li>Direct damages</li>
            <li>Indirect damages</li>
            <li>Business losses</li>
            <li>Legal disputes</li>
            <li>Data loss</li>
            <li>Lost revenue</li>
          </ul>
          <p>You agree that use of SnapTools is entirely at your own risk.</p>
        </section>

        <section className="terms-section">
          <h2>Intellectual Property</h2>
          <p>All software, designs, and branding belonging to SnapTools remain the property of SnapTools.</p>
          <p>You may not:</p>
          <ul>
            <li>Resell the software</li>
            <li>Reverse engineer it</li>
            <li>Copy features for commercial redistribution</li>
          </ul>
        </section>

        <section className="terms-section">
          <h2>International Use & Governing Law</h2>
          <p>SnapTools is available globally.</p>
          <p>These Terms shall be governed by applicable international commercial laws and, where required, the laws of the service operator's jurisdiction.</p>
        </section>

        <section className="terms-section">
          <h2>Changes to These Terms</h2>
          <p>We may update these Terms at any time.</p>
          <p>When we do:</p>
          <ul>
            <li>The updated date will change</li>
            <li>The new Terms apply immediately after publication</li>
          </ul>
        </section>

        <section className="terms-section">
          <h2>Contact</h2>
          <p>For questions about these Terms:</p>
          <p className="terms-contact-email">support@snaptools.pro</p>
        </section>
      </div>
    </div>
  );
};

export default Terms;
