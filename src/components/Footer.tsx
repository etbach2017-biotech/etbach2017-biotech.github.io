import Brand from './Brand';

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
          <h4>Site</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#pillars">What we do</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#membership">Membership</a></li>
          </ul>
        </div>

        <div>
          <h4>Connect</h4>
          <ul>
            <li><a href="mailto:contact@etba.ch">contact@etba.ch</a></li>
            <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener">LinkedIn</a></li>
            <li><a href="https://www.facebook.com/" target="_blank" rel="noopener">Facebook</a></li>
            <li><a href="https://x.com/" target="_blank" rel="noopener">X (Twitter)</a></li>
          </ul>
        </div>

        <div>
          <h4>Legal</h4>
          <ul>
            <li><a href="#">Privacy policy</a></li>
            <li><a href="#">Impressum</a></li>
            <li><a href="#">Cookie notice</a></li>
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
