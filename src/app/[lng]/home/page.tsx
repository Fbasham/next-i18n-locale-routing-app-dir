import { useTranslation } from "@/app/i18n";
import Link from "next/link";

type PageProps = {
  params: { lng: string };
};

export default async function Home({ params: { lng } }: PageProps) {
  const { t } = await useTranslation(lng, "home");
  return (
    <>
      <title>{t("title")}</title>

      <h1 className="text-xl font-bold">{t("title")}</h1>

      <Link
        href={`/${lng}/about`}
        className="text-blue-900 underline hover:text-blue-950"
      >
        {t("about-page")}
      </Link>
    </>
  );
}
