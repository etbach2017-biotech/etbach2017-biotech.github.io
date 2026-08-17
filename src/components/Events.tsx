import { LUMA_URL, NEWS, type NewsItem } from '../data/content';
import { useReveal } from '../hooks/useReveal';

function NewsCard(item: NewsItem) {
  const ref = useReveal<HTMLElement>();
  const external = item.href?.startsWith('http');

  return (
    <article className={`news-card ${item.image ? 'has-media' : ''}`} ref={ref}>
      {item.image && (
        <div className="news-media">
          <img src={item.image} alt="" loading="lazy" />
        </div>
      )}
      <div className="news-body">
        <div className="news-meta">
          <span className="news-kind">{item.kind}</span>
          <span className="news-date">{item.date}</span>
        </div>
        <h3>{item.title}</h3>
        <p>{item.body}</p>
        {item.href && (
          <a
            href={item.href}
            className="link-arrow"
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            {item.linkLabel ?? 'Read more →'}
          </a>
        )}
      </div>
    </article>
  );
}

export default function Events() {
  return (
    <section className="section section-alt" id="events">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Events &amp; news</span>
          <h2>Where the community comes together.</h2>
          <p className="section-sub">
            Annual symposia, local mixers, online journal clubs, and the photos
            and updates from everything that has already happened.
          </p>
          <p className="events-calendar-note">
            Everything is listed on our{' '}
            <a href={LUMA_URL} target="_blank" rel="noopener noreferrer">
              Luma event calendar
            </a>
            . Subscribe and new events appear in your calendar automatically.
          </p>
        </div>

        <h3 className="subsection-title" id="news">Latest news</h3>
        <div className="news-grid">
          {NEWS.map(item => (
            <NewsCard key={item.title} {...item} />
          ))}
        </div>

        <div className="luma-band">
          <div>
            <h3>Never miss an event</h3>
            <p>
              Every ETBA event, across all chapters, is published on our Luma
              calendar. Subscribe once and the invitations come to you.
            </p>
          </div>
          <a
            href={LUMA_URL}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sign up on Luma →
          </a>
        </div>
      </div>
    </section>
  );
}
