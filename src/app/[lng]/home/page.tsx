import { useTranslation } from "@/app/i18n";

type PageProps = {
  params: { lng: string };
};

export default async function Home({ params: { lng } }: PageProps) {
  const { t } = await useTranslation(lng, "home");
  return <>{t("title")}</>;
}
