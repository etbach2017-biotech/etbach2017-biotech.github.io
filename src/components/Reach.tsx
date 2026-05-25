import { REACH } from '../data/content';
import { useReveal } from '../hooks/useReveal';

function ReachCard({ flag, country, cities, highlight }: typeof REACH[number]) {
  const ref = useReveal<HTMLLIElement>();
  return (
    <li ref={ref} className={`reach-card ${highlight ? 'highlight' : ''}`}>
      <span className="flag" aria-hidden="true">{flag}</span>
      <strong>{country}</strong>
      <em>{cities}</em>
    </li>
  );
}

export default function Reach() {
  return (
    <section className="section" id="reach">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Our reach</span>
          <h2>Teams on the ground in seven countries.</h2>
          <p className="section-sub">
            Local chapters mean local relevance — and global continuity.
          </p>
        </div>

        <ul className="reach-grid" role="list">
          {REACH.map(item => (
            <ReachCard key={item.country} {...item} />
          ))}
        </ul>
      </div>
    </section>
  );
}
