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
            <li><a href="#ecosystem">Partner with us</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4>Connect</h4>
          <ul>
            <li><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li>
            <li><a href={LUMA_URL} target="_blank" rel="noopener noreferrer">Event calendar (Luma)</a></li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© 2017–{year} Europe–Taiwan Biotech Association · 歐洲台灣生技協會</p>
      </div>
    </footer>
  );
}
