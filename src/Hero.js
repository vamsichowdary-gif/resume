import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Database,
  Layers3,
  Server,
  Zap,
} from "lucide-react";
import "./Hero.css";

// Native SVG for GitHub to avoid lucide-react brand export mismatches
function GithubIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const Hero = ({ imageSrc = "/og-preview.jpg" }) => {
  const canvasRef = useRef(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId = 0;
    let particles = [];

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 170,
    };

    const getParticleCount = () => {
      const width = window.innerWidth;
      if (width < 640) return 55;
      if (width < 1024) return 85;
      return 120;
    };

    const createParticles = () => {
      particles = [];
      const count = getParticleCount();
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          size: Math.random() * 2.2 + 1.2, // Larger, well-defined dots
          alpha: Math.random() * 0.35 + 0.65, // Bright 65% - 100% opacity
        });
      }
    };

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      createParticles();
    };

    const drawGlow = () => {
      const gradient = ctx.createRadialGradient(
        window.innerWidth * 0.72,
        window.innerHeight * 0.32,
        0,
        window.innerWidth * 0.72,
        window.innerHeight * 0.32,
        500
      );
      gradient.addColorStop(0, "rgba(34, 211, 238, 0.12)");
      gradient.addColorStop(0.5, "rgba(59, 130, 246, 0.05)");
      gradient.addColorStop(1, "rgba(5, 8, 22, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    };

    const drawParticles = () => {
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > window.innerWidth) p.vx *= -1;
        if (p.y < 0 || p.y > window.innerHeight) p.vy *= -1;

        // Gentle floating pull toward cursor (Aether Flow style)
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius && dist > 10) {
          p.x += (dx / dist) * 0.55;
          p.y += (dy / dist) * 0.55;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(103, 232, 249, ${p.alpha})`;
        ctx.shadowColor = "#22d3ee";
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0; // reset blur for clean canvas performance
      }
    };

    const connectParticles = () => {
      const maxDist = 115;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const opacity = (1 - dist / maxDist) * 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Direct sharp constellation link from cursor to nearby particles
        if (mouse.x > 0 && mouse.y > 0) {
          const mdx = mouse.x - particles[i].x;
          const mdy = mouse.y - particles[i].y;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);

          if (mDist < 165) {
            const cursorLineOpacity = (1 - mDist / 165) * 0.85;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(particles[i].x, particles[i].y);
            ctx.strokeStyle = `rgba(165, 243, 252, ${cursorLineOpacity})`;
            ctx.lineWidth = 1.3;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.fillStyle = "#050816";
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      drawGlow();
      connectParticles();
      drawParticles();

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    resizeCanvas();
    animate();

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  const handleCardMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const rotateX = ((e.clientY - rect.top) / rect.height - 0.5) * -6;
    const rotateY = ((e.clientX - rect.left) / rect.width - 0.5) * 6;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  };

  const handleCardLeave = (e) => {
    e.currentTarget.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("naiduvamsi489@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="vamsi-hero-section" id="home">
      {/* High-Contrast Interactive Particle Canvas */}
      <canvas ref={canvasRef} className="vamsi-canvas" />

      {/* Ambient Lighting Spheres */}
      <div className="glow-sphere sphere-cyan" />
      <div className="glow-sphere sphere-purple" />
      <div className="hero-grid-overlay" />

      <div className="vamsi-hero-content">
        <div className="vamsi-hero-grid">
          {/* Left Column: Bio & Controls */}
          <div className="hero-text-col">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="badge-status-glow"
            >
              <span className="dot-container">
                <span className="dot-ping" />
                <span className="dot-solid" />
              </span>
              <span>Available for Full-Stack &amp; Backend Roles</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="label-engineer"
            >
              <span className="accent-line" />
              Software Engineer
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hero-headline"
            >
              Hi, I'm <br />
              <span className="gradient-name">Potturu Vamsi</span>
              <span className="cyan-dot">.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="role-subtitle"
            >
              <strong>Full-Stack &amp; Backend Engineer</strong>
              <span className="separator">—</span>
              <span>Based in India</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="hero-summary"
            >
              I build robust backend systems, scalable REST APIs, and responsive
              web applications using modern technologies. Focused on clean
              architecture, reliable databases, and intuitive user experiences.
            </motion.p>

            {/* Tech Badges */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="tech-pills-row"
            >
              {[
                { icon: Code2, label: "Laravel" },
                { icon: Layers3, label: "React" },
                { icon: Database, label: "PostgreSQL" },
                { icon: Server, label: "REST APIs" },
              ].map((tech) => {
                const Icon = tech.icon;
                return (
                  <div key={tech.label} className="tech-pill-btn">
                    <Icon className="pill-icon" />
                    <span>{tech.label}</span>
                  </div>
                );
              })}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="cta-actions"
            >
              <a href="mailto:naiduvamsi489@gmail.com" className="btn-cyan">
                Get in touch
                <ArrowUpRight className="btn-icon" />
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="btn-glass"
              >
                {copied ? "✓ Copied!" : "Copy Email"}
              </button>
              <a
                href="https://github.com/vamsichowdary-gif"
                target="_blank"
                rel="noreferrer"
                className="btn-glass"
              >
                <GithubIcon className="btn-icon" />
                GitHub
                <ArrowUpRight className="btn-icon subtle" />
              </a>
            </motion.div>

            {/* Metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="stats-row"
            >
              <div className="stat-block">
                <span className="stat-num">1+</span>
                <span className="stat-label">Years Exp.</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-block">
                <span className="stat-num">15+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-block">
                <span className="stat-num cyan-text">100%</span>
                <span className="stat-label">API Focus</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: 3D Interactive Portrait */}
          <div className="hero-visual-col">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="card-3d-wrapper"
            >
              {/* Floating Badge (Top Left) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="floating-tag tag-laravel"
              >
                Laravel
              </motion.div>

              {/* Floating Badge (Bottom Right) */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="floating-tag tag-react"
              >
                React
              </motion.div>

              {/* Main 3D Card */}
              <div
                className="portrait-glass-card"
                onMouseMove={handleCardMove}
                onMouseLeave={handleCardLeave}
              >
                <div className="card-top-shine" />

                <div className="image-viewport">
                  <img
                    src={imageSrc}
                    alt="Potturu Vamsi"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/og-preview.jpg";
                    }}
                  />
                  <div className="image-bottom-gradient" />

                  {/* Backend Focus Pill */}
                  <div className="focus-badge">
                    <div className="badge-inner">
                      <span className="pulse-circle">
                        <span className="ping-ring" />
                        <span className="solid-ring" />
                      </span>
                      <div>
                        <h6>Backend Focus</h6>
                        <p>Laravel · PostgreSQL · REST</p>
                      </div>
                    </div>
                    <Zap className="zap-icon" />
                  </div>
                </div>

                <div className="card-meta-footer">
                  <span>Scalable Architecture</span>
                  <span className="tag-mono">PV / 2026</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="scroll-track"
      >
        <span>Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="scroll-line"
        />
      </motion.div>
    </section>
  );
};

export default Hero;