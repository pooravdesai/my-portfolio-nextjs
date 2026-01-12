import ResponsiveBox from "@/components/core/ResponsiveBox";
import ConstrainedBox from "@/components/core/constrained-box";
import Column from "@/components/core/Column";
import SectionTitle from "@/components/common/SectionTitle";
import projectsAndResearch from "@/data/projectsAndResearch";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faDatabase,
  faArrowUpRightFromSquare,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectsResearchSection = ({ id }: Readonly<{ id: string }>) => {
  const getLinkIcon = (type: string) => {
    switch (type) {
      case "paper":
        return faFileAlt;
      case "code":
        return faGithub;
      case "dataset":
        return faDatabase;
      case "demo":
        return faArrowUpRightFromSquare;
      default:
        return faArrowUpRightFromSquare;
    }
  };

  return (
    <ResponsiveBox
      classNames="dark:bg-[var(--bgColor10)] bg-gray-50 min-h-screen items-center justify-center relative overflow-hidden"
      id={id}
    >
      <ConstrainedBox classNames="px-4 py-8 sm:py-12">
        <Column classNames="w-full items-center justify-center">
          {/* Section Title */}
          <SectionTitle>Research & Projects</SectionTitle>

          {/* Projects Grid */}
          <div className="w-full max-w-4xl mx-auto mt-12 space-y-8">
            {projectsAndResearch.map((project, index) => (
              <div
                key={project.id}
                className="p-6 md:p-8 rounded-lg border dark:bg-[var(--bgColor)] bg-white dark:border-[var(--whiteColor10)] border-gray-200"
              >
                {/* Header: Title + Timeline */}
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 md:gap-4 mb-3">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-2xl md:text-3xl font-bold dark:text-[var(--textColor)] text-[var(--textColor)]">
                      {project.title}
                    </h3>
                    <span
                      className={cn(
                        "px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap",
                        project.type === "research"
                          ? "bg-[var(--primaryColor)] text-white"
                          : "bg-[var(--secondaryColor)] text-white"
                      )}
                    >
                      {project.type === "research"
                        ? `🔬 Research${project.conference ? ` @ ${project.conference}` : ""}`
                        : "🚀 Production"}
                    </span>
                  </div>
                  <p className="text-sm md:text-base dark:text-[var(--textColorLight)] text-[var(--textColorLight)] font-medium">
                    {project.timeline}
                  </p>
                </div>

                {/* Tagline */}
                <p className="text-base md:text-lg dark:text-[var(--textColorLight)] text-[var(--textColorLight)] font-semibold mb-4">
                  {project.tagline}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={`${project.id}-tech-${idx}`}
                      className="px-3 py-1 text-sm rounded-full dark:bg-[var(--primaryColor10)] dark:text-[var(--primaryColor)] bg-[var(--primaryColor)] text-white font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <ul className="space-y-3 mb-6">
                  {project.highlights.map((highlight, idx) => (
                    <li
                      key={`${project.id}-highlight-${idx}`}
                      className="flex gap-3 dark:text-[var(--textColorLight)] text-[var(--textColorLight)]"
                    >
                      <span className="dark:text-[var(--primaryColor)] text-[var(--primaryColor)] font-bold flex-shrink-0 mt-1">
                        ▪
                      </span>
                      <span className="text-sm md:text-base leading-relaxed">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Links */}
                {project.links.length > 0 && (
                  <div className="flex flex-wrap gap-3">
                    {project.links.map((link, idx) => (
                      <Link
                        key={`${project.id}-link-${idx}`}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg dark:bg-[var(--primaryColor)] dark:hover:bg-[var(--primaryColor)]/90 bg-[var(--primaryColor)] hover:bg-[var(--primaryColor)]/90 text-white font-medium transition-all duration-300"
                      >
                        <FontAwesomeIcon icon={getLinkIcon(link.type)} />
                        <span>{link.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Column>
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

// Helper function for conditional classes
const cn = (...classes: (string | undefined | false)[]) => {
  return classes.filter(Boolean).join(" ");
};

export default ProjectsResearchSection;
