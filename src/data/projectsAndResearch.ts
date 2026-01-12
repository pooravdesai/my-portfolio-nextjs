export interface ProjectLink {
  label: string;
  url: string;
  type: "paper" | "code" | "demo" | "dataset";
}

export interface ProjectAndResearch {
  id: string;
  title: string;
  type: "research" | "production";
  tagline: string;
  timeline: string;
  description: string;
  technologies: string[];
  highlights: string[];
  links: ProjectLink[];
  conference?: string;
}

const projectsAndResearch: ProjectAndResearch[] = [
  {
    id: "sarcasm-explanation",
    title: "Multimodal Sarcasm Explanation",
    type: "research",
    tagline: "Published at AAAI, explaining sarcasm in multimodal social media posts",
    timeline: "Aug 2020 – Sep 2021",
    conference: "LCS2-IIITD",
    description:
      "Published at AAAI, proposing a novel NLP task to generate natural-language explanations that reveal the intended sarcasm in multimodal social media posts (image + text).",
    technologies: [
      "Python",
      "PyTorch",
      "BART",
      "VGG-19",
      "Transformers",
      "HuggingFace",
    ],
    highlights: [
      "Proposing a novel NLP task to generate natural-language explanations that reveal the intended sarcasm in multimodal social media posts (image + text)",
      "Designed and fine-tuned a multimodal Transformer-based architecture combining visual and textual representations, leveraging VGG-19 for image features and BART for text encoding and generation",
      "Implemented training and evaluation pipelines using PyTorch and HuggingFace, with data processing via NumPy and Pandas",
    ],
    links: [
      {
        label: "Paper",
        url: "https://ojs.aaai.org/index.php/AAAI/article/view/21300",
        type: "paper",
      },
      {
        label: "Code",
        url: "https://github.com/LCS2-IIITD/Multimodal-Sarcasm-Explanation-MuSE",
        type: "code",
      },
    ],
  },
  {
    id: "docuchat",
    title: "DocuChat",
    type: "production",
    tagline: "Production-Grade RAG-Based Document Chat System",
    timeline: "Nov 2025 – Jan 2025",
    description:
      "Scalable RAG pipeline enabling low-latency conversational AI over private documents with modular, fault-tolerant architecture.",
    technologies: [
      "FastAPI",
      "LangChain",
      "Next.js",
      "Celery",
      "Redis",
      "MongoDB",
      "Qdrant",
      "LLMs",
    ],
    highlights: [
      "Developed a scalable RAG pipeline using FastAPI and LangChain, enabling low-latency conversational AI over private documents",
      "Engineered a modular backend supporting plug-and-play LLM backends (Ollama, OpenAI, Gemini) and vector database (Qdrant), leveraging Design Patterns to ensure system extensibility",
      "Architected a fault-tolerant ingestion engine with retry logic and distributed task queues (Celery, Redis) to handle high-throughput document ingestion and vector embedding tasks",
      "Built a modern, responsive frontend with Next.js",
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/pooravdesai/DocuChat",
        type: "code",
      },
    ],
  },
];

export default projectsAndResearch;
