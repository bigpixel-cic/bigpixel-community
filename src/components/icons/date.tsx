export function DateIcon({ className }: { className?: string }) {
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
        <path d="M6.75 2a.76.76 0 0 1 .75.75V4h5V2.75a.76.76 0 0 1 .75-.75.76.76 0 0 1 .75.75V4h1c1.094 0 2 .906 2 2v9c0 1.094-.906 2-2 2H5c-1.094 0-2-.906-2-2V6c0-1.094.906-2 2-2h1V2.75A.76.76 0 0 1 6.75 2Zm0 3.5H5c-.281 0-.5.219-.5.5v1.5h11V6c0-.281-.219-.5-.5-.5H6.75ZM4.5 9v6c0 .281.219.5.5.5h10c.281 0 .5-.219.5-.5V9h-11Z" />
      </g>
    </svg>
  );
}
