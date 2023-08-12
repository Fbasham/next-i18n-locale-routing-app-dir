"use client";

import LanguageToggle from "@/components/LanguageToggle";

type PageProps = {
  children: React.ReactNode;
  params: { lng: string };
};

export default function Layout({ children, params: { lng } }: PageProps) {
  return (
    <html lang={lng}>
      <body>
        <LanguageToggle />
        <main>{children}</main>
      </body>
    </html>
  );
}
