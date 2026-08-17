import { FAQ } from '../data/content';
import { useReveal } from '../hooks/useReveal';

function FaqItem({ q, a }: { q: string; a: string }) {
  const ref = useReveal<HTMLDetailsElement>();
  return (
    <details className="faq-item" ref={ref}>
      <summary>
        {q}
        <span className="faq-mark" aria-hidden="true" />
      </summary>
      <p>{a}</p>
    </details>
  );
}

export default function Faq() {
  return (
    <section className="section" id="faq">
      <div className="container faq-wrap">
        <div className="faq-intro">
          <span className="section-eyebrow">FAQ</span>
          <h2>Questions people ask before joining.</h2>
          <p className="section-sub">
            Still unsure? Write to us; a real person answers.
          </p>
        </div>

        <div className="faq-list">
          {FAQ.map(item => <FaqItem key={item.q} {...item} />)}
        </div>
      </div>
    </section>
  );
}
