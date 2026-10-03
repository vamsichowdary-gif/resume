import React from "react";
import "./App.css";

const skills = [
  { title: "Languages", items: ["PHP", "JavaScript", "HTML", "CSS"] },
  { title: "Frameworks & APIs", items: ["Laravel", "React", "REST APIs"] },
  { title: "Data & tools", items: ["MySQL", "PostgreSQL", "Git", "Postman"] },
];

const education = [
  { stage: "B.Tech", detail: "Add your degree, college and graduation year" },
  { stage: "Intermediate", detail: "Add your stream, college and year" },
  { stage: "Schooling", detail: "Add your school and year" },
];

function ArrowIcon() {
  return <span aria-hidden="true" className="arrow">↗</span>;
}

function App() {
  return (
    <div className="site-shell">
      <nav className="topbar" aria-label="Main navigation">
        <a className="wordmark" href="#home">PV<span>.</span></a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
        </div>
        <a className="nav-contact" href="mailto:naiduvamsi489@gmail.com">Let’s talk <ArrowIcon /></a>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> PORTFOLIO · DEVELOPER</p>
            <h1>Hi, I’m<br /><span>Vamsi.</span></h1>
            <p className="hero-role">Full-stack developer <span>based in India</span></p>
            <p className="hero-intro">I build web experiences and backend systems with a focus on thoughtful details, useful features, and code that’s easy to maintain.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="mailto:naiduvamsi489@gmail.com">Get in touch <ArrowIcon /></a>
              <a className="text-link" href="https://github.com/vamsichowdary-gif" target="_blank" rel="noreferrer">Explore my GitHub <ArrowIcon /></a>
            </div>
            <div className="hero-meta"><span>01 — 04</span><span>Scroll to explore <span aria-hidden="true">↓</span></span></div>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame"><img src="/profile-teal.jpg" alt="Portrait of Potturu Vamsi" /></div>
            <div className="portrait-note"><span>BUILDING FOR THE WEB</span><span>Curiosity → code → craft</span></div>
            <span className="visual-orbit orbit-one" /><span className="visual-orbit orbit-two" />
            <span className="visual-index">PV / 2026</span>
          </div>
        </section>

        <section className="intro-strip" id="about">
          <p className="section-kicker">A LITTLE ABOUT ME</p>
          <div><h2>Good software starts<br />with <em>clear thinking.</em></h2><p>I’m a developer interested in building reliable, user-friendly products—from the API and data layer to the interface people use every day. I enjoy learning by making, improving, and shipping.</p></div>
          <span className="strip-mark" aria-hidden="true">✳</span>
        </section>

        <section className="content-section" id="experience">
          <div className="section-heading"><div><p className="section-kicker">THE JOURNEY SO FAR</p><h2>Experience</h2></div><span className="section-count">01 / EXPERIENCE</span></div>
          <article className="experience-card">
            <span className="timeline-dot" />
            <div><p className="experience-label">YOUR NEXT CHAPTER</p><h3>Add your work experience</h3><p className="muted">This section is ready for your role, company, dates, and a few details about the work you did. No job history was included in the project, so nothing has been assumed.</p></div>
            <a className="icon-link" href="mailto:naiduvamsi489@gmail.com" aria-label="Send experience details by email"><ArrowIcon /></a>
          </article>
        </section>

        <section className="content-section education-section" id="education">
          <div className="section-heading"><div><p className="section-kicker">WHERE I LEARNED</p><h2>Education</h2></div><span className="section-count">02 / EDUCATION</span></div>
          <div className="education-list">{education.map((item, index) => <article className="education-item" key={item.stage}><span className="edu-number">0{index + 1}</span><h3>{item.stage}</h3><p>{item.detail}</p><span className="edu-arrow" aria-hidden="true">↗</span></article>)}</div>
        </section>

        <section className="content-section skills-section" id="skills">
          <div className="section-heading"><div><p className="section-kicker">TOOLS I WORK WITH</p><h2>My toolkit</h2></div><span className="section-count">03 / SKILLS</span></div>
          <div className="skills-grid">{skills.map((group, index) => <article className="skill-card" key={group.title}><span className="skill-number">0{index + 1}</span><h3>{group.title}</h3><div className="skill-tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div></article>)}</div>
        </section>

        <section className="contact-panel">
          <div><p className="section-kicker">HAVE A PROJECT IN MIND?</p><h2>Let’s make<br /><em>something useful.</em></h2></div>
          <a className="button button-light" href="mailto:naiduvamsi489@gmail.com">Say hello <ArrowIcon /></a>
          <span className="contact-spark" aria-hidden="true">✳</span>
        </section>
      </main>

      <footer className="footer"><a className="wordmark" href="#home">PV<span>.</span></a><p>© {new Date().getFullYear()} Potturu Vamsi</p><div><a href="https://github.com/vamsichowdary-gif" target="_blank" rel="noreferrer">GitHub <ArrowIcon /></a><a href="mailto:naiduvamsi489@gmail.com">Email <ArrowIcon /></a></div></footer>
    </div>
  );
}

export default App;
