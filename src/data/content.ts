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

export type EventItem = {
  badge: string;
  title: string;
  body: string;
  cta: string;
};

export const REACH: ReachItem[] = [
  { flag: '🇨🇭', country: 'Switzerland', cities: 'Basel · Zürich' },
  { flag: '🇩🇪', country: 'Germany', cities: 'Munich · Berlin' },
  { flag: '🇫🇷', country: 'France', cities: 'Paris · Lyon' },
  { flag: '🇪🇸', country: 'Spain', cities: 'Barcelona' },
  { flag: '🇬🇧', country: 'United Kingdom', cities: 'London · Cambridge' },
  { flag: '🇳🇱', country: 'Netherlands', cities: 'Amsterdam' },
  { flag: '🇹🇼', country: 'Taiwan', cities: 'Taipei · Hsinchu', highlight: true },
];

export const EVENTS: EventItem[] = [
  {
    badge: 'Upcoming',
    title: 'Annual ETBA Symposium',
    body: 'Our flagship gathering bringing speakers from across Europe and Taiwan together for a day of science, policy, and partnership.',
    cta: 'Get notified →',
  },
  {
    badge: 'Recurring',
    title: 'Country chapter meetups',
    body: 'Informal evenings hosted by each country team — a low-pressure way to meet local members and visiting researchers.',
    cta: 'Find your chapter →',
  },
  {
    badge: 'Online',
    title: 'Seminars & webinars',
    body: 'Talks on translational research, regulatory paths, and the business of biotech — recorded and shared with members.',
    cta: 'Suggest a topic →',
  },
];

export const MEMBER_BENEFITS = [
  'Access to local chapter events and the wider member directory',
  'Invitations to symposia, workshops, and online seminars',
  "Introductions across our European and Taiwanese networks",
  "A voice in shaping ETBA's future programming",
];
