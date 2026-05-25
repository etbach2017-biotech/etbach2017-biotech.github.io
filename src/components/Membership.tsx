import { MEMBER_BENEFITS } from '../data/content';
import { useReveal } from '../hooks/useReveal';

export default function Membership() {
  const cardRef = useReveal<HTMLElement>();

  return (
    <section className="section" id="membership">
      <div className="container join-wrap">
        <div className="join-text">
          <span className="section-eyebrow">Membership</span>
          <h2>Find your people in the biotech world.</h2>
          <p>
            Membership is free and open to anyone working — or hoping to work —
            in biotechnology, pharma, or medtech with a connection to Taiwan
            and Europe. Students and early-career researchers are especially
            welcome.
          </p>
          <ul className="check-list">
            {MEMBER_BENEFITS.map(b => <li key={b}>{b}</li>)}
          </ul>
          <a
            href="https://octagonal-giant-a45.notion.site/367f9cd0402f803cbc00e9130e746802?pvs=105"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sign up to join
          </a>
        </div>

        <aside className="join-card" ref={cardRef}>
          <p className="join-quote">
            “The most useful conference I went to all year wasn't a conference —
            it was an ETBA dinner with eight people in Basel.”
          </p>
          <p className="join-attr">— ETBA member, postdoc, Switzerland</p>
        </aside>
      </div>
    </section>
  );
}
