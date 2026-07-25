export default function Logo({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="44" height="44" rx="4" fill="#a61e1e" />
      <path
        d="M22 8C18 14 14 17 14 22C14 26.4 17.6 30 22 30C26.4 30 30 26.4 30 22C30 17 26 14 22 8Z"
        fill="white"
        fillOpacity="0.95"
      />
      <path
        d="M22 32V36M19 34H25"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <text
        x="22"
        y="41"
        textAnchor="middle"
        fill="white"
        fontSize="5"
        fontWeight="700"
        fontFamily="system-ui, sans-serif"
      >
        PI
      </text>
    </svg>
  );
}
