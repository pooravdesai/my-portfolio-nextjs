import Image from "next/image";
import { cn } from "@/utils/cn";

const ProfilePicture = ({
  className,
}: Readonly<{
  className?: string;
}>) => {
  return (
    <div className={cn("relative w-48 h-48 sm:w-52 sm:h-52 md:w-48 md:h-48 lg:w-56 lg:h-56", className)}>
      {/* Glow effect layer */}
      <div
        className={cn(
          "absolute inset-0 rounded-full blur-md opacity-60",
          "bg-gradient-to-br from-[var(--primaryColor)] to-[var(--secondaryColor)]",
          "animate-pulse"
        )}
      />

      {/* Border ring */}
      <div
        className={cn(
          "absolute inset-0 rounded-full border-2",
          "border-[var(--primaryColor)]/50"
        )}
      />

      {/* Image container */}
      <div className="absolute inset-1 rounded-full overflow-hidden bg-[var(--dialogColor)] shadow-lg">
        <Image
          src="/images/profile.jpg"
          alt="Profile Picture"
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 192px, 224px"
        />
      </div>

      {/* Optional shine effect */}
      <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
    </div>
  );
};

export default ProfilePicture;
