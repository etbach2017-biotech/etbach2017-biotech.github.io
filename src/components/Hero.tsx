import { SIGNUP_BUSINESS, SIGNUP_INDIVIDUAL } from '../data/content';

/** Rungs connecting the two strands of the background helix. */
const RUNGS = Array.from({ length: 11 }, (_, i) => 60 + i * 55);

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

          {/* double helix: Europe strand and Taiwan strand */}
          <g fill="none" strokeWidth="1.6">
            <path d="M40 80 Q200 30 360 80 T680 80" stroke="rgba(125,211,252,0.35)" />
            <path d="M40 80 Q200 130 360 80 T680 80" stroke="rgba(252,165,165,0.3)" />
            <path d="M120 520 Q300 470 480 520 T800 520" stroke="rgba(125,211,252,0.28)" />
            <path d="M120 520 Q300 570 480 520 T800 520" stroke="rgba(252,165,165,0.24)" />
          </g>
          <g stroke="rgba(255,255,255,0.14)" strokeWidth="1">
            {RUNGS.map(x => (
              <line key={x} x1={x} y1="62" x2={x} y2="98" />
            ))}
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
            biotechnology, pharmaceuticals, and medical technology, building
            the partnerships that turn research into impact.
          </p>
          <div className="hero-actions">
            <a
              href={SIGNUP_INDIVIDUAL}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join as an individual
            </a>
            <a
              href={SIGNUP_BUSINESS}
              className="btn btn-ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              Business membership →
            </a>
          </div>
          <p className="hero-note">
            Free for individuals · Tailored for organisations ·{' '}
            <a href="#membership">see both options →</a>
          </p>
          <ul className="hero-stats" aria-label="Key statistics">
            <li><strong>7</strong><span>country teams</span></li>
            <li><strong>20+</strong><span>countries reached</span></li>
            <li><strong>6</strong><span>focus areas</span></li>
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
