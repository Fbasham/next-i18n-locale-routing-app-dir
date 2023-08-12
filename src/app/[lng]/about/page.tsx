import { useTranslation } from "@/app/i18n";

type PageProps = {
  params: { lng: string };
};

export default async function About({ params: { lng } }: PageProps) {
  const { t } = await useTranslation(lng, "about");
  return <>{t("title")}</>;
}
