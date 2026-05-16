export function MobileIcon({ className }: { className?: string }) {
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
        <path d="M6.5 3.5c-.281 0-.5.219-.5.5v12c0 .281.219.5.5.5h7c.281 0 .5-.219.5-.5V4c0-.281-.219-.5-.5-.5h-7Zm-2 .5c0-1.094.906-2 2-2h7c1.094 0 2 .906 2 2v12c0 1.094-.906 2-2 2h-7c-1.094 0-2-.906-2-2V4Zm4.25 9.5h2.5a.76.76 0 0 1 .75.75.76.76 0 0 1-.75.75h-2.5a.76.76 0 0 1-.75-.75.76.76 0 0 1 .75-.75Z" />
      </g>
    </svg>
  );
}
