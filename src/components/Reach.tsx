import { REACH, REACH_EMERGING } from '../data/content';
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
    <section className="section section-alt" id="reach">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Our reach</span>
          <h2>Teams on the ground in seven countries.</h2>
          <p className="section-sub">
            Local chapters mean local relevance, and global continuity.
          </p>
        </div>

        <ul className="reach-grid" role="list">
          {REACH.map(item => (
            <ReachCard key={item.country} {...item} />
          ))}
        </ul>

        <div className="reach-more">
          <h3>Members active in</h3>
          <ul className="chip-row" role="list">
            {REACH_EMERGING.map(c => <li key={c}>{c}</li>)}
          </ul>
          <p className="reach-note">
            No chapter where you are? That is usually how a new one starts.
            Join and tell us.
          </p>
        </div>
      </div>
    </section>
  );
}
