export function FacebookIcon({ className }: { className?: string }) {
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
        <path d="M5 3h10c1.094 0 2 .906 2 2v10c0 1.094-.906 2-2 2h-4.031v-4.563h2.156L13.594 10h-2.625v-.875c0-1.281.5-1.781 1.812-1.781.406 0 .75 0 .938.031V5.156c-.375-.093-1.25-.187-1.75-.187-2.656 0-3.906 1.25-3.906 3.968V10H6.405v2.438h1.657V17H5c-1.094 0-2-.906-2-2V5c0-1.094.906-2 2-2Z" />
      </g>
    </svg>
  );
}
