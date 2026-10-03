import React from "react";
import "./App.css";

function App() {
  const skills = [
    {
      category: "Backend Architecture",
      items: [
        "PHP / Laravel",
        "RESTful APIs",
        "MySQL / PostgreSQL",
        "Authentication & JWT",
      ],
    },
    {
      category: "Frontend Engineering",
      items: [
        "React.js",
        "JavaScript (ES6+)",
        "Modern HTML5/CSS3",
        "Responsive UI/UX",
      ],
    },
    {
      category: "Tools & Cloud",
      items: [
        "Git / GitHub",
        "GitHub Pages & CI/CD",
        "Postman API Testing",
        "Linux CLI",
      ],
    },
  ];

  const projects = [
    {
      title: "B2B Vendor Management & API Gateway",
      period: "Full Stack Architecture",
      description:
        "Engineered backend API verification system with scalable token authentication, batch payouts, and reactive dashboard views.",
      bullets: [
        "Built secure REST endpoints with granular rate-limiting and validation.",
        "Structured database indexing to optimize high-concurrency request workloads.",
        "Designed modular frontend state management for zero-latency UI interactions.",
      ],
      tags: ["Laravel", "React.js", "MySQL", "REST API"],
    },
    {
      title: "Asset Processing & Gallery Pipeline",
      period: "Backend Systems",
      description:
        "High-throughput dynamic media handling pipeline standardizing raw uploads with automated compression and caching.",
      bullets: [
        "Automated background image resizing and metadata sanitation.",
        "Decreased query load times by implementing layered Redis caching.",
      ],
      tags: ["PHP", "SQL", "Image Processing", "Performance"],
    },
  ];

  return (
    <div className="portfolio-container">
      {/* Hero Section */}
      <header className="hero">
        <span className="badge">Available for Engineering Roles</span>
        <h1>Potturu Vamsi</h1>
        <p className="role">Full-Stack & Backend Developer</p>
        <p className="bio">
          I build scalable web services, reliable REST APIs, and responsive
          frontends. Focused on clean software patterns, performant database
          design, and end-to-end reliability.
        </p>
        <div className="hero-actions">
          <a href="mailto:naiduvamsi489@gmail.com" className="btn-primary">
            Get in Touch
          </a>
          <a
            href="https://github.com/vamsichowdary-gif"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            GitHub Profile
          </a>
        </div>
      </header>

      {/* Technical Skills */}
      <section className="section">
        <h2 className="section-title">Technical Expertise</h2>
        <div className="skills-grid">
          {skills.map((skillGroup, index) => (
            <div key={index} className="skill-card">
              <h3>{skillGroup.category}</h3>
              <div className="tag-list">
                {skillGroup.items.map((tech, idx) => (
                  <span key={idx} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section">
        <h2 className="section-title">Featured Engineering Work</h2>
        <div className="card-stack">
          {projects.map((project, index) => (
            <div key={index} className="item-card">
              <div className="item-header">
                <span className="item-title">{project.title}</span>
                <span className="item-period">{project.period}</span>
              </div>
              <p className="item-desc">{project.description}</p>
              <ul className="item-bullets">
                {project.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
              <div className="tag-list">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>
          © {new Date().getFullYear()} Potturu Vamsi. Hosted on GitHub Pages
          with Custom Domain.
        </p>
      </footer>
    </div>
  );
}

export default App;
