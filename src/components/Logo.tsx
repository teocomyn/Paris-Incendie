import Image from "next/image";

export type LogoVariant = "icon" | "full" | "full-light" | "wordmark";

interface LogoProps {
  variant?: LogoVariant;
  className?: string;
  /** Conservé pour compatibilité : le logo image inclut déjà le tagline. */
  showTagline?: boolean;
}

const LOGO_FULL = "/logo.png";
const LOGO_ICON = "/logo-icon.png";

const sizeClasses: Record<LogoVariant, string> = {
  icon: "h-9 w-9 sm:h-10 sm:w-10",
  wordmark: "h-11 w-auto sm:h-12",
  full: "h-12 w-auto sm:h-[3.25rem] md:h-14",
  "full-light": "h-12 w-auto sm:h-[3.25rem] md:h-14",
};

export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <Image
      src={LOGO_ICON}
      alt=""
      width={257}
      height={257}
      className={`logo-brand ${className} object-contain`}
      priority
      sizes="40px"
    />
  );
}

export default function Logo({
  variant = "icon",
  className,
}: LogoProps) {
  if (variant === "icon") {
    return <LogoMark className={className ?? sizeClasses.icon} />;
  }

  const src = variant === "wordmark" ? LOGO_FULL : LOGO_FULL;
  const defaultSize = sizeClasses[variant] ?? sizeClasses.full;

  return (
    <Image
      src={src}
      alt="Paris Incendie, Sprinkler Systems"
      width={764}
      height={430}
      className={`logo-brand object-contain ${className ?? defaultSize}`}
      priority
      sizes="(max-width: 640px) 140px, 200px"
    />
  );
}
