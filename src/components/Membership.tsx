import { TIERS, type Tier } from '../data/content';
import { useReveal } from '../hooks/useReveal';

function TierCard({ tier }: { tier: Tier }) {
  const ref = useReveal<HTMLElement>();
  return (
    <article
      ref={ref}
      className={`tier tier-${tier.id} ${tier.featured ? 'tier-featured' : ''}`}
      aria-labelledby={`tier-${tier.id}-name`}
    >
      {tier.featured && <span className="tier-flag">Most requested by companies</span>}

      <span className="tier-eyebrow">{tier.eyebrow}</span>
      <h3 id={`tier-${tier.id}-name`}>{tier.name}</h3>

      <p className="tier-price">
        <strong>{tier.price}</strong>
        <span>{tier.priceNote}</span>
      </p>

      <p className="tier-pitch">{tier.pitch}</p>

      <ul className="tier-audience" aria-label="Who it is for">
        {tier.audience.map(a => <li key={a}>{a}</li>)}
      </ul>

      <a
        href={tier.href}
        className={`btn ${tier.featured ? 'btn-primary' : 'btn-outline'} tier-cta`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {tier.cta}
      </a>
    </article>
  );
}

export default function Membership() {
  return (
    <section className="section section-alt" id="membership">
      <div className="container">
        <div className="section-head center">
          <span className="section-eyebrow">Membership</span>
          <h2>Two ways in, one network.</h2>
          <p className="section-sub">
            Join as a person or bring your organisation. Both routes open the
            same Europe–Taiwan community; business membership adds the
            visibility and platform a company needs.
          </p>
        </div>

        <div className="tier-grid">
          {TIERS.map(t => <TierCard key={t.id} tier={t} />)}
        </div>

        <p className="tier-footnote">
          Not sure which fits? Start as an individual; you can add an
          organisation later without losing anything.
        </p>
      </div>
    </section>
  );
}
