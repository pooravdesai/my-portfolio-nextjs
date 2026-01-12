"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import ConstrainedBox from "@/components/core/constrained-box";
import Column from "@/components/core/Column";
import SectionTitle from "@/components/common/SectionTitle";
import involvements from "@/data/involvements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

const SectionLeadership = ({ id }: Readonly<{ id: string }>) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? involvements.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === involvements.length - 1 ? 0 : prev + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentInvolvement = involvements[currentIndex];

  // Auto-advance carousel every 5 seconds when not hovered and autoPlay is enabled
  useEffect(() => {
    if (isHovered || !isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === involvements.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered, isAutoPlaying]);

  return (
    <ResponsiveBox
      classNames="bg-[var(--dialogColor)] dark:bg-[var(--dialogColor)] min-h-screen items-center justify-center relative overflow-hidden"
      id={id}
    >
      <ConstrainedBox classNames="px-4 py-8 sm:py-12">
        <Column classNames="w-full items-center justify-center">
          {/* Section Title */}
          <SectionTitle>Leadership & Involvement</SectionTitle>

          {/* Carousel Container with Side Buttons */}
          <div
            className="w-full max-w-4xl mx-auto mt-12 flex items-center gap-4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Left Arrow */}
            <button
              onClick={handlePrevious}
              className="p-3 rounded-full dark:bg-[var(--bgColor10)] bg-white hover:dark:bg-[var(--bgColor20)] hover:bg-gray-100 transition-colors duration-300 flex-shrink-0"
              aria-label="Previous involvement"
            >
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="text-lg dark:text-[var(--textColor)] text-[var(--textColor)]"
              />
            </button>

            {/* Card */}
            <div className="flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentInvolvement.id}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="dark:bg-[var(--bgColor10)] bg-white rounded-lg overflow-hidden shadow-lg border dark:border-[var(--whiteColor10)] border-gray-200 relative"
                >
                  {/* Title */}
                  <div className="px-6 md:px-8 pt-6 md:pt-8">
                    <h3 className="text-xl md:text-2xl font-bold dark:text-[var(--textColor)] text-[var(--textColor)]">
                      {currentInvolvement.title}
                    </h3>
                  </div>

                  {/* Image */}
                  <div className="relative w-full h-64 md:h-80 mt-4 md:mt-6 overflow-hidden bg-gray-200 dark:bg-[var(--bgColor20)]">
                    <Image
                      src={currentInvolvement.imagePath}
                      alt={currentInvolvement.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  {/* Description */}
                  <div className="px-6 md:px-8 py-6 md:py-8">
                    <p className="text-base md:text-lg dark:text-[var(--textColorLight)] text-[var(--textColorLight)] leading-relaxed">
                      {currentInvolvement.description}
                    </p>
                  </div>

                  {/* Card Counter at Bottom Right */}
                  <div className="absolute bottom-4 right-4 bg-black/40 dark:bg-black/60 px-3 py-1 rounded-full">
                    <p className="text-xs text-white font-semibold">
                      {currentIndex + 1} / {involvements.length}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="p-3 rounded-full dark:bg-[var(--bgColor10)] bg-white hover:dark:bg-[var(--bgColor20)] hover:bg-gray-100 transition-colors duration-300 flex-shrink-0"
              aria-label="Next involvement"
            >
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-lg dark:text-[var(--textColor)] text-[var(--textColor)]"
              />
            </button>
          </div>

          {/* Dots Pagination with Pause Button */}
          <div className="flex gap-2 justify-center items-center mt-6">
            {/* Play/Pause Button */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="p-2 rounded-full dark:bg-[var(--bgColor10)] bg-white hover:dark:bg-[var(--bgColor20)] hover:bg-gray-100 transition-colors duration-300"
              aria-label={isAutoPlaying ? "Pause carousel" : "Play carousel"}
            >
              <FontAwesomeIcon
                icon={isAutoPlaying ? faPause : faPlay}
                className="text-sm dark:text-[var(--textColor)] text-[var(--textColor)]"
              />
            </button>

            {/* Dots */}
            {involvements.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 dark:bg-[var(--primaryColor)] bg-[var(--primaryColor)]"
                    : "w-2 dark:bg-[var(--bgColor10)] bg-gray-300"
                }`}
                aria-label={`Go to involvement ${index + 1}`}
              />
            ))}
          </div>
        </Column>
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default SectionLeadership;
