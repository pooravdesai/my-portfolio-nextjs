import dynamic from "next/dynamic";

const PageBox = dynamic(() => import("@/components/core/PageBox"));
const HomeSection1 = dynamic(() => import("@/components/home/Section1"));
const HomeAboutSection = dynamic(() => import("@/components/home/Section1b"));
// const HomeSection2 = dynamic(() => import("@/components/home/Section2"));
const HomeSection3 = dynamic(() => import("@/components/home/Section3"));
const HomeSection4 = dynamic(() => import("@/components/home/Section4"));
// const HomeSection5 = dynamic(() => import("@/components/home/Section5"));
const SectionProjectsResearch = dynamic(
  () => import("@/components/home/SectionProjectsResearch")
);
const SectionLeadership = dynamic(
  () => import("@/components/home/SectionLeadership")
);
const HomeSection6 = dynamic(() => import("@/components/home/Section6"));

const Home = () => {
  return (
    <PageBox>
      <HomeSection1 id="home" />
      <HomeAboutSection id="about" />
      {/* <HomeSection2 id="services" /> */}
      <HomeSection3 id="experiences" />
      <SectionProjectsResearch id="projects-research" />
      <HomeSection4 id="skills" />
      <SectionLeadership id="leadership" />
      {/* <HomeSection5 id="projects" /> */}
      <HomeSection6 id="contact" />
    </PageBox>
  );
};

export default Home;
