export function XMarkIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
      className={className}
    >
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
      <g clipPath="url(#a)">
        <path d="M4.25 5.281a.72.72 0 0 1 0-1.062.736.736 0 0 1 1.031 0L10 8.937l4.719-4.718c.312-.282.781-.282 1.062 0 .313.312.313.781 0 1.062L11.062 10l4.72 4.719a.719.719 0 0 1 0 1.062c-.282.281-.75.281-1.063 0L10 11.062l-4.719 4.72a.736.736 0 0 1-1.031 0 .72.72 0 0 1 0-1.063L8.969 10 4.25 5.281Z" />
      </g>
    </svg>
  );
}
