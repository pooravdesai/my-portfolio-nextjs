import ConstrainedBox from "@/components/core/constrained-box";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import GridBox from "@/components/core/GridBox";
import SectionTitle from "@/components/common/SectionTitle";
import skills from "@/data/skills";

const HomeSection4 = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      classNames="dark:bg-[var(--dialogColor)] bg-[var(--dialogColor)] min-h-screen items-center justify-center bg-gradient-professional"
      id={id}
    >
      <ConstrainedBox classNames="p-4 py-8 sm:py-12">
        <SectionTitle>Skills</SectionTitle>

        <GridBox classNames="justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {skills.map((category, index) => (
            <div
              key={`skill-category-${index}`}
              className="w-full p-6 rounded-lg border dark:bg-[var(--bgColor)] bg-white dark:border-[var(--whiteColor10)] border-gray-200"
            >
              {/* Category Title */}
              <h3 className="text-lg md:text-xl font-bold dark:text-[var(--textColor)] text-[var(--textColor)] mb-4 text-center">
                {category.title}
              </h3>

              {/* Technology Badges */}
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech, techIdx) => (
                  <span
                    key={`${category.title}-tech-${techIdx}`}
                    className="px-3 py-1.5 text-sm rounded-full dark:bg-[var(--primaryColor10)] dark:text-[var(--primaryColor)] bg-[var(--primaryColor)] text-white font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </GridBox>
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default HomeSection4;
