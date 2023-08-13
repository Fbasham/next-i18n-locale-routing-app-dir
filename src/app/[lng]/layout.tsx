import "@/app/global.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

type LayoutProps = {
  children: React.ReactNode;
  params: { lng: string };
};

export default async function Layout({
  children,
  params: { lng },
}: LayoutProps) {
  return (
    <html lang={lng}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <Navbar lng={lng} />
        <main className="max-w-5xl mx-auto mt-10 px-5">
          <Breadcrumb />
          {children}
        </main>
        <Footer lng={lng} />
      </body>
    </html>
  );
}
