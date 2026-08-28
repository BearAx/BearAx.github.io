const projects = [
  {
    number: "01",
    name: "BudgetRoute-LLM",
    focus: "Routing / evaluation / serving",
    summary:
      "A typed system for routing requests between local language models and tracking quality, latency, uncertainty, and provenance for reproducible evaluation.",
    href: "https://github.com/BearAx/budgetroute-llm",
    linkLabel: "View repository",
  },
] as const;

export default function Home() {
  return (
    <main id="top">
      <header className="masthead">
        <a className="mark" href="#top" aria-label="Aleksandr Medvedev, home">
          AM<span>.</span>
        </a>
        <p>ML research / systems</p>
        <div className="masthead-links">
          <a href="https://github.com/BearAx" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="mailto:medvedguk@gmail.com">Email</a>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="rail-label">Portfolio / 2026</div>
        <div className="hero-main">
          <p className="kicker">Aleksandr Medvedev · Innopolis University</p>
          <h1 id="hero-title">
            I build and evaluate
            <br />
            ML systems<span>.</span>
          </h1>
          <div className="hero-bottom">
            <p className="role">Computer science student / seeking ML internships</p>
            <div>
              <p className="statement">
                My work focuses on model evaluation, routing, and reproducible
                experiments in Python and PyTorch.
              </p>
              <a className="availability" href="mailto:medvedguk@gmail.com">
                Available for internship roles <span>↗</span>
              </a>
            </div>
          </div>
        </div>
        <div className="hero-index" aria-label="Target positions">
          <span>01 / ML Research Engineer Intern</span>
          <span>02 / ML Systems Engineer Intern</span>
          <span>03 / Applied ML / LLM Engineer Intern</span>
        </div>
      </section>

      <section className="work" id="work" aria-labelledby="work-title">
        <div className="section-label">
          <span>Selected project</span>
          <span>Repository</span>
        </div>
        <h2 id="work-title">Budget-aware LLM routing.</h2>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project" key={project.name}>
              <div className="project-number">{project.number}</div>
              <div className="project-title">
                <p>{project.focus}</p>
                <h3>{project.name}</h3>
              </div>
              <p className="project-summary">{project.summary}</p>
              <div className="project-detail">
                <a href={project.href} target="_blank" rel="noreferrer">
                  {project.linkLabel} <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p className="footer-label">Contact / availability</p>
        <h2>Seeking ML research, systems, and applied LLM roles.</h2>
        <div className="footer-meta">
          <p>Python · PyTorch · FastAPI · evaluation · Docker</p>
          <div>
            <a href="mailto:medvedguk@gmail.com">medvedguk@gmail.com ↗</a>
            <a href="https://github.com/BearAx" target="_blank" rel="noreferrer">
              github.com/BearAx ↗
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
