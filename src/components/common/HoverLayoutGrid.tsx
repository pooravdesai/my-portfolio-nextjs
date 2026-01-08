"use client";

import { useState } from "react";
import { cn } from "@/utils/cn";
import { AnimatedServiceCard } from "../home/ui/AnimatedServiceCard";

export const HoverLayoutGrid = ({
  cards,
  className,
}: {
  cards: any[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "w-full grid grid-cols-1 md:grid-cols-2 mt-16 gap-4",
        className
      )}
    >
      {cards.map((item, idx) => (
        <div
          key={item?.id}
          className={cn(
            "relative group block p-2 h-full w-full rounded-[var(--borderRadius)] transition-all duration-300",
            hoveredIndex === idx ? "border-2 border-[var(--primaryColor)]" : "border-2 border-transparent"
          )}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatedServiceCard item={item} />
        </div>
      ))}
    </div>
  );
};
