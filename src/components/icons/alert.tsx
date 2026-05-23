export function AlertIcon({ className }: { className?: string }) {
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
        <path d="M3.656 15.5h12.688L10 3.781 3.656 15.5Zm7.438-12.844 6.75 12.5c.218.375.218.844-.032 1.25A1.219 1.219 0 0 1 16.75 17H3.25a1.22 1.22 0 0 1-1.063-.594 1.201 1.201 0 0 1-.03-1.25l6.75-12.5A1.226 1.226 0 0 1 10 2c.469 0 .875.25 1.094.656ZM10 7.25a.76.76 0 0 1 .75.75v3.5a.76.76 0 0 1-.75.75.76.76 0 0 1-.75-.75V8a.76.76 0 0 1 .75-.75Zm.844 6.75a.88.88 0 0 1-.406.75.75.75 0 0 1-.876 0 .88.88 0 0 1-.406-.75.88.88 0 0 1 .406-.75.75.75 0 0 1 .876 0 .88.88 0 0 1 .406.75Z" />
      </g>
    </svg>
  );
}
