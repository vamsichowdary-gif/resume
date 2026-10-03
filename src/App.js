import { useEffect } from "react";
import "./App.css";

function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    const root = document.documentElement;
    const handleMove = (event) => {
      const { innerWidth, innerHeight } = window;
      const x = (event.clientX / innerWidth) * 2 - 1;
      const y = (event.clientY / innerHeight) * 2 - 1;
      root.style.setProperty("--mx", x.toFixed(3));
      root.style.setProperty("--my", y.toFixed(3));
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.18 }
    );

    const revealItems = document.querySelectorAll(".reveal");
    revealItems.forEach((item) => observer.observe(item));

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      revealItems.forEach((item) => observer.unobserve(item));
      observer.disconnect();
    };
  }, []);

  return (
    <div className="App">
      <div className="glow-orb orb-1" aria-hidden="true" />
      <div className="glow-orb orb-2" aria-hidden="true" />
      <div className="glow-orb orb-3" aria-hidden="true" />
      <div className="spark s1" aria-hidden="true" />
      <div className="spark s2" aria-hidden="true" />
      <div className="spark s3" aria-hidden="true" />
      <div className="spark s4" aria-hidden="true" />
      <div className="spark s5" aria-hidden="true" />
      <div className="spark s6" aria-hidden="true" />
      <div className="spark s7" aria-hidden="true" />
      <div className="spark s8" aria-hidden="true" />

      <header className="hero">
        <nav className="nav">
          <div className="brand">Naidu</div>
          <div className="nav-links">
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <a className="cta" href="#contact">
            Lets Talk
          </a>
        </nav>

        <div className="hero-content">
          <div className="hero-text reveal">
            <p className="eyebrow">Creative Developer Portfolio</p>
            <h1>
              Neon fueled
              <span className="glow"> web experiences</span>
              <br />
              built with precision.
            </h1>
            <p className="subhead">
              I craft fast, modern interfaces with bold visuals, smooth motion,
              and clean engineering. Explore my skills and projects, then lets
              build something unforgettable.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                View Projects
              </a>
              <a className="button ghost" href="#skills">
                Explore Skills
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-value">5+</span>
                <span className="stat-label">Years Crafting UI</span>
              </div>
              <div className="stat">
                <span className="stat-value">30+</span>
                <span className="stat-label">Projects Delivered</span>
              </div>
              <div className="stat">
                <span className="stat-value">12</span>
                <span className="stat-label">Core Technologies</span>
              </div>
            </div>
          </div>
          <div className="hero-card reveal delay-2">
            <div className="card-glow" />
            <div className="card-content">
              <p className="card-title">Now Building</p>
              <p className="card-main">Neon Portfolio 2.0</p>
              <p className="card-sub">
                A full experience with animated gradients, motion, and
                interactive storytelling.
              </p>
              <div className="chip-row">
                <span className="chip">React</span>
                <span className="chip">UI Motion</span>
                <span className="chip">Design Systems</span>
              </div>
              <div className="profile-wrap">
                <img
                  className="profile-photo"
                  src={`${process.env.PUBLIC_URL}/profile-teal.jpg`}
                  alt="Profile"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="neon-divider" aria-hidden="true" />

      <section id="skills" className="section reveal">
        <div className="section-head">
          <p className="eyebrow">Capabilities</p>
          <h2>Skills that power the glow</h2>
          <p className="section-sub">
            From front-end architecture to high-impact UI, these are the tools I
            use to ship polished products.
          </p>
        </div>
        <div className="grid skills-grid">
          <div className="panel tilt reveal delay-1">
            <h3>Frontend</h3>
            <ul>
              <li>React, Next.js, Redux</li>
              <li>HTML5, CSS3, Tailwind</li>
              <li>Accessibility & performance</li>
            </ul>
          </div>
          <div className="panel tilt reveal delay-2">
            <h3>Design & Motion</h3>
            <ul>
              <li>Figma systems & UI kits</li>
              <li>Framer Motion, GSAP</li>
              <li>Micro-interactions</li>
            </ul>
          </div>
          <div className="panel tilt reveal delay-3">
            <h3>Backend</h3>
            <ul>
              <li>Node.js, Express</li>
              <li>REST & GraphQL APIs</li>
              <li>Auth, DB integration</li>
            </ul>
          </div>
          <div className="panel tilt reveal delay-4">
            <h3>Dev Workflow</h3>
            <ul>
              <li>Git, CI/CD</li>
              <li>Testing & QA</li>
              <li>Agile collaboration</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="neon-divider" aria-hidden="true" />

      <section id="projects" className="section reveal">
        <div className="section-head">
          <p className="eyebrow">Selected Work</p>
          <h2>Projects with impact</h2>
          <p className="section-sub">
            A snapshot of products I have shipped, crafted with speed and
            pixel-level care.
          </p>
        </div>
        <div className="grid projects-grid">
          <article className="panel project-card tilt reveal delay-1">
            <div className="project-top">
              <span className="project-tag">Fintech</span>
              <span className="project-year">2025</span>
            </div>
            <h3>PulsePay Dashboard</h3>
            <p>
              Real-time finance analytics with neon data streams, advanced
              filtering, and role-based access.
            </p>
            <div className="chip-row">
              <span className="chip">React</span>
              <span className="chip">D3.js</span>
              <span className="chip">Node</span>
            </div>
          </article>
          <article className="panel project-card tilt reveal delay-2">
            <div className="project-top">
              <span className="project-tag">E-Commerce</span>
              <span className="project-year">2024</span>
            </div>
            <h3>Nightwave Store</h3>
            <p>
              A headless storefront with cinematic product motion and a checkout
              flow that converts.
            </p>
            <div className="chip-row">
              <span className="chip">Next.js</span>
              <span className="chip">Stripe</span>
              <span className="chip">CMS</span>
            </div>
          </article>
          <article className="panel project-card tilt reveal delay-3">
            <div className="project-top">
              <span className="project-tag">SaaS</span>
              <span className="project-year">2023</span>
            </div>
            <h3>Aurora Labs</h3>
            <p>
              A collaborative analytics suite featuring AI insights, smart
              onboarding, and a modular design system.
            </p>
            <div className="chip-row">
              <span className="chip">Vue</span>
              <span className="chip">GraphQL</span>
              <span className="chip">Storybook</span>
            </div>
          </article>
        </div>
      </section>

      <div className="neon-divider" aria-hidden="true" />

      <section id="contact" className="section contact-section reveal">
        <div className="section-head">
          <p className="eyebrow">Contact</p>
          <h2>Lets build your next idea</h2>
          <p className="section-sub">
            Tell me about your project and I will respond with a tailored plan.
          </p>
        </div>
        <div className="contact-grid">
          <div className="panel contact-card tilt reveal delay-1">
            <h3>Reach me directly</h3>
            <p>naidu@email.com</p>
            <p>+91 90000 00000</p>
            <div className="chip-row">
              <span className="chip">LinkedIn</span>
              <span className="chip">GitHub</span>
              <span className="chip">Behance</span>
            </div>
          </div>
          <form className="panel contact-form tilt reveal delay-2" onSubmit={handleSubmit}>
            <label>
              Name
              <input type="text" placeholder="Your name" />
            </label>
            <label>
              Email
              <input type="email" placeholder="you@email.com" />
            </label>
            <label>
              Message
              <textarea placeholder="Tell me about your project" rows="4" />
            </label>
            <button className="button primary" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <p>Built with neon energy and clean code.</p>
      </footer>
    </div>
  );
}

export default App;
