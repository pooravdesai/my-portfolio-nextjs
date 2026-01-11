import dynamic from "next/dynamic";
import PageBox from "@/components/core/PageBox";

const HomeAboutSection = dynamic(
  () => import("@/components/home/Section1b"),
  { ssr: true }
);

export const metadata = {
  title: "About Me - Portfolio",
  description:
    "Learn more about me - my engineering approach, philosophy, and what I bring to the table.",
};

export default function AboutPage() {
  return (
    <PageBox>
      <HomeAboutSection id="about" />
    </PageBox>
  );
}
