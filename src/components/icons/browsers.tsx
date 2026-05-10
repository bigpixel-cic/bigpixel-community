export function BrowsersIcon({ className }: { className?: string }) {
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
        <path d="M6.5 3H17c1.094 0 2 .906 2 2v7c0 1.094-.906 2-2 2H6c-1.094 0-2-.906-2-2V5c0-1.094.906-2 2-2h.5Zm11 5h-12v4c0 .281.219.5.5.5h11c.281 0 .5-.219.5-.5V8ZM1.75 6a.76.76 0 0 1 .75.75V15c0 .281.219.5.5.5h12.25a.76.76 0 0 1 .75.75.76.76 0 0 1-.75.75H3c-1.094 0-2-.906-2-2V6.75A.76.76 0 0 1 1.75 6ZM8 5.5c0-.563-.438-1-1-1-.563 0-1 .438-1 1 0 .563.438 1 1 1 .563 0 1-.438 1-1Zm1.75-.75A.76.76 0 0 0 9 5.5c0 .406.344.75.75.75h6.5A.76.76 0 0 0 17 5.5a.76.76 0 0 0-.75-.75h-6.5Z" />
      </g>
    </svg>
  );
}
