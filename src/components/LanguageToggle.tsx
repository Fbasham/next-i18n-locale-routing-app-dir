"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

type Props = {
  lng: string;
};

export default function LanguageToggle({ lng }: Props) {
  const path = usePathname().slice(3);
  return (
    <div>
      <Link
        href={`/${lng === "en" ? "fr" : "en"}/${path}`}
        className="underline text-blue-900 hover:text-blue-950"
      >
        {lng === "en" ? "Français" : "English"}
      </Link>
    </div>
  );
}
