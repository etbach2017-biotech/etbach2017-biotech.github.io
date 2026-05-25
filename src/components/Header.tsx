import { useEffect, useState } from 'react';
import Brand from './Brand';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#pillars', label: 'What we do' },
  { href: '#reach', label: 'Reach' },
  { href: '#events', label: 'Events' },
  { href: '#membership', label: 'Membership' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-wrap">
        <Brand />

        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <span /><span /><span />
        </button>

        <nav className={`primary-nav ${open ? 'open' : ''}`} aria-label="Primary">
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href} onClick={close}>{link.label}</a>
          ))}
          <a href="mailto:contact@etba.ch" className="nav-cta" onClick={close}>Join us →</a>
        </nav>
      </div>
    </header>
  );
}
