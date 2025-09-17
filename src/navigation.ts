import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Services',
      href: getPermalink('/#services'),
    },
    {
      text: 'About us',
      href: getPermalink('/#about'),
    },
    /*
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    */
  ],
  actions: [{ text: 'Contact us', href: 'mailto:hello@48k.com.au', target: '_blank' }],
};

export const footerData = {
  links: [
  ],
  secondaryLinks: [
  ],
  socialLinks: [
  ],
  footNote: `
    © 2025 48K Consulting · We use AI responsibly: always with care, oversight, and human judgement.
    <br>
    <em class="text-gray-500">48K Consulting acknowledge the Traditional Owners of the land on which our offices are situated, and pays respect to Elders past, present and emerging.</em>
  `,
};
