export interface Pillar {
  emoji: string;
  title: string;
  description: string;
}

export interface PhilosophyItem {
  point: string;
}

export interface AboutSection {
  headline: string;
  subheadline: string;
  pillars: Pillar[];
  narrative: string[];
  whatIBring: {
    title: string;
    items: PhilosophyItem[];
  };
  howIWork: {
    title: string;
    items: PhilosophyItem[];
  };
}

const aboutData: AboutSection = {
  headline: "About Me",
  subheadline: "I build AI & cloud systems that turn real business problems into reliable software.",
  pillars: [
    {
      emoji: "🧠",
      title: "Engineering",
      description: "Distributed systems, cloud platforms, and AI apps built for production",
    },
    {
      emoji: "🤝",
      title: "Product & People",
      description: "I bridge engineers, product, and customers to build what actually matters",
    },
    {
      emoji: "🚀",
      title: "Ownership",
      description: "I take ideas from design → deployment → iteration",
    },
  ],
  narrative: [], // Removed narrative paragraph - kept field for future use
  whatIBring: {
    title: "You Should Hire Me Because...",
    items: [
      { point: "I turn vague ideas into deployed systems" },
      { point: "I keep engineering aligned with real user and business needs" },
      { point: "I care about reliability, not just demos" },
      { point: "I communicate clearly across technical and non-technical teams" },
    ],
  },
  howIWork: {
    title: "How I Think",
    items: [
      { point: "Start with who we're building for" },
      { point: "Translate business goals into technical design" },
      { point: "Design for scale and failure" },
      { point: "Ship fast, then harden" },
      { point: "Learn from real-world usage" },
    ],
  },
};

export default aboutData;
