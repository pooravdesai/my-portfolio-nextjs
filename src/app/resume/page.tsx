import dynamic from "next/dynamic";

const PageBox = dynamic(() => import("@/components/core/PageBox"));
const ResumeContent = dynamic(() => import("@/components/resume/ResumeContent"));

const ResumePage = () => {
  return (
    <PageBox>
      <ResumeContent />
    </PageBox>
  );
};

export default ResumePage;
