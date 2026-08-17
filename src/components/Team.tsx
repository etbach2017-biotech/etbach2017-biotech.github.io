import { CONTACT_EMAIL, CORE_TEAM, type TeamMember } from '../data/content';
import { useReveal } from '../hooks/useReveal';

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map(part => part[0]?.toUpperCase() ?? '')
    .join('');
}

function TeamCard({ name, role, base, photo }: TeamMember) {
  const ref = useReveal<HTMLLIElement>();
  const named = name.trim().length > 0;

  return (
    <li className={`team-card ${named ? '' : 'open-seat'}`} ref={ref}>
      <div className="team-avatar" aria-hidden="true">
        {photo && named
          ? <img src={photo} alt="" loading="lazy" />
          : <span>{named ? initials(name) : '·'}</span>}
      </div>
      <strong>{named ? name : 'To be announced'}</strong>
      <em>{role}</em>
      {base && <span className="team-base">{base}</span>}
    </li>
  );
}

export default function Team() {
  return (
    <section className="section" id="team">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Our team</span>
          <h2>The people running ETBA right now.</h2>
          <p className="section-sub">
            ETBA is volunteer-run. The current core team keeps the programme,
            the partnerships, and the chapters moving.
          </p>
        </div>

        <ul className="team-grid" role="list">
          {CORE_TEAM.map(member => (
            <TeamCard key={member.role} {...member} />
          ))}
        </ul>

        <p className="local-rep">
          <strong>Local representatives.</strong> Each country has its own
          contact person for meetups, introductions, and visiting members.
          Contact us at{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> to find out
          who represents your country, or to put yourself forward for a country
          without one yet.
        </p>
      </div>
    </section>
  );
}
