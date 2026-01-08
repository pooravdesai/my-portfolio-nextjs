"use client";

import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { INavItem } from "@/types";
import Row from "@/components/core/Row";
import { useTheme } from "@/context/ThemeContext";
import { useState, useEffect, Suspense } from "react";

const FloatingNavbarContent = ({
  navItems,
  className,
}: {
  navItems: INavItem[];
  className?: string;
}) => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Return placeholder during SSR/initial hydration
  if (!mounted) {
    return (
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex w-fit fixed top-4 inset-x-0 mx-auto border border-white/[0.25] rounded-full bg-[var(--dialogColor50)] backdrop-blur-sm shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-4 py-3 items-center space-x-4",
          className
        )}
      >
        <Row classNames="w-full justify-center items-center gap-2">
          {navItems.map((navItem: INavItem, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative flex items-center space-x-1 text-[var(--primaryColor)] px-3 py-2 rounded-lg transition-all duration-300",
                "border border-transparent hover:border-[var(--primaryColor)] hover:bg-[var(--primaryColor)]/10"
              )}
            >
              <span className="hidden sm:block text-sm/6 lg:text-base">
                {navItem.name}
              </span>
              <span className="block sm:hidden">
                <FontAwesomeIcon icon={navItem.icon} />
              </span>
            </Link>
          ))}
        </Row>
      </motion.div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex w-fit fixed top-4 inset-x-0 mx-auto border border-white/[0.25] rounded-full bg-[var(--dialogColor50)] backdrop-blur-sm shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-4 py-3 items-center space-x-4",
          className
        )}
      >
        <Row classNames="w-full justify-center items-center gap-2">
          {navItems.map((navItem: INavItem, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative flex items-center space-x-1 text-[var(--primaryColor)] px-3 py-2 rounded-lg transition-all duration-300",
                "border border-transparent hover:border-[var(--primaryColor)] hover:bg-[var(--primaryColor)]/10"
              )}
            >
              <span className="block sm:hidden">
                <FontAwesomeIcon
                  id={`nav-item-icon${idx}`}
                  icon={navItem.icon}
                  title={navItem.name}
                />
              </span>

              <span className="hidden sm:block text-sm/6 lg:text-base">
                {navItem.name}
              </span>
            </Link>
          ))}
          
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={cn(
              "relative flex items-center justify-center px-3 py-2 rounded-lg transition-all duration-300",
              "text-[var(--primaryColor)] border border-transparent hover:border-[var(--primaryColor)] hover:bg-[var(--primaryColor)]/10",
              "ml-2 pl-3 border-l"
            )}
            aria-label="Toggle theme"
            title={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
          >
            <motion.div
              key={theme}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <FontAwesomeIcon
                icon={theme === "light" ? faMoon : faSun}
                className="text-lg"
              />
            </motion.div>
          </button>
        </Row>
      </motion.div>
    </AnimatePresence>
  );
};

const FloatingNavbar = ({
  navItems,
  className,
}: {
  navItems: INavItem[];
  className?: string;
}) => {
  return (
    <Suspense fallback={null}>
      <FloatingNavbarContent navItems={navItems} className={className} />
    </Suspense>
  );
};

export default FloatingNavbar;
