"use client";

import "@/app/global.css";
import LanguageToggle from "@/components/LanguageToggle";

type PageProps = {
  children: React.ReactNode;
  params: { lng: string };
};

export default function Layout({ children, params: { lng } }: PageProps) {
  return (
    <html lang={lng}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <LanguageToggle />
        <main>{children}</main>
      </body>
    </html>
  );
}
