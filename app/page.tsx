const projects = [
  {
    index: "01",
    name: "ml-systems-lab",
    label: "PyTorch efficiency",
    summary:
      "Training and inference benchmarks built to make speed, memory, and cost trade-offs visible.",
    points: [
      "Benchmarks across batch sizes, precision modes, compilation, checkpointing, and dataloader settings.",
      "Measures latency, throughput, memory use, GPU utilization, and cost per experiment.",
      "Turns profiler findings into practical changes to the training pipeline.",
    ],
    tags: ["PyTorch", "AMP", "Profiling"],
  },
  {
    index: "02",
    name: "vision-recipe-bench",
    label: "Model quality",
    summary:
      "Controlled training-recipe research with fixed compute budgets and evidence-first reporting.",
    points: [
      "Studies optimizers, learning-rate schedules, warmup, augmentation, EMA, regularization, and data filtering.",
      "Uses multi-seed evaluation, robustness checks, calibration, and report-ready comparisons.",
      "Documents which changes actually produce a quality gain.",
    ],
    tags: ["Ablations", "Robustness", "Calibration"],
  },
  {
    index: "03",
    name: "small-lm-lab",
    label: "Transformer systems",
    summary:
      "A compact GPT-style lab connecting language-model quality with system constraints.",
    points: [
      "Implements tokenization, sequence packing, checkpointing, evaluation, and generation.",
      "Explores vocabulary size, context length, schedules, clipping, dropout, and accumulation strategy.",
      "Tracks perplexity, training time, tokens per second, memory, and failure modes.",
    ],
    tags: ["Transformers", "Small LMs", "Perplexity"],
  },
] as const;

const principles = [
  {
    code: "Q",
    title: "Quality",
    copy: "Baselines, training recipes, robustness, calibration, and evaluation that survives scrutiny.",
    signal: "measure -> compare -> improve",
  },
  {
    code: "E",
    title: "Efficiency",
    copy: "AMP, compilation, profiling, batching, and checkpointing across training and inference.",
    signal: "profile -> optimize -> verify",
  },
  {
    code: "R",
    title: "Reproducibility",
    copy: "Seeds, tracked configurations, controlled ablations, and technical reports.",
    signal: "control -> repeat -> report",
  },
] as const;

const stack = [
  ["Core", "Python", "PyTorch", "Transformers", "CNNs", "Small LMs"],
  ["Experiments", "W&B", "MLflow", "Hydra", "Multi-seed evaluation", "Ablations"],
  ["Systems", "CUDA / NVIDIA", "Linux", "Docker", "GitHub Actions"],
] as const;

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Aleksandr Medvedev, home">
          AM<span className="wordmark-dot" aria-hidden="true" />
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#stack">Stack</a>
        </nav>
        <a className="header-contact" href="mailto:medvedguk@gmail.com">
          Start a conversation
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-pulse" />
            ML systems + model quality
          </p>
          <h1>
            Aleksandr
            <br />
            Medvedev<span className="accent-period">.</span>
          </h1>
          <p className="hero-role">
            ML Research Engineer <span>/</span> ML Systems Engineer
          </p>
          <p className="hero-statement">
            I improve AI models where <strong>quality</strong> meets{" "}
            <strong>systems</strong>.
          </p>
          <p className="hero-detail">
            I build reproducible PyTorch pipelines that turn model improvements
            into evidence: controlled ablations, robust evaluation, tracked
            configurations, and training or inference measurements for speed,
            memory, and cost.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="mailto:medvedguk@gmail.com">
              Email Aleksandr
              <span aria-hidden="true">↗</span>
            </a>
            <a
              className="button button-secondary"
              href="https://github.com/BearAx"
              target="_blank"
              rel="noreferrer"
            >
              GitHub / BearAx
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <aside className="hero-console" aria-label="Research focus summary">
          <div className="console-bar">
            <span>experiment_ledger.log</span>
            <span className="console-live">live</span>
          </div>
          <div className="console-body">
            <p>
              <span>01</span>
              <b>objective</b>
              <em>better models</em>
            </p>
            <p>
              <span>02</span>
              <b>constraint</b>
              <em>real compute</em>
            </p>
            <p>
              <span>03</span>
              <b>method</b>
              <em>controlled evidence</em>
            </p>
            <div className="console-chart" aria-hidden="true">
              <div style={{ height: "34%" }} />
              <div style={{ height: "49%" }} />
              <div style={{ height: "43%" }} />
              <div style={{ height: "66%" }} />
              <div style={{ height: "59%" }} />
              <div style={{ height: "83%" }} />
              <div style={{ height: "94%" }} />
            </div>
            <div className="console-result">
              <span>result</span>
              <strong>quality gains you can explain</strong>
            </div>
          </div>
        </aside>

        <div className="hero-meta">
          <span>Paris, France</span>
          <span>Remote</span>
          <span>Relocation-ready</span>
        </div>
      </section>

      <section className="principles section-shell" aria-labelledby="principles-title">
        <div className="section-intro">
          <p className="section-number">00 / approach</p>
          <h2 id="principles-title">Research with an engineering spine.</h2>
          <p>
            The goal is not just a higher score. It is a result that can be
            reproduced, measured, and shipped within real system constraints.
          </p>
        </div>
        <div className="principle-grid">
          {principles.map((principle) => (
            <article className="principle-card" key={principle.code}>
              <span className="principle-code">{principle.code}</span>
              <h3>{principle.title}</h3>
              <p>{principle.copy}</p>
              <code>{principle.signal}</code>
            </article>
          ))}
        </div>
      </section>

      <section className="work section-shell" id="work" aria-labelledby="work-title">
        <div className="section-heading">
          <div>
            <p className="section-number">01 / selected work</p>
            <h2 id="work-title">Systems built to answer hard questions.</h2>
          </div>
          <p>
            Three focused labs spanning PyTorch performance, visual model
            quality, and compact language models.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <div className="project-index">{project.index}</div>
              <div className="project-main">
                <p className="project-label">{project.label}</p>
                <h3>{project.name}</h3>
                <p className="project-summary">{project.summary}</p>
                <ul>
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className="project-tags" aria-label={`${project.name} technologies`}>
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className="experience section-shell"
        id="experience"
        aria-labelledby="experience-title"
      >
        <div className="section-heading">
          <div>
            <p className="section-number">02 / experience</p>
            <h2 id="experience-title">Independent ML Research Engineer</h2>
          </div>
          <p className="date">2025 - present</p>
        </div>
        <div className="experience-body">
          <p className="experience-lead">
            Practical AI improvement through model quality, reproducible
            experiments, and efficient PyTorch training.
          </p>
          <ol className="process-list">
            <li>
              <span>Design</span>
              Reproducible experiments with baselines, controlled ablations,
              seed control, configuration tracking, and clear metrics.
            </li>
            <li>
              <span>Evaluate</span>
              Quality and stability through training recipes, data-centric
              methods, robustness evaluation, and calibration.
            </li>
            <li>
              <span>Measure</span>
              Speed, memory, and cost trade-offs through profiling, AMP,
              compilation, batching, and checkpointing.
            </li>
          </ol>
        </div>
      </section>

      <section className="stack section-shell" id="stack" aria-labelledby="stack-title">
        <div className="section-heading">
          <div>
            <p className="section-number">03 / toolkit</p>
            <h2 id="stack-title">From experiment design to GPU execution.</h2>
          </div>
          <p>
            A practical stack for rigorous model work and efficient training
            systems.
          </p>
        </div>
        <div className="stack-grid">
          {stack.map(([category, ...items]) => (
            <article key={category}>
              <h3>{category}</h3>
              <div>
                {items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="roles">
          <p>Open to internship roles</p>
          <div>
            <span>ML Research Engineer</span>
            <span>ML Systems Engineer</span>
            <span>Applied ML / LLM Engineer</span>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div>
          <p className="section-number">04 / contact</p>
          <h2>Let&apos;s make model gains measurable.</h2>
        </div>
        <div className="footer-links">
          <a href="mailto:medvedguk@gmail.com">medvedguk@gmail.com ↗</a>
          <a href="https://github.com/BearAx" target="_blank" rel="noreferrer">
            github.com/BearAx ↗
          </a>
        </div>
        <p className="footer-note">
          Aleksandr Medvedev · Paris / Remote
        </p>
      </footer>
    </main>
  );
}
