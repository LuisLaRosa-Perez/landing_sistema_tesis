import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <span className="text-xl font-semibold">NeurOs</span>
    </Link>
  );
}
// components/logo.tsx
import React from "react";

export const LogoIcon: React.FC<{ size?: number }> = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-label="LogoIcon">
    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M6 12h12M12 6v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export default LogoIcon;
