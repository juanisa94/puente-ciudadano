const iconClassName = "h-7 w-7";

export function ServiceIcon({ type }) {
  if (type === "grant") {
    return (
      <svg
        viewBox="0 0 24 24"
        className={iconClassName}
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 3v18M7 7h8.5a3.5 3.5 0 0 1 0 7H8"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M6 21h12"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "university") {
    return (
      <svg
        viewBox="0 0 24 24"
        className={iconClassName}
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M3 8.5 12 4l9 4.5-9 4.5-9-4.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M6 11v4.5c0 1.4 2.7 3 6 3s6-1.6 6-3V11"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className={iconClassName}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M8 8h8M8 12h8M8 16h5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
