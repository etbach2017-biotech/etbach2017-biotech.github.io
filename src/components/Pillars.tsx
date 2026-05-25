import { useReveal } from '../hooks/useReveal';

type PillarCardProps = {
  icon: React.ReactNode;
  title: string;
  body: string;
};

function PillarCard({ icon, title, body }: PillarCardProps) {
  const ref = useReveal<HTMLElement>();
  return (
    <article className="pillar" ref={ref}>
      <div className="pillar-icon" aria-hidden="true">{icon}</div>
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  );
}

const ICON_PROPS = {
  width: 32,
  height: 32,
  viewBox: '0 0 48 48',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export default function Pillars() {
  return (
    <section className="section section-alt" id="pillars">
      <div className="container">
        <div className="section-head center">
          <span className="section-eyebrow">What we do</span>
          <h2>Three pillars, one mission.</h2>
          <p className="section-sub">
            Everything we organise — every meetup, every panel, every introduction —
            traces back to one of these three commitments.
          </p>
        </div>

        <div className="pillar-grid">
          <PillarCard
            title="Network of experts"
            body="A trusted community of biotech, pharma, and medtech professionals — connected across disciplines and continents."
            icon={
              <svg {...ICON_PROPS}>
                <circle cx="14" cy="14" r="5" />
                <circle cx="34" cy="14" r="5" />
                <circle cx="14" cy="34" r="5" />
                <circle cx="34" cy="34" r="5" />
                <line x1="19" y1="14" x2="29" y2="14" />
                <line x1="14" y1="19" x2="14" y2="29" />
                <line x1="34" y1="19" x2="34" y2="29" />
                <line x1="19" y1="34" x2="29" y2="34" />
                <line x1="18" y1="18" x2="30" y2="30" />
              </svg>
            }
          />
          <PillarCard
            title="International collaboration"
            body="Catalysing scientific and industrial partnerships between Taiwan and Europe — from joint research to co-development."
            icon={
              <svg {...ICON_PROPS}>
                <circle cx="24" cy="24" r="18" />
                <path d="M6 24 H42" />
                <path d="M24 6 C32 14 32 34 24 42 C16 34 16 14 24 6" />
              </svg>
            }
          />
          <PillarCard
            title="Continuous education"
            body="Seminars, workshops, and career conversations that keep our community at the edge of where the field is heading next."
            icon={
              <svg {...ICON_PROPS}>
                <path d="M6 18 L24 9 L42 18 L24 27 Z" />
                <path d="M12 22 V32 C12 32 17 36 24 36 C31 36 36 32 36 32 V22" />
                <line x1="42" y1="18" x2="42" y2="30" />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
}
