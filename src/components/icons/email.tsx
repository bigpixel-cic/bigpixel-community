export function EmailIcon({ className }: { className?: string }) {
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
        <path d="m10.094 11 2.125 5.25 4.125-11.531L10.094 11Zm5.187-7.344L3.75 7.781l5.281 2.157 6.25-6.282ZM2.187 8.781a1.086 1.086 0 0 1-.687-1c0-.468.313-.875.719-1.031L17.75 1.187a.817.817 0 0 1 .875.188c.25.219.313.563.219.875L13.28 17.781a1.086 1.086 0 0 1-2.031.031l-2.625-6.437-6.438-2.594Z" />
      </g>
    </svg>
  );
}
