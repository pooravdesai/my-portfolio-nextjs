import Link from "next/link";

const AvailableForHireBadge = () => {
  return (
    <Link
      href="/#contact"
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-[var(--primaryColor)] bg-[var(--primaryColor)]/10 dark:bg-[var(--primaryColor)]/5 backdrop-blur-sm transition-all duration-300 hover:bg-[var(--primaryColor)]/20 hover:scale-105"
    >
      {/* Pulsing Green Dot */}
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primaryColor)] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--primaryColor)]"></span>
      </span>

      {/* Text */}
      <span className="text-sm md:text-base font-semibold text-[var(--primaryColor)]">
        Available for Hire
      </span>
    </Link>
  );
};

export default AvailableForHireBadge;
