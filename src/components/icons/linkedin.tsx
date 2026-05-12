export function LinkedInIcon({ className }: { className?: string }) {
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
        <path d="M5 3h10c1.094 0 2 .906 2 2v10c0 1.094-.906 2-2 2H5c-1.094 0-2-.906-2-2V5c0-1.094.906-2 2-2Zm.156 5.313V15H7.25V8.312H5.156Zm2.25-2.094A1.22 1.22 0 0 0 6.188 5C5.53 5 5 5.531 5 6.219c0 .656.531 1.187 1.188 1.187.656 0 1.218-.531 1.218-1.187ZM12.938 15H15v-3.656c0-1.813-.375-3.188-2.469-3.188-1.031 0-1.687.563-1.969 1.063h-.03v-.906h-2V15h2.093v-3.313c0-.874.156-1.718 1.219-1.718 1.062 0 1.094 1 1.094 1.781V15Z" />
      </g>
    </svg>
  );
}
