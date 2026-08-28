const projects = [
  {
    number: "01",
    name: "BudgetRoute-LLM",
    focus: "Routing / evaluation / serving",
    summary:
      "A typed system for routing requests between local language models while recording quality, latency, uncertainty, and provenance.",
    result:
      "On a held-out Qwen MMLU study, the learned router reached 51% accuracy versus 53% for always-large and increased observed p50 latency by 5.3%.",
    note: "Negative result: the available routing signals were not sufficient.",
    href: "https://github.com/BearAx/budgetroute-llm",
    linkLabel: "View repository",
  },
  {
    number: "02",
    name: "SemanticSplat",
    focus: "3D scene understanding / team project",
    summary:
      "A research prototype for language-grounded object search in 3D Gaussian Splatting scenes using a hierarchical semantic index.",
    result:
      "The published demo comparison checked 4 of 19 views and used 6,430 versus 26,604 input tokens with graph-pruned search.",
    note: "Co-author. Results are explicitly labeled as a demo/simulated benchmark.",
    href: "https://github.com/BearAx/beyond-proximity-public",
    linkLabel: "View public mirror",
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
            <p className="role">Computer science student / ML engineer</p>
            <div>
              <p className="statement">
                My work focuses on model evaluation, routing, and reproducible
                experiments in Python and PyTorch.
              </p>
              <a className="availability" href="mailto:medvedguk@gmail.com">
                Open to ML engineering internships <span>↗</span>
              </a>
            </div>
          </div>
        </div>
        <div className="hero-index" aria-label="Areas of focus">
          <span>01 / evaluate</span>
          <span>02 / systems</span>
          <span>03 / research</span>
        </div>
      </section>

      <section className="work" id="work" aria-labelledby="work-title">
        <div className="section-label">
          <span>Selected work</span>
          <span>Two projects</span>
        </div>
        <h2 id="work-title">Evidence, including when it fails.</h2>
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
                <p>{project.result}</p>
                <code>{project.note}</code>
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
        <h2>Interested in rigorous ML engineering.</h2>
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
