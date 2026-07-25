export type LogoVariant = "icon" | "full" | "full-light" | "wordmark";

interface LogoProps {
  variant?: LogoVariant;
  className?: string;
  showTagline?: boolean;
}

/** Icône seule, bouclier + tête sprinkler */
export function LogoMark({
  className = "h-11 w-11",
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  const shieldFill = light ? "#FC5000" : "#FC5000";
  const shieldStroke = light ? "#e04500" : "#b83700";
  const accentFill = light ? "#050505" : "#E4E4E4";
  const sprayStroke = light ? "#050505" : "#E4E4E4";

  return (
    <svg
      viewBox="0 0 48 48"
      width="48"
      height="48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`block shrink-0 ${className}`}
      aria-hidden="true"
    >
      <path
        d="M24 2.5L40.5 8.2V21.8C40.5 30.6 24 44.5 24 44.5C24 44.5 7.5 30.6 7.5 21.8V8.2L24 2.5Z"
        fill={shieldFill}
        stroke={shieldStroke}
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <ellipse cx="24" cy="15.5" rx="9" ry="2.8" fill={accentFill} />
      <rect x="22.2" y="17" width="3.6" height="9" rx="0.8" fill={accentFill} opacity="0.92" />
      <g
        stroke={sprayStroke}
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity={light ? 0.95 : 0.88}
      >
        <line x1="24" y1="18.5" x2="24" y2="27" />
        <line x1="24" y1="19" x2="13" y2="25.5" />
        <line x1="24" y1="19" x2="35" y2="25.5" />
        <line x1="24" y1="19" x2="9.5" y2="23" />
        <line x1="24" y1="19" x2="38.5" y2="23" />
        <line x1="24" y1="19" x2="16.5" y2="29" />
        <line x1="24" y1="19" x2="31.5" y2="29" />
      </g>
      <circle cx="13" cy="27.5" r="1.1" fill={sprayStroke} opacity="0.55" />
      <circle cx="35" cy="27.5" r="1.1" fill={sprayStroke} opacity="0.55" />
      <circle cx="24" cy="30" r="1.1" fill={sprayStroke} opacity="0.7" />
    </svg>
  );
}

function Wordmark({
  light = false,
  showTagline = true,
}: {
  light?: boolean;
  showTagline?: boolean;
}) {
  const primary = light ? "text-white" : "text-white";
  const accent = "text-brand-500";
  const tagline = light ? "text-navy-400" : "text-navy-400";

  return (
    <div className="flex flex-col leading-none">
      <div className="flex items-baseline gap-[3px]">
        <span className={`font-sans text-[1.05rem] md:text-lg font-bold tracking-tight ${primary}`}>
          Paris
        </span>
        <span className={`font-sans text-[1.05rem] md:text-lg font-bold tracking-tight ${accent}`}>
          Incendie
        </span>
      </div>
      {showTagline && (
        <span
          className={`font-sans text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.18em] ${tagline} mt-1.5`}
        >
          Sprinkler · RIA · APSAD
        </span>
      )}
    </div>
  );
}

export default function Logo({
  variant = "icon",
  className,
  showTagline = true,
}: LogoProps) {
  if (variant === "icon") {
    return <LogoMark className={className ?? "h-11 w-11"} />;
  }

  if (variant === "wordmark") {
    return <Wordmark showTagline={showTagline} />;
  }

  const light = variant === "full-light" || variant === "full";

  return (
    <div className="flex items-center gap-2.5 sm:gap-3">
      <LogoMark
        className="h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11"
        light={light}
      />
      <div className="hidden sm:block">
        <Wordmark light={light} showTagline={showTagline} />
      </div>
    </div>
  );
}
