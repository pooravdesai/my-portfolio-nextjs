"use client";

import ConstrainedBox from "@/components/core/constrained-box";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import SectionTitle from "@/components/common/SectionTitle";
import { Timeline } from "@/components/common/timeline";
import ExperienceItem from "./ui/ExperienceItem";
import ExperienceCard from "./ui/ExperienceCard";
import experiences from "@/data/experiences";
import { useState, useEffect } from "react";

const HomeSection3 = ({ id }: { id: string }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <ResponsiveBox
      classNames="dark:bg-[var(--bgColor)] bg-[var(--bgColor)] min-h-screen items-center justify-center bg-gradient-professional"
      id={id}
    >
      <ConstrainedBox classNames="p-4 py-8 sm:py-12">
        <SectionTitle>Work Experience</SectionTitle>

        {/* Mobile: Card List Layout */}
        {isMobile ? (
          <div className="w-full space-y-3 mt-6">
            {experiences.map((exp, i) => (
              <ExperienceCard
                key={`experience-card-${i}`}
                data={exp}
                dateRange={exp.startDate + " - " + (exp.endDate || "Present")}
              />
            ))}
          </div>
        ) : (
          /* Desktop: Timeline Layout */
          <Timeline
            data={experiences.map((exp, i) => ({
              title: exp.startDate + " - " + (exp.endDate || "Present"),
              content: (
                <ExperienceItem
                  key={`experience-${i}`}
                  data={exp}
                  dateRange={exp.startDate + " - " + (exp.endDate || "Present")}
                />
              ),
            }))}
          />
        )}
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default HomeSection3;
