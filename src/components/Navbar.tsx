"use client";

import LanguageToggle from "@/components/LanguageToggle";

type Props = {
  lng: string;
};

export default function Navbar({ lng }: Props) {
  return (
    <nav className="flex justify-between px-16 py-10 border-b">
      <a>
        <img src="/goc.svg" className="block h-8" />
      </a>
      <LanguageToggle lng={lng} />
    </nav>
  );
}
