import Brand from './Brand';
import { CONTACT_EMAIL, LUMA_URL, SIGNUP_BUSINESS, SIGNUP_INDIVIDUAL } from '../data/content';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Brand variant="footer" />
          <p className="footer-tag">
            A volunteer network bridging biotech across Europe and Taiwan.
          </p>
        </div>

        <div>
          <h4>Explore</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#pillars">What we do</a></li>
            <li><a href="#sectors">Focus areas</a></li>
            <li><a href="#events">Events &amp; news</a></li>
            <li><a href="#team">Our team</a></li>
          </ul>
        </div>

        <div>
          <h4>Membership</h4>
          <ul>
            <li>
              <a href={SIGNUP_INDIVIDUAL} target="_blank" rel="noopener noreferrer">
                Individual (free)
              </a>
            </li>
            <li>
              <a href={SIGNUP_BUSINESS} target="_blank" rel="noopener noreferrer">
                Business membership
              </a>
            </li>
            <li><a href="#membership">Both options</a></li>
            <li><a href="#ecosystem">Partner with us</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4>Connect</h4>
          <ul>
            <li><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li>
            <li><a href={LUMA_URL} target="_blank" rel="noopener noreferrer">Event calendar (Luma)</a></li>
            <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener">LinkedIn</a></li>
            <li><a href="https://www.facebook.com/" target="_blank" rel="noopener">Facebook</a></li>
            <li><a href="https://x.com/" target="_blank" rel="noopener">X (Twitter)</a></li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© 2017–{year} Europe–Taiwan Biotech Association · 歐洲台灣生技協會</p>
        <p className="footer-made">Built with care in Europe &amp; Taiwan.</p>
      </div>
    </footer>
  );
}
