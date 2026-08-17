type Props = {
  variant?: 'header' | 'footer';
};

export default function Brand({ variant = 'header' }: Props) {
  const isFooter = variant === 'footer';
  return (
    <a
      href={isFooter ? '#top' : '#top'}
      className={`brand ${isFooter ? 'brand-footer' : ''}`}
      aria-label="ETBA: Europe-Taiwan Biotech Association, home"
    >
      <img
        src="/logo_small_bright-7.png"
        alt="ETBA: Europe-Taiwan Biotech Association"
        className="brand-logo"
        width={isFooter ? 180 : 150}
        height={isFooter ? 86 : 72}
        loading={isFooter ? 'lazy' : 'eager'}
      />
    </a>
  );
}
