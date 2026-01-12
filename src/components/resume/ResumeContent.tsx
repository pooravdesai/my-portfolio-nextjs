"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import Column from "@/components/core/Column";
import ConstrainedBox from "@/components/core/constrained-box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const ResumeContent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume/PooravDesai_SDE_resume.pdf";
    link.download = "PooravDesai_SDE_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Set zoom level: 75% for mobile, default for desktop
  const zoomLevel = isMobile ? "zoom=50" : "zoom=100";
  const pdfUrl = `/resume/PooravDesai_SDE_resume.pdf#toolbar=1&${zoomLevel}`;

  return (
    <div className="w-full min-h-screen bg-[var(--bgColor)] py-8 md:py-16">
      <ConstrainedBox classNames="px-4">
        <Column classNames="w-full items-center gap-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--textColor)] mb-4">
              Resume
            </h1>
            <p className="text-[var(--textColorLight)] text-lg mb-6">
              Download or view my professional resume
            </p>

            {/* Download Button */}
            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownload}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 bg-[var(--primaryColor)] text-white rounded-lg",
                  "font-semibold transition-all duration-300 hover:bg-[var(--secondaryColor)]",
                  "shadow-lg hover:shadow-xl"
                )}
              >
                <FontAwesomeIcon icon={faDownload} className="text-lg" />
                Download PDF
              </motion.button>
            </div>
          </motion.div>

          {/* PDF Viewer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full max-w-4xl rounded-lg overflow-hidden shadow-2xl bg-white"
          >
            <iframe
              src={pdfUrl}
              className="w-full h-[90vh] md:h-screen"
              title="Resume - PooravDesai_SDE_resume.pdf"
              onLoad={() => setIsLoading(false)}
              style={{ border: "none" }}
            />
          </motion.div>

          {/* Alternative Download Link */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center text-[var(--textColorLight)] mt-8"
          >
            Can't see the PDF?{" "}
            <button
              onClick={handleDownload}
              className="text-[var(--primaryColor)] hover:text-[var(--secondaryColor)] font-semibold underline transition-colors"
            >
              Click here to download
            </button>
          </motion.p>
        </Column>
      </ConstrainedBox>
    </div>
  );
};

export default ResumeContent;
