export function BullhornIcon({ className }: { className?: string }) {
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
        <path d="M16.563 2.563A.75.75 0 0 1 17 3.25v13.5a.75.75 0 0 1-.438.688c-.25.125-.562.062-.78-.094l-1.75-1.469A8.414 8.414 0 0 0 9.5 14.031V16.5c0 .844-.656 1.5-1.5 1.5H6.5A1.5 1.5 0 0 1 5 16.5v-2.625c-1.719-.438-3-2-3-3.875 0-2.219 1.781-4 4-4h2.781c1.906 0 3.75-.656 5.25-1.875l1.75-1.438c.219-.187.531-.25.781-.124ZM9.5 12.5v.031c2 .156 3.906.906 5.469 2.188l.531.437V4.844l-.531.437A9.807 9.807 0 0 1 9.5 7.47v5.03ZM8 14H6.5v2.5H8V14ZM6 7.5A2.507 2.507 0 0 0 3.5 10c0 1.375 1.125 2.5 2.5 2.5h2v-5H6Z" />
      </g>
    </svg>
  );
}
