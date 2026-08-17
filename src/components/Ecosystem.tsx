import { CONTACT_EMAIL, ECOSYSTEM } from '../data/content';
import { useReveal } from '../hooks/useReveal';

function EcoCard({ title, body }: { title: string; body: string }) {
  const ref = useReveal<HTMLLIElement>();
  return (
    <li className="eco-card" ref={ref}>
      <h3>{title}</h3>
      <p>{body}</p>
    </li>
  );
}

export default function Ecosystem() {
  return (
    <section className="section" id="ecosystem">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Who we work with</span>
          <h2>The organisations around our members.</h2>
          <p className="section-sub">
            Business membership plugs your organisation into this map, and into
            the people inside it who already know how the other side operates.
          </p>
        </div>

        <ul className="eco-grid" role="list">
          {ECOSYSTEM.map(e => <EcoCard key={e.title} {...e} />)}
        </ul>

        <p className="eco-note">
          Want your organisation on this map?{' '}
          <a href={`mailto:${CONTACT_EMAIL}?subject=ETBA%20partnership`}>Talk to us about partnering →</a>
        </p>
      </div>
    </section>
  );
}
