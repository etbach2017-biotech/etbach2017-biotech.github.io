export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        <svg className="hero-pattern" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.2" fill="rgba(255,255,255,0.18)" />
            </pattern>
          </defs>
          <rect width="800" height="600" fill="url(#dots)" />
          <g stroke="rgba(255,255,255,0.22)" strokeWidth="1.4" fill="none">
            <path d="M50 80 Q200 40 350 80 T650 80" />
            <path d="M50 80 Q200 120 350 80 T650 80" />
            <path d="M120 520 Q300 480 480 520 T780 520" />
            <path d="M120 520 Q300 560 480 520 T780 520" />
          </g>
        </svg>
      </div>

      <div className="container hero-grid">
        <div className="hero-text">
          <span className="eyebrow">Est. 2017 · 20+ countries</span>
          <h1>
            Bridging biotech innovation between{' '}
            <span className="hl">Europe</span> and <span className="hl tw">Taiwan</span>.
          </h1>
          <p className="lead">
            ETBA connects scientists, clinicians, and industry leaders advancing
            biotechnology, pharmaceuticals, and medical technology — building
            the partnerships that turn research into impact.
          </p>
          <div className="hero-actions">
            <a
              href="https://octagonal-giant-a45.notion.site/367f9cd0402f803cbc00e9130e746802?pvs=105"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign up to join
            </a>
            <a href="#about" className="btn btn-ghost">Our mission →</a>
          </div>
          <ul className="hero-stats" aria-label="Key statistics">
            <li><strong>7</strong><span>country teams</span></li>
            <li><strong>20+</strong><span>countries reached</span></li>
            <li><strong>3</strong><span>core pillars</span></li>
          </ul>
        </div>

        <div className="hero-card" aria-hidden="true">
          <div className="card-glow" />
          <div className="card-inner">
            <div className="card-row">
              <span className="dot dot-eu" />
              <div>
                <p className="card-label">Europe</p>
                <p className="card-value">CH · DE · FR · ES · UK · NL</p>
              </div>
            </div>
            <div className="card-line">
              <svg viewBox="0 0 200 30" width="100%" height="30">
                <path d="M5 15 Q100 -10 195 15" stroke="#0066ff" strokeWidth="2" fill="none" strokeDasharray="4 4" />
                <circle cx="5" cy="15" r="4" fill="#0066ff" />
                <circle cx="195" cy="15" r="4" fill="#e63946" />
              </svg>
            </div>
            <div className="card-row">
              <span className="dot dot-tw" />
              <div>
                <p className="card-label">Taiwan</p>
                <p className="card-value">Taipei · Hsinchu · Tainan</p>
              </div>
            </div>
            <hr />
            <p className="card-meta">A two-way exchange of talent, science, and capital.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
