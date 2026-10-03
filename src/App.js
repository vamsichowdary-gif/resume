import React, { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import "./App.css";

const skills = [
  {
    title: "Languages",
    icon: "⚡",
    items: ["PHP", "JavaScript (ES6+)", "SQL", "HTML5", "CSS3"],
  },
  {
    title: "Frameworks & Backend",
    icon: "🛠️",
    items: ["Laravel", "React.js", "REST APIs", "MVC Architecture", "Node.js"],
  },
  {
    title: "Databases & Tools",
    icon: "🗄️",
    items: [
      "MySQL",
      "PostgreSQL",
      "Git / GitHub",
      "Postman",
      "Linux",
      "Docker",
    ],
  },
];

// Dedicated Work Experience list
const workExperiences = [
  {
    role: "Full-Stack / Backend Engineer",
    company: "Tech Solutions Inc.",
    period: "2023 — PRESENT",
    description:
      "Spearheaded core backend architectures with Laravel and PostgreSQL. Built scalable RESTful APIs serving 50k+ daily queries and optimized database access patterns.",
    bullets: [
      "Engineered automated ETL pipelines and reduced query latency by ~35%.",
      "Designed real-time state synchronizations and integrated interactive React dashboards.",
      "Maintained zero-downtime deployments and streamlined Git CI/CD flows.",
    ],
    tech: ["Laravel", "React", "PostgreSQL", "Redis", "Docker"],
  },
  {
    role: "Software Developer Intern",
    company: "Digital Edge Labs",
    period: "2022 — 2023",
    description:
      "Collaborated on responsive client-facing applications and engineered robust relational database schemas.",
    bullets: [
      "Developed CRUD endpoints with token-based JWT authentication.",
      "Refactored legacy code into modern, modular ES6+ modules.",
    ],
    tech: ["PHP", "MySQL", "JavaScript", "REST APIs"],
  },
];

// Fallback projects if Supabase is still empty or loading
const fallbackProjects = [
  {
    id: 1,
    title: "Asset Processing & Media Pipeline",
    period: "FULL-STACK · CLOUD",
    description:
      "High-throughput media processing platform handling video transcoding, automated watermarking, and secure S3 asset distributions.",
    bullets: [
      "Asynchronous background worker queues with error resilience.",
      "Optimized file uploads with signed URLs and instant client preview.",
    ],
    tags: ["Laravel", "React", "PostgreSQL", "AWS S3", "Redis"],
    github_url: "https://github.com/vamsichowdary-gif",
    live_url: "https://github.com/vamsichowdary-gif",
  },
  {
    id: 2,
    title: "B2B Vendor Management & API Gateway",
    period: "BACKEND ARCHITECTURE",
    description:
      "Multi-tenant vendor integration platform with webhook callbacks, rate limiting, and automated billing telemetry.",
    bullets: [
      "Strict role-based access control (RBAC) and OAuth2 authentication.",
      "Interactive analytics dashboard tracking API throughput and errors.",
    ],
    tags: ["PHP", "Laravel", "MySQL", "Postman", "TailwindCSS"],
    github_url: "https://github.com/vamsichowdary-gif",
    live_url: "https://github.com/vamsichowdary-gif",
  },
];

const education = [
  {
    stage: "B.Tech in Computer Science & Engineering",
    detail:
      "Core focus on software architecture, distributed systems, data structures, and algorithms.",
    year: "2020 — 2024",
  },
  {
    stage: "Higher Secondary / Intermediate",
    detail:
      "Rigorous focus on Mathematics, Physics, and Advanced Chemistry foundations.",
    year: "2018 — 2020",
  },
  {
    stage: "Secondary School Certificate",
    detail: "Graduated with distinction with high academic honors.",
    year: "2018",
  },
];

function ArrowIcon() {
  return (
    <span aria-hidden="true" className="arrow">
      ↗
    </span>
  );
}

function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const { data, error } = await supabase
          .from("projects")
          .select("*")
          .order("id", { ascending: false });

        if (error || !data || data.length === 0) {
          setProjects(fallbackProjects);
        } else {
          setProjects(data);
        }
      } catch (err) {
        console.error("Unexpected error:", err);
        setProjects(fallbackProjects);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  return (
    <div className="site-shell">
      {/* Background Ambient Glows */}
      <div className="glow-orb orb-top" />
      <div className="glow-orb orb-mid" />

      {/* Navigation */}
      <header className="topbar">
        <a className="wordmark" href="#home">
          PV<span>.</span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
        </nav>
        <a className="nav-contact" href="mailto:naiduvamsi489@gmail.com">
          Let’s talk <ArrowIcon />
        </a>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="badge-status">
              <span className="pulsing-dot" />
              <span>AVAILABLE FOR FULL-STACK & BACKEND ROLES</span>
            </div>

            <h1>
              Hi, I’m <br />
              <span className="name-highlight">Potturu Vamsi.</span>
            </h1>

            <p className="hero-role">
              Full-Stack & Backend Engineer <span>— Based in India</span>
            </p>

            <p className="hero-intro">
              I specialize in robust backend systems, scalable REST APIs, and
              responsive React web applications. Passionate about clean code,
              high-throughput architecture, and intuitive UI designs.
            </p>

            <div className="hero-actions">
              <a
                className="btn btn-primary"
                href="mailto:naiduvamsi489@gmail.com"
              >
                Get in touch <ArrowIcon />
              </a>
              <a
                className="btn btn-outline"
                href="https://github.com/vamsichowdary-gif"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Profile <ArrowIcon />
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <strong>1+</strong>
                <span>Years Exp.</span>
              </div>
              <div className="stat-separator" />
              <div className="stat-item">
                <strong>15+</strong>
                <span>Projects Shipped</span>
              </div>
              <div className="stat-separator" />
              <div className="stat-item">
                <strong>100%</strong>
                <span>Clean Code & APIs</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-card">
              <div className="portrait-frame">
                <img
                  src="https://vamsiportfolio.linkpc.net/og-preview.jpg"
                  alt="Potturu Vamsi"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80";
                  }}
                />
                <div className="portrait-gradient" />
              </div>

              <div className="floating-card status-badge">
                <span className="dot active" />
                <div>
                  <strong>Backend Focus</strong>
                  <p>Laravel · PostgreSQL · REST</p>
                </div>
              </div>

              <div className="portrait-footer">
                <span>SCALABLE ARCHITECTURE</span>
                <span>PV / 2026</span>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="intro-strip" id="about">
          <div>
            <span className="section-badge">ABOUT PHILOSOPHY</span>
            <h2>
              Good software starts with <br />
              <em>rigorous thinking & clean architecture.</em>
            </h2>
          </div>
          <p className="intro-text">
            I craft reliable, maintainable web products—from optimized database
            schemas and resilient API routing to fast, reactive UI components.
            Whether designing modular microservices or writing clean frontend
            hooks, my priority is performance, modularity, and longevity.
          </p>
        </section>

        {/* Work Experience Section */}
        <section className="content-section" id="experience">
          <div className="section-header">
            <div>
              <span className="section-badge">CAREER TIMELINE</span>
              <h2>Professional Experience</h2>
            </div>
            <span className="section-num">01 / CAREER</span>
          </div>

          <div className="experience-stack">
            {workExperiences.map((exp, index) => (
              <div className="glass-card exp-card" key={index}>
                <div className="exp-side">
                  <span className="exp-period">{exp.period}</span>
                  <h4 className="exp-company">{exp.company}</h4>
                </div>

                <div className="exp-body">
                  <h3 className="exp-role">{exp.role}</h3>
                  <p className="exp-desc">{exp.description}</p>

                  <ul className="exp-bullets">
                    {exp.bullets.map((b, idx) => (
                      <li key={idx}>{b}</li>
                    ))}
                  </ul>

                  <div className="tag-cluster">
                    {exp.tech.map((t, idx) => (
                      <span key={idx} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="content-section" id="projects">
          <div className="section-header">
            <div>
              <span className="section-badge">ENGINEERING SHOWCASE</span>
              <h2>Featured Projects</h2>
            </div>
            <span className="section-num">02 / WORK</span>
          </div>

          {loading ? (
            <div className="loading-state">
              <span className="spinner" />
              <p>Fetching projects from database...</p>
            </div>
          ) : (
            <div className="project-grid">
              {projects.map((proj) => (
                <div className="glass-card project-card" key={proj.id}>
                  <div className="project-card-header">
                    <span className="project-category">
                      {proj.period || "APPLICATION"}
                    </span>
                    {proj.github_url && (
                      <a
                        href={proj.github_url}
                        target="_blank"
                        rel="noreferrer"
                        className="circle-icon-btn"
                        aria-label="GitHub Repository"
                      >
                        <ArrowIcon />
                      </a>
                    )}
                  </div>

                  <h3 className="project-title">{proj.title}</h3>
                  <p className="project-desc">{proj.description}</p>

                  {proj.bullets && proj.bullets.length > 0 && (
                    <ul className="project-bullets">
                      {proj.bullets.map((bullet, idx) => (
                        <li key={idx}>{bullet}</li>
                      ))}
                    </ul>
                  )}

                  <div className="tag-cluster">
                    {proj.tags &&
                      proj.tags.map((tag, idx) => (
                        <span key={idx} className="tag tag-accent">
                          {tag}
                        </span>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Education Section */}
        <section className="content-section" id="education">
          <div className="section-header">
            <div>
              <span className="section-badge">BACKGROUND</span>
              <h2>Education</h2>
            </div>
            <span className="section-num">03 / EDUCATION</span>
          </div>

          <div className="education-grid">
            {education.map((edu, idx) => (
              <div className="glass-card edu-card" key={idx}>
                <div className="edu-top">
                  <span className="edu-index">0{idx + 1}</span>
                  <span className="edu-year">{edu.year}</span>
                </div>
                <h3>{edu.stage}</h3>
                <p>{edu.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Toolkit / Skills */}
        <section className="content-section" id="skills">
          <div className="section-header">
            <div>
              <span className="section-badge">SKILLS & TOOLS</span>
              <h2>Technical Toolkit</h2>
            </div>
            <span className="section-num">04 / STACK</span>
          </div>

          <div className="skills-grid">
            {skills.map((group, idx) => (
              <div className="glass-card skill-card" key={idx}>
                <div className="skill-card-top">
                  <span className="skill-icon">{group.icon}</span>
                  <span className="skill-index">0{idx + 1}</span>
                </div>
                <h3>{group.title}</h3>
                <div className="tag-cluster">
                  {group.items.map((item, itemIdx) => (
                    <span key={itemIdx} className="tag tag-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Banner */}
        <section className="contact-banner">
          <div className="contact-content">
            <span className="section-badge">
              HAVE A PROJECT OR OPPORTUNITY?
            </span>
            <h2>
              Let’s build something <br />
              <span className="gradient-text">exceptional together.</span>
            </h2>
            <p>
              Open for full-time engineering roles, high-impact backend
              contracts, and consultations.
            </p>
          </div>

          <a
            className="btn btn-primary btn-large"
            href="mailto:naiduvamsi489@gmail.com"
          >
            Say Hello <ArrowIcon />
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <a className="wordmark" href="#home">
          PV<span>.</span>
        </a>
        <p>
          © {new Date().getFullYear()} Potturu Vamsi · Built with React &
          Supabase
        </p>
        <div className="footer-links">
          <a
            href="https://github.com/vamsichowdary-gif"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <ArrowIcon />
          </a>
          <a href="mailto:naiduvamsi489@gmail.com">
            Email <ArrowIcon />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
