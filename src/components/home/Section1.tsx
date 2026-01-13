import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Column from "@/components/core/Column";
import ConstrainedBox from "@/components/core/constrained-box";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import Row from "@/components/core/Row";
import { FlipWords } from "@/components/common/FlipWords";
import socialLinks from "@/data/socialLinks";
import TalkButton from "./ui/TalkButton";
import ProfilePicture from "./ui/ProfilePicture";
import AvailableForHireBadge from "./ui/AvailableForHireBadge";
import Strings from "@/constants/strings";

const HomeSection1 = ({ id }: Readonly<{ id: string }>) => {
  return (
    <ResponsiveBox
      classNames="dark:bg-[var(--bgColor)] bg-[var(--bgColor)] min-h-screen items-center justify-center relative overflow-hidden rounded-md"
      id={id}
    >
      <ConstrainedBox classNames="px-4 py-12 md:py-10 z-20 items-center justify-start">
        <Column classNames="w-full items-center justify-start gap-6 md:gap-5">
          <ProfilePicture />
          
          <div className="flex flex-wrap items-center justify-center">
            <p className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-5xl dark:text-[var(--textColor)] text-[var(--textColor)] font-bold text-center">
              Hi there, I am
            </p>
            <FlipWords
              words={[Strings.fullName]}
              className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-5xl dark:text-[var(--primaryColor)] text-[var(--primaryColor)] font-bold text-center"
            />
          </div>
          
          <p className="text-base/normal md:text-lg/normal lg:text-xl dark:text-[var(--textColorLight)] text-[var(--textColorLight)] text-center font-semibold">
            <span>Software Engineer | Cloud & AI Systems</span>
            <span className="block mt-2">Building scalable and reliable products with end-to-end ownership</span>
          </p>

          {/* Available for Hire Badge - Mobile Only */}
          <div className="block md:hidden">
            <AvailableForHireBadge />
          </div>

          {/* <div className="gap-4 mt-12 lg:mt-16 flex flex-col md:flex-row">
            <TalkButton />
          </div> */}

          <div className="flex flex-col items-center gap-3 mt-4 md:mt-6">
            <p className="text-sm md:text-base dark:text-[var(--textColor)] text-[var(--textColor)] font-medium">
              Let&apos;s connect
            </p>
            <Row classNames="gap-2">
              {socialLinks
                .filter((link) => link.name && ["LinkedIn", "GitHub", "Email"].includes(link.name))
                .sort((a, b) => {
                  const order = ["LinkedIn", "GitHub", "Email"];
                  return order.indexOf(a.name || "") - order.indexOf(b.name || "");
                })
                .map((link, index) => {
                return (
                  <Link
                    key={`social-link-${index}`}
                    href={link.url}
                    target="_blank"
                    className="app__outlined_btn !rounded-full !p-2 lg:!p-3 !aspect-square dark:!border-[var(--textColor)] !border-[var(--textColor)]"
                    aria-label={`${link.name}`}
                  >
                    <span className="text-base/6 dark:text-[var(--whiteColor)] text-[var(--textColor)]">
                      {typeof link.icon === "string" ? null : (
                        <FontAwesomeIcon icon={link.icon} />
                      )}
                    </span>
                  </Link>
                );
              })}
            </Row>
          </div>
        </Column>
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default HomeSection1;
