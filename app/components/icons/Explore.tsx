export const Explore = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="40" cy="40" r="38" stroke="currentColor" strokeWidth="2" />
      <path
        d="M24 56l14-32 18-6-6 18-26 20z"
        fill="currentColor"
        opacity="0.2"
      />
      <circle cx="44" cy="36" r="6" fill="currentColor" />
    </svg>
  );
};
