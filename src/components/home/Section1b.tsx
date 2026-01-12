import ResponsiveBox from "@/components/core/ResponsiveBox";
import ConstrainedBox from "@/components/core/constrained-box";
import Column from "@/components/core/Column";
import Row from "@/components/core/Row";
import GridBox from "@/components/core/GridBox";
import SectionTitle from "@/components/common/SectionTitle";
import aboutData from "@/data/about";

const HomeAboutSection = ({ id }: Readonly<{ id: string }>) => {
  return (
    <ResponsiveBox
      classNames="bg-[var(--dialogColor)] dark:bg-[var(--dialogColor)] min-h-screen items-center justify-center relative overflow-hidden"
      id={id}
    >
      <ConstrainedBox classNames="px-4 py-8 sm:py-12">
        <Column classNames="w-full items-center justify-center">
          {/* Headline */}
          <SectionTitle>{aboutData.headline}</SectionTitle>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto mt-6 text-[var(--textColor)] font-semibold">
            {aboutData.subheadline}
          </p>

          {/* Three Pillars */}
          <GridBox classNames="grid-cols-1 md:grid-cols-3 w-full gap-6 md:gap-8 mt-12">
            {aboutData.pillars.map((pillar, index) => (
              <div
                key={`pillar-${index}`}
                className="flex flex-col items-center text-center p-6 rounded-lg border dark:border-[var(--whiteColor10)] dark:bg-[var(--bgColor10)] border-[var(--textColor20)] bg-white"
              >
                <span className="text-4xl mb-4">{pillar.emoji}</span>
                <h3 className="text-lg font-bold text-[var(--textColor)] mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[var(--textColorLight)] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </GridBox>

          {/* Philosophy Boxes */}
          <div className="mt-12 md:mt-16 w-full grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* What I Bring */}
            <div className="p-6 rounded-lg border dark:border-[var(--whiteColor10)] dark:bg-[var(--bgColor10)] border-[var(--textColor20)] bg-white">
              <h4 className="text-lg font-bold text-[var(--textColor)] mb-4 text-center">
                {aboutData.whatIBring.title}
              </h4>
              <ul className="space-y-3">
                {aboutData.whatIBring.items.map((item, index) => (
                  <li
                    key={`bring-${index}`}
                    className="flex gap-3 text-sm md:text-base text-[var(--textColorLight)]"
                  >
                    <span className="text-[var(--primaryColor)] font-bold flex-shrink-0">
                      ▪
                    </span>
                    <span>{item.point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* How I Work */}
            <div className="p-6 rounded-lg border dark:border-[var(--whiteColor10)] dark:bg-[var(--bgColor10)] border-[var(--textColor20)] bg-white">
              <h4 className="text-lg font-bold text-[var(--textColor)] mb-4 text-center">
                {aboutData.howIWork.title}
              </h4>
              <ul className="space-y-3">
                {aboutData.howIWork.items.map((item, index) => (
                  <li
                    key={`work-${index}`}
                    className="flex gap-3 text-sm md:text-base text-[var(--textColorLight)]"
                  >
                    <span className="text-[var(--primaryColor)] font-bold flex-shrink-0">
                      ▪
                    </span>
                    <span>{item.point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Column>
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default HomeAboutSection;
