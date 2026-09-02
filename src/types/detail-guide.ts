export type DetailGuideContent = {
  parent?: { href: string; label: string };
  breadcrumb: string;
  eyebrow: string;
  title: string;
  intro: string;
  quickAnswer: string;
  readingTime: string;
  overview: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    facts: { label: string; value: string }[];
    imageLabel: string;
    imageAlt: string;
    imagePosition?: string;
  };
  sections: {
    id: string;
    eyebrow: string;
    title: string;
    intro?: string;
    cards: { title: string; text: string }[];
  }[];
  decision: {
    eyebrow: string;
    title: string;
    intro: string;
    positiveTitle: string;
    positives: string[];
    questionTitle: string;
    questions: string[];
  };
  faqs: { question: string; answer: string }[];
  related: { href: string; eyebrow: string; title: string }[];
  note: string;
};
