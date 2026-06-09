import type { IconName } from "@/lib/site";

type Props = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function Icon({ name, className = "h-6 w-6" }: { name: IconName; className?: string }) {
  const map: Record<IconName, React.ReactNode> = {
    tooth: (
      <path d="M7.5 3.5C5.5 3.5 4 5 4 7.3c0 2 .7 3 1 5 .3 1.8.2 6.2 2 6.2 1.6 0 1.4-3.5 2.6-4.5.7-.6 2-.6 2.7 0 1.2 1 1 4.5 2.6 4.5 1.8 0 1.7-4.4 2-6.2.3-2 1-3 1-5C20 5 18.5 3.5 16.5 3.5c-1.6 0-2.7 1-4.5 1s-2.9-1-4.5-1Z" />
    ),
    sparkle: (
      <>
        <path d="M12 3v18M3 12h18" opacity={0} />
        <path d="M12 4l1.8 4.6L18.5 10l-4.7 1.4L12 16l-1.8-4.6L5.5 10l4.7-1.4L12 4Z" />
        <path d="M18.5 15.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8Z" />
      </>
    ),
    implant: (
      <>
        <path d="M12 3c-2 0-3.5 1.4-3.5 3.2 0 1 .4 1.6.7 2.3.4.8.3 1.5.3 2.5" />
        <path d="M12 3c2 0 3.5 1.4 3.5 3.2 0 1-.4 1.6-.7 2.3-.4.8-.3 1.5-.3 2.5" />
        <path d="M9 12h6M10 15h4M10.5 18h3M11 21h2" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3l7 2.5v5c0 4.5-3 8-7 9.5-4-1.5-7-5-7-9.5v-5L12 3Z" />
        <path d="M9 11.5l2 2 4-4.2" />
      </>
    ),
    child: (
      <>
        <circle cx="12" cy="7" r="3" />
        <path d="M6 21v-1.5a6 6 0 0 1 12 0V21" />
        <path d="M9.5 7h5" opacity={0} />
        <path d="M10 6.6c.6.5 1.4.5 2 0M9.5 12.5c.8.8 4.2.8 5 0" />
      </>
    ),
    align: (
      <>
        <rect x="3" y="9" width="18" height="6" rx="3" />
        <path d="M7 9v6M11 9v6M15 9v6" />
      </>
    ),
    emergency: (
      <>
        <path d="M3.5 12a8.5 8.5 0 1 1 17 0 8.5 8.5 0 0 1-17 0Z" />
        <path d="M12 8v4l2.5 1.5" />
        <path d="M12 3v1.5M12 19.5V21" />
      </>
    ),
    scan: (
      <>
        <path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2" />
        <path d="M7 12h10" />
      </>
    ),
  };

  return (
    <svg
      {...base}
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      {map[name]}
    </svg>
  );
}

export function Logo({ className = "h-8 w-auto" }: Props) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path
        d="M14 6C9.5 6 6.5 9 6.5 13.6c0 4 1.4 6 2 10 .6 3.6.4 9 4 9 3.2 0 2.4-7 4.5-8.8M26 6c4.5 0 7.5 3 7.5 7.6 0 4-1.4 6-2 10-.6 3.6-.4 9-4 9-3.2 0-2.4-7-4.5-8.8"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <circle cx="20" cy="14" r="2.4" fill="currentColor" />
    </svg>
  );
}
