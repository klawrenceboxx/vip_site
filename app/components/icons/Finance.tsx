export const Finance = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="6"
        y="10"
        width="36"
        height="28"
        rx="6"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M12 30h24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="18" cy="20" r="4" fill="currentColor" />
    </svg>
  );
};
