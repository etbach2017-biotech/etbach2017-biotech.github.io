import { SECTORS, type Sector } from '../data/content';
import { useReveal } from '../hooks/useReveal';

function SectorCard({ sector, index }: { sector: Sector; index: number }) {
  const ref = useReveal<HTMLElement>();
  return (
    <article className="sector" ref={ref}>
      <span className="sector-num" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
      <h3>{sector.title}</h3>
      <p>{sector.body}</p>
      <ul className="tag-row">
        {sector.tags.map(t => <li key={t}>{t}</li>)}
      </ul>
    </article>
  );
}

export default function Sectors() {
  return (
    <section className="section" id="sectors">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Focus areas</span>
          <h2>Where our members actually work.</h2>
          <p className="section-sub">
            ETBA is not a general business club. These are the six areas our
            programming, introductions, and partner requests keep coming back to.
          </p>
        </div>

        <div className="sector-grid">
          {SECTORS.map((s, i) => <SectorCard key={s.title} sector={s} index={i} />)}
        </div>
      </div>
    </section>
  );
}
