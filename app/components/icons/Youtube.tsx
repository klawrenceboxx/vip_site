export const Youtube = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="3" y="6" width="18" height="12" rx="4" fill="currentColor" />
      <path d="M11 10l4 2-4 2v-4z" fill="#0C0403" />
    </svg>
  );
};
