// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Site metadata
export const SITE_TITLE = "Big City Life";
export const SITE_DESCRIPTION = "This is a template for an Astro site";
export const SITE_URL = "https://bigcity.casset.cat";
export const SITE_AUTHOR = "jramma.com";
export const SITE_EMAIL = "contact@jramma.com";

// Social media links
export const SOCIAL_LINKS = {
  website: "https://jramma.com",
};

// Navigation URLs
export const URLS = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About me" },
  { href: "/blog", text: "Blog" },
  { href: "/collection", text: "Collection" },
  { href: "/contact", text: "Contact" },
];

// RSS configuration
export const RSS_CONFIG = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  site: SITE_URL,
  author: SITE_AUTHOR,
  email: SITE_EMAIL,
  language: "en",
  copyright: `© ${new Date().getFullYear()} ${SITE_AUTHOR}. All rights reserved.`,
};

// Content collections configuration
export const COLLECTIONS = {
  blog: "blog",
  collection: "collection",
} as const;

// Type definitions
export type Post = {
  title: string;
  date: Date;
  description: string;
  tags: string[];
  image: string;
  link: string;
  content: string;
};

export type CollectionItem = {
  title: string;
  date: Date;
  description: string;
  image: string;
  technique: string;
  location: string;
};

export type SocialLink = keyof typeof SOCIAL_LINKS;

// Utility functions
export const formatDate = (date: Date): string => {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const getCurrentYear = (): number => {
  return new Date().getFullYear();
};