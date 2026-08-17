import { CORRIDOR_FACTS, HUBS_EUROPE, HUBS_TAIWAN, type Hub } from '../data/content';
import { useReveal } from '../hooks/useReveal';

function HubList({ side, flag, title, hubs }: { side: 'eu' | 'tw'; flag: string; title: string; hubs: Hub[] }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div className={`hub-col hub-${side}`} ref={ref}>
      <h3 className="hub-title">
        <span className="hub-flag" aria-hidden="true">{flag}</span>
        {title}
      </h3>
      <ul className="hub-list">
        {hubs.map(h => (
          <li key={h.city}>
            <span className="hub-dot" aria-hidden="true" />
            <strong>{h.city}</strong>
            <em>{h.note}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Corridor() {
  return (
    <section className="section corridor" id="corridor">
      <div className="container">
        <div className="section-head center">
          <span className="section-eyebrow">The corridor</span>
          <h2>Basel to Hsinchu, in one conversation.</h2>
          <p className="section-sub">
            Two biotech ecosystems that need each other and rarely meet.
            ETBA exists to close that distance, cluster by cluster, person by person.
          </p>
        </div>

        <div className="corridor-grid">
          <HubList side="eu" flag="🇪🇺" title="European hubs" hubs={HUBS_EUROPE} />

          <div className="corridor-link" aria-hidden="true">
            <svg viewBox="0 0 60 400" preserveAspectRatio="none" className="corridor-line">
              <defs>
                <linearGradient id="corridorGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0066ff" />
                  <stop offset="100%" stopColor="#e63946" />
                </linearGradient>
              </defs>
              <path d="M30 0 C10 120, 50 280, 30 400" stroke="url(#corridorGrad)" strokeWidth="2" fill="none" strokeDasharray="6 8" />
            </svg>
            <span className="corridor-badge">⇄</span>
          </div>

          <HubList side="tw" flag="🇹🇼" title="Taiwanese hubs" hubs={HUBS_TAIWAN} />
        </div>

        <ul className="corridor-facts">
          {CORRIDOR_FACTS.map(f => (
            <li key={f.stat}>
              <strong>{f.stat}</strong>
              <p>{f.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
