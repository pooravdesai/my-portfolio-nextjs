interface ISkillCategory {
  title: string;
  technologies: string[];
}

const skills: ISkillCategory[] = [
  {
    title: "Backend & Distributed Systems",
    technologies: [
      "Microservices",
      "Distributed Systems",
      "REST APIs",
      "Design Patterns",
      "Asynchronous Programming",
    ],
  },
  {
    title: "AI / ML",
    technologies: [
      "LLMs",
      "Retrieval-Augmented Generation (RAG)",
      "NLP",
      "Deep Learning",
      "Transformers",
      "CNNs",
    ],
  },
  {
    title: "Programming Languages",
    technologies: ["Java", "Python", "C++", "SQL", "JavaScript"],
  },
  {
    title: "Frameworks & Libraries",
    technologies: [
      "LangChain",
      "FastAPI",
      "Flask",
      "Dropwizard",
      "PyTorch",
      "TensorFlow",
      "HuggingFace",
      "Redis",
      "Celery",
      "NumPy",
      "Pandas",
    ],
  },
  {
    title: "Databases",
    technologies: [
      "MySQL",
      "MSSQL",
      "Oracle DB",
      "MongoDB",
      "Qdrant (Vector DB)",
    ],
  },
  {
    title: "Cloud / DevOps",
    technologies: [
      "AWS",
      "Azure",
      "GCP",
      "OCI",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Git",
      "Shell Scripting",
    ],
  },
  {
    title: "Frontend",
    technologies: ["React", "Next.js", "Tailwind CSS"],
  },
];

export default skills;
export type { ISkillCategory };
