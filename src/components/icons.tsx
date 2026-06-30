import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function DiscordIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.317 4.369A19.79 19.79 0 0 0 16.558 3a13.6 13.6 0 0 0-.617 1.27 18.27 18.27 0 0 0-5.882 0A13.6 13.6 0 0 0 9.442 3 19.79 19.79 0 0 0 5.68 4.37C2.78 8.69 1.99 12.9 2.39 17.05a19.9 19.9 0 0 0 6.07 3.08c.49-.67.93-1.39 1.3-2.14-.71-.27-1.39-.6-2.03-.99.17-.13.34-.26.5-.4a14.2 14.2 0 0 0 12.13 0c.17.14.34.27.5.4-.64.39-1.32.72-2.04.99.37.75.81 1.47 1.31 2.14a19.86 19.86 0 0 0 6.07-3.08c.47-4.82-.8-8.99-3.39-12.69ZM9.35 14.5c-1.18 0-2.15-1.08-2.15-2.41 0-1.33.95-2.42 2.15-2.42 1.2 0 2.17 1.09 2.15 2.42 0 1.33-.96 2.41-2.15 2.41Zm5.3 0c-1.18 0-2.15-1.08-2.15-2.41 0-1.33.95-2.42 2.15-2.42 1.2 0 2.17 1.09 2.15 2.42 0 1.33-.95 2.41-2.15 2.41Z" />
    </svg>
  );
}

export function PlayIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="m6 4 14 8-14 8V4Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function CoinsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <ellipse cx="9" cy="6" rx="6" ry="3" />
      <path d="M3 6v6c0 1.66 2.69 3 6 3s6-1.34 6-3V6" />
      <path d="M3 12v6c0 1.66 2.69 3 6 3 1.2 0 2.31-.18 3.24-.48" />
      <circle cx="17" cy="15" r="4" />
    </svg>
  );
}

export function BriefcaseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M2 13h20" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M12 3 4 6v6c0 5 3.4 8.3 8 9 4.6-.7 8-4 8-9V6l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13A4 4 0 0 1 16 11" />
    </svg>
  );
}

export function HomeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="m3 10 9-7 9 7v9a2 2 0 0 1-2 2h-3v-7H8v7H5a2 2 0 0 1-2-2v-9Z" />
    </svg>
  );
}

export function CarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M5 13 6.5 7.5A2 2 0 0 1 8.4 6h7.2a2 2 0 0 1 1.9 1.5L19 13M5 13h14M5 13a2 2 0 0 0-2 2v3h2m14-5a2 2 0 0 1 2 2v3h-2m-2 0H7m10 0v1m-10-1v1" />
      <circle cx="7.5" cy="16" r="1.5" />
      <circle cx="16.5" cy="16" r="1.5" />
    </svg>
  );
}

export function SparklesIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />
    </svg>
  );
}

export function CopyIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="9" y="9" width="12" height="12" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

export function CodeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="m8 6-6 6 6 6M16 6l6 6-6 6M14 4l-4 16" />
    </svg>
  );
}

export function GamepadIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M6 11h4M8 9v4M15 12h.01M18 10h.01" />
      <path d="M17.5 5h-11A4.5 4.5 0 0 0 2 9.5v.5a36 36 0 0 0 1.2 8.3A2 2 0 0 0 5.1 20c.9 0 1.5-.5 2-1.2L8.6 16h6.8l1.5 2.8c.5.7 1.1 1.2 2 1.2a2 2 0 0 0 1.9-1.7A36 36 0 0 0 22 10v-.5A4.5 4.5 0 0 0 17.5 5Z" />
    </svg>
  );
}

export function ScaleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M12 3v18M7 21h10M3 7h18M6 7l-3 6a3 3 0 0 0 6 0L6 7Zm12 0-3 6a3 3 0 0 0 6 0l-3-6ZM7 7l5-2 5 2" />
    </svg>
  );
}

export function ExchangeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M4 8h15l-3-3M20 16H5l3 3" />
    </svg>
  );
}

export function VolumeOnIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M11 5 6 9H2v6h4l5 4V5Z" />
      <path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13" />
    </svg>
  );
}

export function VolumeOffIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M11 5 6 9H2v6h4l5 4V5Z" />
      <path d="m22 9-6 6M16 9l6 6" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
