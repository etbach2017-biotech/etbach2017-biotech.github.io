import type { ReactNode } from 'react';

export type Pillar = {
  title: string;
  body: string;
  icon: ReactNode;
};

export type ReachItem = {
  flag: string;
  country: string;
  cities: string;
  highlight?: boolean;
};


/* ───────── sign-up destinations ───────── */

export const SIGNUP_INDIVIDUAL =
  'https://octagonal-giant-a45.notion.site/367f9cd0402f803cbc00e9130e746802?pvs=105';

export const SIGNUP_BUSINESS =
  'https://octagonal-giant-a45.notion.site/36cf9cd0402f8056a2e3cec974155066?pvs=105';

export const CONTACT_EMAIL = 'contact@etba.ch';

/** Public event calendar. Members subscribe once and get every ETBA event. */
export const LUMA_URL = 'https://luma.com/etba';

/** Company page. Where chapter activity and member news get posted. */
export const LINKEDIN_URL = 'https://www.linkedin.com/company/etba/';

/* ───────── reach ─────────
   Rendered as a single country line inside the "Focus areas" section. */

export const REACH: ReachItem[] = [
  { flag: '🇨🇭', country: 'Switzerland', cities: 'Basel · Zürich · Lausanne' },
  { flag: '🇩🇪', country: 'Germany', cities: 'Munich · Berlin · Heidelberg' },
  { flag: '🇫🇷', country: 'France', cities: 'Paris · Lyon · Strasbourg' },
  { flag: '🇪🇸', country: 'Spain', cities: 'Barcelona · Madrid' },
  { flag: '🇬🇧', country: 'United Kingdom', cities: 'London · Cambridge · Oxford' },
  { flag: '🇳🇱', country: 'Netherlands', cities: 'Amsterdam · Leiden' },
  { flag: '🇹🇼', country: 'Taiwan', cities: 'Taipei · Hsinchu · Tainan', highlight: true },
];

/** Countries where members are active but no formal chapter team exists yet. */
export const REACH_EMERGING = [
  '🇸🇪 Sweden',
  '🇩🇰 Denmark',
  '🇧🇪 Belgium',
  '🇮🇪 Ireland',
  '🇮🇹 Italy',
  '🇦🇹 Austria',
  '🇵🇱 Poland',
  '🇨🇿 Czechia',
  '🇵🇹 Portugal',
  '🇫🇮 Finland',
];

/* ───────── biotech focus areas ───────── */

export type Sector = {
  title: string;
  body: string;
  tags: string[];
};

export const SECTORS: Sector[] = [
  {
    title: 'Drug discovery & translational medicine',
    body: 'From target validation to first-in-human, connecting academic discovery with the groups that can move it forward.',
    tags: ['Oncology', 'Immunology', 'Rare disease'],
  },
  {
    title: 'Biomanufacturing & CDMO',
    body: 'Process development, fill-finish, and scale-up, where Taiwanese capacity and European demand meet.',
    tags: ['Upstream', 'Downstream', 'QA/QC'],
  },
  {
    title: 'Precision medicine & genomics',
    body: 'Sequencing, biomarkers, and companion diagnostics across two very different data and consent landscapes.',
    tags: ['NGS', 'Biomarkers', 'Bioinformatics'],
  },
  {
    title: 'Medtech & digital health',
    body: 'Devices, biochips, and software as a medical device: Hsinchu hardware meeting European clinical validation.',
    tags: ['SaMD', 'Devices', 'Biochips'],
  },
  {
    title: 'Regulatory & market access',
    body: 'EMA, TFDA, and national payers: the practical detail of getting a product approved and reimbursed on both sides.',
    tags: ['EMA', 'TFDA', 'HTA'],
  },
  {
    title: 'Investment & business development',
    body: 'Licensing, joint ventures, and cross-border funding, plus the people who have already done the deal you are attempting.',
    tags: ['Licensing', 'VC', 'M&A'],
  },
];

/* ───────── news & updates ───────── */

export type NewsItem = {
  /** Displayed as-is, e.g. 'March 2026'. */
  date: string;
  kind: 'Event' | 'Recap' | 'eDM' | 'Announcement';
  title: string;
  body: string;
  /**
   * Optional photo or eDM artwork. Drop the file in `public/news/` and set
   * this to `/news/<filename>`. Leave undefined for a text-only post.
   */
  image?: string;
  /** Optional outward link: Luma page, LinkedIn post, PDF. */
  href?: string;
  linkLabel?: string;
};

/**
 * Newest first. To post an update: add an entry at the top of this array,
 * and put any photo or eDM image in `public/news/`.
 */
export const NEWS: NewsItem[] = [
  {
    date: 'Ongoing',
    kind: 'Event',
    title: 'All ETBA events now on Luma',
    body: 'Symposia, chapter meetups, webinars, and delegation trips are published on our Luma calendar. Subscribe once and every new event lands in your calendar automatically.',
    href: LUMA_URL,
    linkLabel: 'Subscribe to the calendar →',
  },
  {
    date: 'Ongoing',
    kind: 'Announcement',
    title: 'Follow ETBA on LinkedIn',
    body: 'Chapter activity, member news, and openings across the Europe–Taiwan corridor, posted as they happen.',
    href: LINKEDIN_URL,
    linkLabel: 'Follow us on LinkedIn →',
  },
];

/* ───────── core team ───────── */

export type TeamMember = {
  /** Leave empty to show the seat as "To be announced". */
  name: string;
  role: string;
  /** City or country, shown under the role. Optional. */
  base?: string;
  /**
   * Optional headshot. Drop the file in `public/team/` and set this to
   * `/team/<filename>`. Without it, the initials are shown instead.
   */
  photo?: string;
};

/** Current core team. */
export const CORE_TEAM: TeamMember[] = [
  { name: 'Yi-Heng Tai, PhD', role: 'President', photo: '/team/yi-heng-tai.png' },
  { name: 'Tzu-Hsiang (Linus) Kao, PhD', role: 'Vice President & Founder', photo: '/team/linus-kao.jpeg' },
  { name: 'Hsiao-Hsuan (Melody) Huang', role: 'Vice President', photo: '/team/melody-huang.jpeg' },
  { name: 'Nathan Kaiser', role: 'Legal & Business Team Lead', photo: '/team/nathan-kaiser.jpeg' },
  { name: 'Chia-Yun (Wendy) Wei', role: 'Legal & Project Manager', photo: '/team/wendy-wei.jpeg' },
  { name: 'Cheng-Wei Liao', role: 'IT Manager', photo: '/team/cheng-wei-liao.jpeg' },
];

/* ───────── membership ───────── */

export type Tier = {
  id: 'individual' | 'business';
  eyebrow: string;
  name: string;
  price: string;
  priceNote: string;
  pitch: string;
  audience: string[];
  cta: string;
  href: string;
  featured?: boolean;
};

export const TIERS: Tier[] = [
  {
    id: 'individual',
    eyebrow: 'For people',
    name: 'Individual membership',
    price: 'Free',
    priceNote: 'no fee, no renewal',
    pitch:
      'For anyone working, or hoping to work, in biotech, pharma, or medtech with a connection to Taiwan and Europe. Students and early-career researchers especially welcome.',
    audience: ['Students & PhDs', 'Postdocs', 'Industry professionals', 'Clinicians'],
    cta: 'Join as an individual',
    href: SIGNUP_INDIVIDUAL,
  },
  {
    id: 'business',
    eyebrow: 'For organisations',
    name: 'Business membership',
    price: 'Tailored',
    priceNote: 'scoped to your organisation',
    pitch:
      'For companies, institutes, and investors that want a standing presence in both ecosystems, with named contacts on either side rather than a cold-outreach list.',
    audience: ['Biotech & pharma', 'CDMOs & suppliers', 'Science parks', 'Investors & agencies'],
    cta: 'Talk to us about business membership',
    href: SIGNUP_BUSINESS,
    featured: true,
  },
];

/* ───────── ecosystem partners ───────── */

export const ECOSYSTEM = [
  { title: 'Universities & institutes', body: 'Research groups and tech-transfer offices on both continents.' },
  { title: 'Science parks & incubators', body: 'From Nangang and Hsinchu to BioValley and Medicon Valley.' },
  { title: 'Industry associations', body: 'Peer organisations that open doors we cannot open alone.' },
  { title: 'Startups & scale-ups', body: 'Teams looking for their first partner, plant, or clinical site abroad.' },
  { title: 'Investors & funds', body: 'Cross-border capital that understands both regulatory environments.' },
  { title: 'Public agencies', body: 'Trade offices and innovation agencies supporting the corridor.' },
];

/* ───────── FAQ ───────── */

export const FAQ = [
  {
    q: 'Who can join ETBA?',
    a: 'Anyone working in, or moving towards, biotechnology, pharmaceuticals, or medical technology with an interest in the Europe–Taiwan corridor. You do not need to be Taiwanese, and you do not need to be based in Europe.',
  },
  {
    q: 'Is individual membership really free?',
    a: 'Yes. ETBA is a volunteer-driven non-profit. Individual membership carries no fee and no renewal. Some events have a small ticket price to cover venue and catering costs.',
  },
  {
    q: 'What is the difference between individual and business membership?',
    a: 'Individual membership is for a person and gives you access to the community, events, and directory. Business membership is for an organisation: it covers your whole team and adds partner-directory visibility, introductions, speaking and sponsorship slots, and market-entry support.',
  },
  {
    q: 'How much does business membership cost?',
    a: 'It is scoped to the size of your organisation and what you want out of it. Start with the business membership form and we will come back with a concrete proposal.',
  },
  {
    q: 'How do local chapters work?',
    a: 'Each country team organises its own meetups, in its own language mix, at its own rhythm. Joining ETBA connects you to all of them, and most members attend wherever they happen to be travelling.',
  },
  {
    q: 'What language are events held in?',
    a: 'English is the working language across the network. Chapter meetups often switch between English and Mandarin, and local languages come up over dinner.',
  },
  {
    q: 'Can my company sponsor or host an event?',
    a: 'Yes. Hosting a chapter evening or sponsoring a symposium session is one of the most direct ways to meet the community. Business members get first refusal on slots.',
  },
];
