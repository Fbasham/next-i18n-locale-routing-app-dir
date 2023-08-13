import "@/app/global.css";

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <title>App Dir Locale Routing | (FR) App Dir Locale Routing</title>
      </head>
      <body className="w-full h-[100vh]">{children}</body>
    </html>
  );
}
