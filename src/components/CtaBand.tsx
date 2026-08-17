import { SIGNUP_BUSINESS, SIGNUP_INDIVIDUAL } from '../data/content';
import { useReveal } from '../hooks/useReveal';

export default function CtaBand() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="cta-band" id="join">
      <div className="container cta-inner" ref={ref}>
        <div>
          <h2>Ready to bridge the two ecosystems?</h2>
          <p>
            Individual membership is free and takes two minutes. Business
            membership starts with a short form and a conversation.
          </p>
        </div>
        <div className="cta-actions">
          <a href={SIGNUP_INDIVIDUAL} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Join as an individual
          </a>
          <a href={SIGNUP_BUSINESS} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
            Business membership →
          </a>
        </div>
      </div>
    </section>
  );
}
