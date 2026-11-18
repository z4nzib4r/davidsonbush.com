export const site = {
  name: 'Davidson-Bush Inc.',
  shortName: 'Davidson-Bush',
  tagline: 'Plumbing · Heating · Cooling · Boilers',
  phone: '740-592-5907',
  phoneHref: 'tel:+17405925907',
  license: 'OH LIC #16685',
  mailing: { line1: 'PO Box 189', city: 'Athens', state: 'OH', zip: '45701' },
  area: 'Athens, Ohio and the surrounding area',
  brands: ['Rheem', 'American Standard', 'Delta'],
};

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/services/', label: 'Services' },
  { href: '/about/', label: 'Our Team' },
  { href: '/contact/', label: 'Contact' },
];

export type ServiceKey = 'plumbing' | 'heating' | 'cooling' | 'boilers';

export const services: {
  key: ServiceKey;
  title: string;
  blurb: string;
  items: string[];
}[] = [
  {
    key: 'plumbing',
    title: 'Plumbing',
    blurb: 'Leaks, clogs and fixtures — handled cleanly, in homes and businesses.',
    items: [
      'Leak detection & pipe repair',
      'Toilets, sinks & faucets',
      'Water heater repair & replacement',
      'Drain clearing',
      'New fixture installation',
    ],
  },
  {
    key: 'heating',
    title: 'Heating',
    blurb: 'Keep the house warm through an Ohio winter, without the surprises.',
    items: [
      'Furnace repair',
      'Seasonal tune-ups',
      'New furnace installation',
      'Thermostats & controls',
    ],
  },
  {
    key: 'cooling',
    title: 'Cooling',
    blurb: 'When the A/C quits in July, we get it running again.',
    items: [
      'Central A/C repair',
      'System replacement',
      'Heat pumps',
      'Preventive maintenance',
    ],
  },
  {
    key: 'boilers',
    title: 'Boilers',
    blurb: 'Hot-water and steam systems, serviced by a lead boiler technician.',
    items: [
      'Boiler service & repair',
      'Radiators & hydronic heat',
      'Boiler replacement',
      'Annual safety checks',
    ],
  },
];

import charles from '../assets/team/charles-lantz.jpg';
import tammie from '../assets/team/tammie-linton.jpg';
import sharon from '../assets/team/sharon-young.jpg';
import ben from '../assets/team/ben-simmons.jpg';
import dave from '../assets/team/dave-mayes.jpg';
import justin from '../assets/team/justin-pinkerton.jpg';

export const team = [
  { name: 'Charles Lantz', short: 'Manager · Lead HVAC Tech', role: 'Manager & Lead HVAC, Boiler and Electronics Technician', photo: charles },
  { name: 'Tammie Linton', short: 'Office Manager', role: 'Office Manager & Coordinator', photo: tammie },
  { name: 'Sharon Young', short: 'Accountant & H/R', role: 'Company Accountant & H/R', photo: sharon },
  { name: 'Ben Simmons', short: 'Lead Plumbing Specialist', role: 'Lead Plumbing Specialist', photo: ben },
  { name: 'Dave Mayes', short: 'Plumbing Tech Assistant', role: 'Plumbing Technician’s Assistant', photo: dave },
  { name: 'Justin Pinkerton', short: 'HVAC Tech Assistant', role: 'HVAC Technician’s Assistant', photo: justin },
];
