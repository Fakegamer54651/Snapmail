import { memo } from 'react';
import { motion } from 'framer-motion';
import './PrivacyPolicy.css';

function PrivacyPolicy() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="privacy-policy-page"
    >
      <div className="privacy-policy-container">
        <header className="privacy-policy-header">
          <h1>SNAPTOOLS — PRIVACY POLICY</h1>
          <p className="privacy-policy-date">Last updated on 09 December 2025</p>
        </header>

        <div className="privacy-policy-content">
          <section className="privacy-section-block">
            <h2>TL;DR</h2>
            <ul>
              <li>We only collect what is required for SnapTools to work.</li>
              <li>We do not read or store your personal emails.</li>
              <li>We do not store your PDFs<br />(only temporary technical caching up to ~5 minutes).</li>
              <li>We do not sell data.</li>
              <li>We do not run invasive tracking or ads.</li>
              <li>You can delete your data and your account anytime.</li>
            </ul>
            <p className="privacy-tagline">We process. We don't store.</p>
          </section>

          <section className="privacy-section-block">
            <div className="privacy-section-title">
              <h2>What This Policy Covers</h2>
              <p className="privacy-intro">This Privacy Policy explains what information SnapTools ("we", "our", "the Service") collects, how it is used, and what your rights are when using:</p>
            </div>
            <ul>
              <li>SnapTools Chrome Extension</li>
              <li>SnapTools Web App</li>
              <li>Related services</li>
            </ul>
            <p>SnapTools is built primarily for professional dispatchers and logistics workflows.</p>
          </section>

          <section className="privacy-section-block">
            <div className="privacy-section-title">
              <h2>How You Create an Account</h2>
              <p className="privacy-intro">You sign in using Google OAuth.</p>
            </div>
            <div className="privacy-subsection">
              <p>We receive and store only:</p>
              <ul>
                <li>Your email address</li>
                <li>Your first name</li>
                <li>Your last name</li>
              </ul>
            </div>
            <div className="privacy-subsection">
              <p>This is used only to:</p>
              <ul>
                <li>Create your SnapTools account</li>
                <li>Let you log back in</li>
                <li>Sync your templates and drivers across sessions</li>
              </ul>
            </div>
            <div className="privacy-subsection">
              <p className="privacy-bold">We do not:</p>
              <ul>
                <li>Access your Google password</li>
                <li>Post anything without your action</li>
                <li>Use your account for advertising</li>
              </ul>
            </div>
          </section>

          <section className="privacy-section-block">
            <h2>Data You Actively Store Inside SnapTools</h2>
            <div className="privacy-subsection">
              <p className="privacy-intro">These are stored in your account so your workflows work properly:</p>
              <ul>
                <li>Email templates</li>
                <li>Driver information</li>
                <li>Your account profile</li>
                <li>Usage counters (for example: number of emails sent)</li>
              </ul>
            </div>
            <div className="privacy-subsection">
              <p>You can delete:</p>
              <ul>
                <li>Templates</li>
                <li>Drivers</li>
                <li>Account (by request via email)</li>
              </ul>
            </div>
          </section>

          <section className="privacy-section-block">
            <div className="privacy-section-title">
              <h2>Email Access & Gmail API (Important)</h2>
              <p className="privacy-intro">SnapTools uses the Gmail API only to perform actions you explicitly trigger.</p>
            </div>
            <div className="privacy-subsection">
              <p>We may temporarily access:</p>
              <ul>
                <li>Email message IDs</li>
                <li>PDF attachment locations</li>
                <li>Template selection data</li>
              </ul>
            </div>
            <div className="privacy-subsection">
              <p>We do NOT:</p>
              <ul>
                <li>Store your email body</li>
                <li>Store full sent messages</li>
                <li>Read private conversations manually</li>
                <li>Train AI or analytics on your messages</li>
                <li>Track who you message or what you say</li>
              </ul>
            </div>
            <div className="privacy-subsection">
              <p>Email access exists <strong>only so the extension can:</strong></p>
              <ul>
                <li>Detect where to inject buttons</li>
                <li>Detect attached PDFs</li>
                <li>Send templates only when you press "Send"</li>
              </ul>
            </div>
          </section>

          <section className="privacy-section-block">
            <h2>PDF Files & E-Signing</h2>
            <ul>
              <li>PDFs are fetched only when you press "Sign"</li>
              <li>PDFs may be cached temporarily (up to ~3–5 minutes) for technical stability</li>
              <li>This temporary cache is automatically cleared</li>
              <li>Signed PDFs are downloaded directly to your device</li>
              <li>Signed files are never permanently stored on our servers</li>
            </ul>
            <div className="privacy-subsection">
              <p>We do NOT:</p>
              <ul>
                <li>Keep a copy of your signed documents</li>
                <li>Scan PDF contents</li>
                <li>Store legal or freight documents long-term</li>
              </ul>
            </div>
          </section>

          <section className="privacy-section-block">
            <h2>Temporary Technical Data</h2>
            <div className="privacy-subsection">
              <p>Some technical data may exist briefly to allow the system to work correctly:</p>
              <ul>
                <li>Temporary PDF cache (up to ~5 minutes)</li>
                <li>Temporary message IDs (up to ~5 minutes)</li>
                <li>Temporary template reference during sending</li>
              </ul>
            </div>
            <p>This data is used <strong>only to make features work reliably</strong>, not for analytics.</p>
          </section>

          <section className="privacy-section-block">
            <h2>Logs & Error Reports</h2>
            <div className="privacy-subsection">
              <p>We store technical error logs only when:</p>
              <ul>
                <li>The extension crashes</li>
                <li>A feature fails</li>
                <li>A bug occurs</li>
              </ul>
            </div>
            <div className="privacy-subsection">
              <p>This may include:</p>
              <ul>
                <li>Error type</li>
                <li>Short technical stack trace</li>
              </ul>
            </div>
            <div className="privacy-subsection">
              <p>We do NOT log:</p>
              <ul>
                <li>Email content</li>
                <li>PDF contents</li>
                <li>Personal messages</li>
              </ul>
            </div>
            <p>This data exists only to improve stability and fix issues.</p>
          </section>

          <section className="privacy-section-block">
            <h2>Analytics & Tracking</h2>
            <div className="privacy-subsection">
              <p>We currently use basic Google Analytics on the extension for:</p>
              <ul>
                <li>Active users</li>
                <li>Basic usage counts</li>
              </ul>
            </div>
            <div className="privacy-subsection">
              <p>We do NOT log:</p>
              <ul>
                <li>Run tracking pixels</li>
                <li>Track behavior across websites</li>
                <li>Build marketing profiles</li>
                <li>Sell usage data</li>
              </ul>
            </div>
            <p>If analytics usage changes in the future, this policy will be updated.</p>
          </section>

          <section className="privacy-section-block">
            <h2>Payments</h2>
            <div className="privacy-subsection">
              <p>SnapTools is currently:</p>
              <ul>
                <li>Free to use</li>
                <li>No payments collected</li>
                <li>No credit card data stored</li>
              </ul>
            </div>
            <p>If paid features ever exist in the future, this policy will be updated before any changes launch.</p>
          </section>

          <section className="privacy-section-block">
            <h2>Third-Party Services</h2>
            <div className="privacy-subsection">
              <p>SnapTools connects with:</p>
              <ul>
                <li>Google / Gmail API</li>
                <li>Chrome Web Store</li>
                <li>Netcup (our hosting provider)</li>
              </ul>
            </div>
            <div className="privacy-subsection">
              <p>We also interact with:</p>
              <ul>
                <li>DAT (via browser-level page parsing)</li>
                <li>Truckstop (via browser-level page parsing)</li>
              </ul>
            </div>
            <p>
              We do not receive official API data from DAT or Truckstop.<br />
              Each third-party platform operates under its own privacy policies.
            </p>
          </section>

          <section className="privacy-section-block">
            <h2>Data Deletion & Your Rights</h2>
            <div className="privacy-subsection">
              <p>You have the right to:</p>
              <ul>
                <li>Delete your templates</li>
                <li>Delete your drivers</li>
                <li>Request full account deletion</li>
              </ul>
            </div>
            <p>
              If a self-service delete button is not available yet, you may request deletion<br />
              by emailing:
            </p>
            <p className="privacy-email">support@snaptools.pro</p>
            <p>Your account and related stored data will be permanently removed.</p>
          </section>

          <section className="privacy-section-block">
            <h2>Data Security</h2>
            <div className="privacy-subsection">
              <p>
                We use industry-standard infrastructure and access control.<br />
                However:
              </p>
              <ul>
                <li>No system is ever 100% risk-free</li>
                <li>We do not promise "perfect security"</li>
                <li>We reduce risk primarily by not storing sensitive data long-term</li>
              </ul>
            </div>
          </section>

          <section className="privacy-section-block">
            <h2>International Use & Legal Basis</h2>
            <p>
              SnapTools is available worldwide.<br />
              Most users are based in the United States logistics industry.
            </p>
            <p>
              By using SnapTools, you agree to this Privacy Policy<br />
              regardless of your country of residence.
            </p>
          </section>

          <section className="privacy-section-block">
            <h2>Policy Updates</h2>
            <div className="privacy-subsection">
              <p>If this policy changes:</p>
              <ul>
                <li>The updated version will be published on this page</li>
                <li>The date at the top will be updated</li>
              </ul>
            </div>
          </section>

          <section className="privacy-section-block">
            <h2>Contact</h2>
            <p>For privacy questions, data requests, or deletion requests:</p>
            <p className="privacy-email">support@snaptools.pro</p>
          </section>
        </div>
      </div>
    </motion.main>
  );
}

export default memo(PrivacyPolicy);
