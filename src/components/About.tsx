import { useReveal } from '../hooks/useReveal';

export default function About() {
  const headRef = useReveal<HTMLHeadingElement>();
  const bodyRef = useReveal<HTMLDivElement>();

  return (
    <section className="section" id="about">
      <div className="container two-col">
        <div>
          <span className="section-eyebrow">About ETBA</span>
          <h2 ref={headRef}>A network built on shared science and mutual respect.</h2>
        </div>
        <div className="about-body" ref={bodyRef}>
          <p>
            The Europe–Taiwan Biotech Association (歐洲台灣生技協會) was founded
            in 2017 to enhance the connections and collaborations between
            Taiwan and European countries in biotechnology, pharmaceuticals,
            and medical technology.
          </p>
          <p>
            We operate as a volunteer-driven, non-profit network of researchers
            and professionals. Our members work in academic labs, hospitals,
            startups, and multinational companies, united by the belief that
            the best science happens when borders are low and curiosity is high.
          </p>
          <a href="#membership" className="link-arrow">See how to join →</a>
        </div>
      </div>
    </section>
  );
}
