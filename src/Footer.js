import React from "react";
import "./Footer.css";

function GithubIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function GlobeIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

function LinkedinIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function MailIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

const Footer = () => {
  return (
    <footer className="pilot-wave-footer" id="contact">
      {/* Background Rising Waves */}
      <div className="waves-stage">
        <svg
          className="wave-line wave-back"
          viewBox="0 0 1440 240"
          preserveAspectRatio="none"
        >
          <path d="M0,140 C320,240 480,40 800,160 C1120,260 1280,60 1440,140 L1440,240 L0,240 Z" />
        </svg>

        <svg
          className="wave-line wave-front"
          viewBox="0 0 1440 240"
          preserveAspectRatio="none"
        >
          <path d="M0,100 C360,200 600,30 920,130 C1200,220 1340,60 1440,100 L1440,240 L0,240 Z" />
        </svg>
      </div>

      <div className="footer-shelf">
        {/* Social Icons Shelf */}
        <div className="shelf-social-row">
          <span className="shelf-tag">CONNECT WITH ME</span>
          <div className="shelf-icons">
            <a
              href="https://github.com/vamsichowdary-gif"
              target="_blank"
              rel="noreferrer"
              className="social-dot"
              aria-label="GitHub"
              title="GitHub"
            >
              <GithubIcon className="dot-svg" />
            </a>

            <a
              href="https://vamsiportfolio.linkpc.net"
              target="_blank"
              rel="noreferrer"
              className="social-dot"
              aria-label="Portfolio"
              title="Portfolio"
            >
              <GlobeIcon className="dot-svg" />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="social-dot"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <LinkedinIcon className="dot-svg" />
            </a>

            <a
              href="mailto:naiduvamsi489@gmail.com"
              className="social-dot"
              aria-label="Email"
              title="Email"
            >
              <MailIcon className="dot-svg" />
            </a>
          </div>
        </div>

        {/* Pilot Halftone Name Track */}
        <div className="pilot-letters-track">
          <span className="pilot-letter l-v" data-text="V">V</span>
          <span className="pilot-letter l-a" data-text="A">A</span>
          <span className="pilot-letter l-m" data-text="M">M</span>
          <span className="pilot-letter l-s" data-text="S">S</span>
          <span className="pilot-letter l-i" data-text="I">I</span>
        </div>

        {/* Footer Baseline */}
        <div className="footer-base">
          <p>© {new Date().getFullYear()} Potturu Vamsi. All rights reserved.</p>
          <div className="base-tags">
            <span>Built with React &amp; Supabase</span>
            <span>•</span>
            <span>ECE / 2024</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;