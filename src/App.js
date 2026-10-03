import React, { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import "./App.css";

const skills = [
  {
    title: "Languages",
    items: ["PHP", "JavaScript (ES6+)", "SQL", "HTML5", "CSS3"],
  },
  {
    title: "Frameworks & Backend",
    items: ["Laravel", "React.js", "REST APIs", "MVC Architecture"],
  },
  {
    title: "Databases & Tools",
    items: ["MySQL", "PostgreSQL", "Git / GitHub", "Postman", "Linux"],
  },
];

const education = [
  {
    stage: "B.Tech in Computer Science / Engineering",
    detail:
      "Undergraduate degree focusing on software engineering, data structures, and algorithms.",
  },
  {
    stage: "Higher Secondary / Intermediate",
    detail: "Mathematics, Physics, and Chemistry stream.",
  },
  { stage: "Schooling", detail: "Secondary School Certificate." },
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

        if (error) {
          console.error("Error fetching projects from Supabase:", error);
        } else if (data) {
          setProjects(data);
        }
      } catch (err) {
        console.error("Unexpected error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  return (
    <div className="site-shell">
      <nav className="topbar" aria-label="Main navigation">
        <a className="wordmark" href="#home">
          PV<span>.</span>
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
        </div>
        <a className="nav-contact" href="mailto:naiduvamsi489@gmail.com">
          Let’s talk <ArrowIcon />
        </a>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> AVAILABLE FOR ROLES · DEVELOPER
            </p>
            <h1>
              Hi, I’m
              <br />
              <span>Potturu Vamsi.</span>
            </h1>
            <p className="hero-role">
              Full-Stack & Backend Engineer <span>based in India</span>
            </p>
            <p className="hero-intro">
              I specialize in robust backend systems, scalable REST APIs, and
              responsive React web applications. Passionate about clean code,
              maintainable architecture, and thoughtful UI design.
            </p>
            <div className="hero-actions">
              <a
                className="button button-dark"
                href="mailto:naiduvamsi489@gmail.com"
              >
                Get in touch <ArrowIcon />
              </a>
              <a
                className="text-link"
                href="https://github.com/vamsichowdary-gif"
                target="_blank"
                rel="noreferrer"
              >
                Explore my GitHub <ArrowIcon />
              </a>
            </div>
            <div className="hero-meta">
              <span>01 — 04</span>
              <span>
                Scroll to explore <span aria-hidden="true">↓</span>
              </span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame">
              <img
                src="https://github.com/vamsichowdary-gif.png"
                alt="Portrait of Potturu Vamsi"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/profile-teal.jpg";
                }}
              />
            </div>
            <div className="portrait-note">
              <span>BUILDING SCALABLE WEB APPS</span>
              <span>Curiosity → code → craft</span>
            </div>
            <span className="visual-orbit orbit-one" />
            <span className="visual-orbit orbit-two" />
            <span className="visual-index">PV / 2026</span>
          </div>
        </section>

        {/* About Section */}
        <section className="intro-strip" id="about">
          <p className="section-kicker">A LITTLE ABOUT ME</p>
          <div>
            <h2>
              Good software starts
              <br />
              with <em>clear thinking.</em>
            </h2>
            <p>
              I build reliable, maintainable web products—from the database
              layer and API design to the reactive interfaces users touch every
              day. Whether architecting modular backend services with Laravel or
              developing responsive frontend components in React, my focus is
              always on performance and longevity.
            </p>
          </div>
          <span className="strip-mark" aria-hidden="true">
            ✳
          </span>
        </section>

        {/* Dynamic Experience / Projects Section from Supabase */}
        <section className="content-section" id="experience">
          <div className="section-heading">
            <div>
              <p className="section-kicker">THE JOURNEY SO FAR</p>
              <h2>Experience & Projects</h2>
            </div>
            <span className="section-count">01 / WORK</span>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            {loading ? (
              <p className="muted">Loading projects from database...</p>
            ) : projects.length === 0 ? (
              <article className="experience-card">
                <span className="timeline-dot" />
                <div>
                  <p className="experience-label">FULL STACK ENGINEERING</p>
                  <h3>Scalable Web Applications & API Architecture</h3>
                  <p className="muted">
                    Engineered modular web services with clean REST endpoints,
                    database schema optimization, and responsive frontends.
                  </p>
                </div>
              </article>
            ) : (
              projects.map((project) => (
                <article className="experience-card" key={project.id}>
                  <span className="timeline-dot" />
                  <div>
                    <p className="experience-label">
                      {project.period || "FULL STACK ENGINEERING"}
                    </p>
                    <h3>{project.title}</h3>
                    <p className="muted">{project.description}</p>

                    {project.bullets && project.bullets.length > 0 && (
                      <ul
                        style={{
                          listStyle: "none",
                          paddingLeft: "0",
                          marginTop: "0.75rem",
                          marginBottom: "0.75rem",
                        }}
                      >
                        {project.bullets.map((bullet, idx) => (
                          <li
                            key={idx}
                            style={{
                              fontSize: "0.9rem",
                              color: "#cbd5e1",
                              marginBottom: "0.35rem",
                              position: "relative",
                              paddingLeft: "1.2rem",
                            }}
                          >
                            <span
                              style={{
                                position: "absolute",
                                left: 0,
                                color: "#38bdf8",
                              }}
                            >
                              ▹
                            </span>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}

                    {project.tags && project.tags.length > 0 && (
                      <div
                        className="skill-tags"
                        style={{ marginTop: "0.75rem" }}
                      >
                        {project.tags.map((tag, idx) => (
                          <span key={idx}>{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>

                  {project.github_url && (
                    <a
                      className="icon-link"
                      href={project.github_url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <ArrowIcon />
                    </a>
                  )}
                </article>
              ))
            )}
          </div>
        </section>

        {/* Education Section */}
        <section className="content-section education-section" id="education">
          <div className="section-heading">
            <div>
              <p className="section-kicker">WHERE I LEARNED</p>
              <h2>Education</h2>
            </div>
            <span className="section-count">02 / EDUCATION</span>
          </div>
          <div className="education-list">
            {education.map((item, index) => (
              <article className="education-item" key={item.stage}>
                <span className="edu-number">0{index + 1}</span>
                <h3>{item.stage}</h3>
                <p>{item.detail}</p>
                <span className="edu-arrow" aria-hidden="true">
                  ↗
                </span>
              </article>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="content-section skills-section" id="skills">
          <div className="section-heading">
            <div>
              <p className="section-kicker">TOOLS I WORK WITH</p>
              <h2>Technical Toolkit</h2>
            </div>
            <span className="section-count">03 / SKILLS</span>
          </div>
          <div className="skills-grid">
            {skills.map((group, index) => (
              <article className="skill-card" key={group.title}>
                <span className="skill-number">0{index + 1}</span>
                <h3>{group.title}</h3>
                <div className="skill-tags">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact Strip */}
        <section className="contact-panel">
          <div>
            <p className="section-kicker">HAVE A PROJECT OR OPPORTUNITY?</p>
            <h2>
              Let’s make
              <br />
              <em>something useful.</em>
            </h2>
          </div>
          <a
            className="button button-light"
            href="mailto:naiduvamsi489@gmail.com"
          >
            Say hello <ArrowIcon />
          </a>
          <span className="contact-spark" aria-hidden="true">
            ✳
          </span>
        </section>
      </main>

      <footer className="footer">
        <a className="wordmark" href="#home">
          PV<span>.</span>
        </a>
        <p>© {new Date().getFullYear()} Potturu Vamsi</p>
        <div>
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
