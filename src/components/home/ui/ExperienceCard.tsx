import type { IExperienceItem } from "@/types";
import BulletedText from "@/components/common/bulleted-text";

const ExperienceCard = ({
  data,
  dateRange,
}: {
  data: IExperienceItem;
  dateRange: string;
}) => {
  return (
    <div className="p-4 rounded-lg border dark:border-[var(--whiteColor10)] border-gray-200 dark:bg-[var(--bgColor10)] bg-white">
      {/* Role */}
      <p className="text-lg font-bold dark:text-[var(--textColor)] text-[var(--textColor)]">
        {data.designation}
      </p>

      {/* Company */}
      <p className="text-base font-semibold dark:text-[var(--primaryColor)] text-[var(--primaryColor)] mb-2">
        @{data.company}
      </p>

      {/* Date Range */}
      <p className="text-sm font-medium dark:text-[var(--textColorLight)] text-[var(--textColorLight)] mb-3">
        {dateRange}
      </p>

      {/* Bullets */}
      <div className="flex flex-col gap-2">
        {data.description.map((desc, i) => {
          return (
            <BulletedText key={`exp-desc-${i}`}>
              <p className="text-sm/6 font-normal dark:text-[var(--textColorLight)] text-[var(--textColorLight)]">
                {desc}
              </p>
            </BulletedText>
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceCard;
