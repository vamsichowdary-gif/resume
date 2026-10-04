import React, { useState, useEffect, useRef } from "react";
import "./Footer.css";

// --- SVG Icons ---
function ConnectIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function GithubIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="2" r="2" />
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

function WhatsAppIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function FacebookIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TwitterIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

// --- Radial Social Icons Hub ---
const SocialConnectHub = () => {
  const [isOpen, setIsOpen] = useState(false);

  const socials = [
    { name: "GitHub", icon: GithubIcon, href: "https://github.com/vamsichowdary-gif" },
    { name: "LinkedIn", icon: LinkedinIcon, href: "https://linkedin.com" },
    { name: "Email", icon: MailIcon, href: "mailto:naiduvamsi489@gmail.com" },
    { name: "WhatsApp", icon: WhatsAppIcon, href: "https://wa.me/" },
    { name: "Instagram", icon: InstagramIcon, href: "https://instagram.com" },
    { name: "Facebook", icon: FacebookIcon, href: "https://facebook.com" },
    { name: "Twitter", icon: TwitterIcon, href: "https://twitter.com" },
  ];

  const total = socials.length;
  const radius = 80;

  return (
    <div
      className={`radial-connect-wrapper ${isOpen ? "is-open" : ""}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <div className="radial-center-btn" title="Connect">
        <ConnectIcon className="center-svg" />
      </div>

      <div className="radial-satellites">
        {socials.map((item, index) => {
          const angle = (index * (360 / total) - 90) * (Math.PI / 180);
          const x = Math.round(radius * Math.cos(angle));
          const y = Math.round(radius * Math.sin(angle));

          return (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="radial-satellite-dot"
              style={{
                "--tx": `${x}px`,
                "--ty": `${y}px`,
                "--delay": `${index * 0.025}s`,
              }}
              aria-label={item.name}
              title={item.name}
              onClick={(e) => e.stopPropagation()}
            >
              <item.icon className="dot-svg" />
            </a>
          );
        })}
      </div>
    </div>
  );
};

// --- Pixel Flow Field Text Canvas ---
const PixelFlowField = ({ text = "VAMSI" }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animationFrameId;
    let particles = [];
    const mouse = { x: -9999, y: -9999, radius: 95, isHovered: false };

    const init = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = rect.width;
      const height = rect.height;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      const offscreen = document.createElement("canvas");
      const offCtx = offscreen.getContext("2d");
      offscreen.width = width;
      offscreen.height = height;

      const fontSize = Math.min(width / (text.length * 0.72), height * 0.85);
      offCtx.font = `900 ${fontSize}px "Georgia", "Times New Roman", serif`;
      offCtx.fillStyle = "#ffffff";
      offCtx.textAlign = "center";
      offCtx.textBaseline = "middle";
      offCtx.letterSpacing = "8px";
      offCtx.fillText(text, width / 2, height / 2);

      const imgData = offCtx.getImageData(0, 0, width, height).data;
      particles = [];

      const gap = width < 640 ? 4 : 5;

      for (let y = 0; y < height; y += gap) {
        for (let x = 0; x < width; x += gap) {
          const index = (y * width + x) * 4;
          const alpha = imgData[index + 3];

          if (alpha > 128) {
            particles.push({
              originX: x,
              originY: y,
              x: x,
              y: y,
              vx: 0,
              vy: 0,
              size: gap * 0.62,
              phase: x * 0.05 + y * 0.05,
            });
          }
        }
      }
    };

    let time = 0;
    const animate = () => {
      time += 0.04;
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.hypot(dx, dy);

        let targetX = p.originX;
        let targetY = p.originY;

        // Apply interaction only to pixels near cursor
        if (mouse.isHovered && dist < mouse.radius * 1.4) {
          const influence = 1 - dist / (mouse.radius * 1.4);

          const waveX = Math.sin(time + p.originY * 0.07 + p.phase) * 3.5 * influence;
          const waveY = Math.cos(time + p.originX * 0.07 + p.phase) * 3.5 * influence;
          targetX += waveX;
          targetY += waveY;

          if (dist < mouse.radius) {
            const force = (1 - dist / mouse.radius) * 13;
            const angle = Math.atan2(dy, dx);
            p.vx -= Math.cos(angle) * force;
            p.vy -= Math.sin(angle) * force;
          }
        }

        p.vx += (targetX - p.x) * 0.12;
        p.vy += (targetY - p.y) * 0.12;
        p.vx *= 0.74;
        p.vy *= 0.74;

        p.x += p.vx;
        p.y += p.vy;

        if (mouse.isHovered && dist < mouse.radius * 0.65) {
          ctx.fillStyle = "#ffffff";
        } else {
          ctx.fillStyle = "rgba(125, 211, 252, 0.88)";
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size / 2, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.isHovered = true;
    };

    const handleMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
      mouse.isHovered = false;
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.touches[0].clientX - rect.left;
        mouse.y = e.touches[0].clientY - rect.top;
        mouse.isHovered = true;
      }
    };

    init();
    animate();

    window.addEventListener("resize", init);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseenter", () => {
      mouse.isHovered = true;
    });
    canvas.addEventListener("mouseleave", handleMouseLeave);
    canvas.addEventListener("touchmove", handleTouchMove, { passive: true });
    canvas.addEventListener("touchend", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", init);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseenter", () => {
        mouse.isHovered = true;
      });
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      canvas.removeEventListener("touchmove", handleTouchMove);
      canvas.removeEventListener("touchend", handleMouseLeave);
    };
  }, [text]);

  return (
    <div className="flow-field-container">
      <canvas ref={canvasRef} className="flow-field-canvas" />
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="pilot-wave-footer" id="contact">
      {/* Background Rising Waves */}
      <div className="waves-stage">
        <svg className="wave-line wave-back" viewBox="0 0 1440 240" preserveAspectRatio="none">
          <path d="M0,140 C320,240 480,40 800,160 C1120,260 1280,60 1440,140 L1440,240 L0,240 Z" />
        </svg>

        <svg className="wave-line wave-front" viewBox="0 0 1440 240" preserveAspectRatio="none">
          <path d="M0,100 C360,200 600,30 920,130 C1200,220 1340,60 1440,100 L1440,240 L0,240 Z" />
        </svg>
      </div>

      <div className="footer-shelf">
        {/* Connect Section */}
        <div className="shelf-social-row">
          <span className="shelf-tag">CONNECT WITH ME</span>
          <SocialConnectHub />
        </div>

        {/* Dynamic Interactive Pixel Flow Field Canvas */}
        <PixelFlowField text="VAMSI" />

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