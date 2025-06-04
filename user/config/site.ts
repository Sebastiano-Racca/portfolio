import type { Site } from '$lib/types/site';
import type { Giscus } from '$lib/types/giscus';
import type { DD } from '$lib/types/dd';

import Avatar from '$assets/avatar.png';
import Avatar_128 from '$assets/avatar.png?w=128&h=128&format=avif;webp&imagetools';
import Avatar_48_PNG from '$assets/avatar.png?w=48&h=48&imagetools';
import Avatar_96_PNG from '$assets/avatar.png?w=96&h=96&imagetools';
import Avatar_192_PNG from '$assets/avatar.png?w=192&h=192&imagetools';
import Avatar_512_PNG from '$assets/avatar.png?w=512&h=512&imagetools';

import SiteCover from '$assets/qwer.webp';

export const siteConfig: Site.Config = {
  url: 'https://portfolio.racca.me',
  title: 'Portfolio di Sebastiano Racca',
  subtitle: 'Portfolio Digitale di Sebastiano Racca',
  description: 'Portfolio Digitale di Sebastiano Racca',
  lang: 'it',
  timeZone: 'Europe/Rome',
  since: 2022,
  cover: SiteCover,
  author: {
    name: 'Sebastiano Racca',
    status: '⚖️',
    statusTip:
      'Portfolio digitale di <a href="https://github.com/Sebastiano-Racca/" rel="external" style="color:#0F0" onMouseOver="this.style.color=\'#0FF\'" onMouseOut="this.style.color=\'#0F0\'" >Educazione Civica</a>',
    avatar: Avatar,
    avatar_128: Avatar_128,
    avatar_48_png: Avatar_48_PNG,
    avatar_96_png: Avatar_96_PNG,
    avatar_192_png: Avatar_192_PNG,
    avatar_512_png: Avatar_512_PNG,
    website: 'https://github.com/Sebastiano-Racca/portfolio',
    github: 'https://github.com/Sebastiano-Racca',
    email: 'sebastiano@racca.me',
    bio: `Studente dell'Agnelli<br>Con una passione per l'informatica`,
  },
};

export const headConfig: Site.Head = {
  me: ['https://github.com/Sebastiano-Racca'],
  custom: ({ dev }) =>
    dev
      ? [
          // For Development Environment
        ]
      : [
          // For Production Environment
        ],
};

export const dateConfig: Site.DateConfig = {
  toPublishedString: {
    locales: 'it-IT',
    options: {
      year: 'numeric',
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      timeZone: `${siteConfig.timeZone}`,
    },
  },
  toUpdatedString: {
    locales: 'it-IT',
    options: {
      year: 'numeric',
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      timeZone: `${siteConfig.timeZone}`,
    },
  },
};

// Replace with your own Giscus setting
// See https://giscus.app/
export const giscusConfig: Giscus.Config = {
  enable: false,
  id: 'giscus-comment',
  repo: import.meta.env.QWER_GISCUS_REPO,
  repoId: import.meta.env.QWER_GISCUS_REPO_ID,
  category: import.meta.env.QWER_GISCUS_CATEGORY,
  categoryId: import.meta.env.QWER_GISCUS_CATEGORY_ID,
  mapping: 'pathname',
  reactionsEnabled: '1',
  emitMetadata: '0',
  inputPosition: 'top',
  loading: 'lazy',
  lang: 'en',
  'data-strict': '0',
};

type NavConfigType = {
  [key: string]: (DD.Nav | DD.Link)[];
};

export const navConfig: NavConfigType = {
  en: [
    {
      name: 'About',
      url: '/about',
    },
  ],
};

type MobileNavConfigType = {
  [key: string]: DD.Nav;
};

export const mobilenavConfig: MobileNavConfigType = {
  it: {
    orientation: 2,
    links: [
      {
        name: 'About',
        url: '/about',
      },
    ],
  },
};
