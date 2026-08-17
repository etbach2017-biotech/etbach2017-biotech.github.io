import { REACH, REACH_EMERGING, SECTORS, type Sector } from '../data/content';
import { useReveal } from '../hooks/useReveal';

function SectorRow({ sector }: { sector: Sector }) {
  const ref = useReveal<HTMLLIElement>();
  return (
    <li className="sector-row" ref={ref}>
      <h3>{sector.title}</h3>
      <ul className="tag-row" role="list">
        {sector.tags.map(t => <li key={t}>{t}</li>)}
      </ul>
    </li>
  );
}

export default function Sectors() {
  return (
    <section className="section" id="sectors">
      <div className="container">
        <div className="section-head compact">
          <span className="section-eyebrow">Focus areas</span>
          <h2>Where our members actually work.</h2>
          <p className="country-line">
            {REACH.map(r => `${r.flag} ${r.country}`).join(' · ')} — plus
            members active in {REACH_EMERGING.length} more European countries.
          </p>
        </div>

        <ul className="sector-list" role="list">
          {SECTORS.map(s => <SectorRow key={s.title} sector={s} />)}
        </ul>
      </div>
    </section>
  );
}
