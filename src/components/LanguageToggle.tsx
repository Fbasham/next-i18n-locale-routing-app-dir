"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function LanguageToggle() {
  const path = usePathname().slice(3);
  return (
    <div>
      <Link href={`/en/${path}`}>en</Link>
      <Link href={`/fr/${path}`}>fr</Link>
    </div>
  );
}
