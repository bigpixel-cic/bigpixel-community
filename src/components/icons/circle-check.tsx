export function CircleCheckIcon({ className }: { className?: string }) {
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
        <path d="M10 3.5A6.495 6.495 0 0 0 3.5 10c0 3.594 2.906 6.5 6.5 6.5s6.5-2.906 6.5-6.5-2.906-6.5-6.5-6.5ZM10 18c-4.406 0-8-3.594-8-8 0-4.406 3.594-8 8-8 4.406 0 8 3.594 8 8 0 4.406-3.594 8-8 8Zm2.625-9.344-2.5 4c-.125.188-.344.344-.594.344a.73.73 0 0 1-.625-.313l-1.5-2a.72.72 0 0 1 .157-1.03.72.72 0 0 1 1.03.155l.845 1.126 1.937-3.094a.75.75 0 0 1 1.031-.219.75.75 0 0 1 .219 1.031Z" />
      </g>
    </svg>
  );
}
