export function BarsIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
      className={className}
    >
      <g clipPath="url(#a)">
        <path
          d="M3 4.75A.76.76 0 0 1 3.75 4h12.5a.76.76 0 0 1 .75.75.76.76 0 0 1-.75.75H3.75A.76.76 0 0 1 3 4.75ZM3 10a.76.76 0 0 1 .75-.75h12.5A.76.76 0 0 1 17 10a.76.76 0 0 1-.75.75H3.75A.76.76 0 0 1 3 10Zm14 5.25a.76.76 0 0 1-.75.75H3.75a.76.76 0 0 1-.75-.75.76.76 0 0 1 .75-.75h12.5a.76.76 0 0 1 .75.75Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
