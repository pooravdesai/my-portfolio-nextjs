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
import Strings from "@/constants/strings";

const HomeSection1 = ({ id }: Readonly<{ id: string }>) => {
  return (
    <ResponsiveBox
      classNames="dark:bg-[var(--bgColor)] bg-[var(--bgColor)] min-h-screen items-center justify-center relative overflow-hidden rounded-md"
      id={id}
    >
      <ConstrainedBox classNames="px-4 py-4 sm:py-8 z-20 items-center justify-center">
        <Column classNames="w-full items-center justify-center">
          <ProfilePicture />
          <div className="flex flex-wrap items-center justify-center">
            <p className="text-2xl/normal sm:text-3xl/normal md:text-5xl/normal lg:text-6xl/normal xl:text-7xl/normal dark:text-[var(--textColor)] text-[var(--textColor)] font-bold text-center">
              Hi there, I am
            </p>
            <FlipWords
              words={[Strings.fullName]}
              className="text-2xl/normal sm:text-3xl/normal md:text-5xl/normal lg:text-6xl/normal xl:text-7xl/normal dark:text-[var(--primaryColor)] text-[var(--primaryColor)] font-bold text-center"
            />
          </div>
          <p className="text-base/normal md:text-lg/normal lg:text-xl dark:text-[var(--textColorLight)] text-[var(--textColorLight)] text-center font-semibold">
            <span>Software Engineer | Cloud & AI Systems</span>
            <span className="block mt-2">Building scalable and reliable products with end-to-end ownership</span>
          </p>

          {/* <div className="gap-4 mt-12 lg:mt-16 flex flex-col md:flex-row">
            <TalkButton />
          </div> */}
        </Column>

        <div className="mt-8 lg:mt-8 w-full flex flex-col items-center">
          <p className="text-base/6 font-medium">Let's connect</p>

          <Row classNames="mt-2 gap-2">
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
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default HomeSection1;
