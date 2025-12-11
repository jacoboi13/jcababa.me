import { useEffect, useState } from 'react';

export interface Content {
  header: {
    brandName: { bold: string; normal: string };
    ctaButton: string;
    ctaButtonLink: string;
    logoSrc: string;
    logoAlt: string;
  };
  hero: {
    heading: {
      part1: string;
      name: string;
      part2: string;
      title: string;
    };
    subheading: {
      intro: string;
      emphasis: string;
      conclusion: string;
    };
    buttons: {
      primary: string;
      primaryLink: string;
      secondary: string;
    };
    trustBadge: string;
    imageSrc: string;
    imageAlt: string;
    avatarAlt: string;
    gradient: {
      colorLeft: string;
      colorRight: string;
    };
    brandPersonas: Array<{ src: string; alt: string }>;
  };
  logoCarousel: {
    logos: Array<{ src: string; alt: string }>;
  };
  stats: {
    imageSrc: string;
    imageAlt: string;
    gradient: {
      colorLeft: string;
      colorRight: string;
    };
    metrics: Array<{ value: string; label: string }>;
    skills: Array<{ name: string; percentage: number }>;
    awards: {
      organization: string;
      title: string;
      imageAlt: string;
    };
    buttons: {
      primary: string;
      primaryLink: string;
      secondary: string;
    };
  };
  ticker: {
    text: string;
  };
  projects: {
    scrollIndicator: string;
    iconAlt: string;
    cards: Array<{
      title: string;
      description: string;
      bgImage: string;
      link: string;
    }>;
  };
  cta: {
    buttons: {
      primary: string;
      primaryLink: string;
      secondary: string;
    };
  };
  footer: {
    poweredByText: string;
    poweredByName: string;
    socialLabels: {
      linkedin: string;
      whatsapp: string;
      dribbble: string;
      discord: string;
    };
    socialLinks: Array<{ platform: string; href: string }>;
  };
}

export function useContent() {
  const [content, setContent] = useState<Content | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch('/content.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to load content');
        }
        return response.json();
      })
      .then((data) => {
        setContent(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return { content, loading, error };
}
