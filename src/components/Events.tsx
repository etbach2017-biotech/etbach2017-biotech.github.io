import { EVENTS } from '../data/content';
import { useReveal } from '../hooks/useReveal';

function EventCard({ badge, title, body, cta }: typeof EVENTS[number]) {
  const ref = useReveal<HTMLElement>();
  return (
    <article className="event-card" ref={ref}>
      <div className="event-date"><span>{badge}</span></div>
      <h3>{title}</h3>
      <p>{body}</p>
      <a href="mailto:contact@etba.ch" className="link-arrow light">{cta}</a>
    </article>
  );
}

export default function Events() {
  return (
    <section className="section section-dark" id="events">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow light">Events</span>
          <h2>Where the community comes together.</h2>
          <p className="section-sub light">
            Our calendar runs from annual symposia to local mixers and online
            journal clubs, shaped by members, for members.
          </p>
        </div>

        <div className="events-grid">
          {EVENTS.map(e => (
            <EventCard key={e.title} {...e} />
          ))}
        </div>
      </div>
    </section>
  );
}
