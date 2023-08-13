import { useTranslation } from "@/app/i18n";

type Props = {
  lng: string;
};

export default async function Footer({ lng }: Props) {
  const { t } = await useTranslation(lng, "common");
  return (
    <footer className="py-5 px-10 flex justify-between fixed bottom-0 border-2 w-full">
      <div className="flex gap-2 text-sm text-blue-900">
        <a href={t("toc-link")} className="hover:text-blue-950">
          {t("terms-and-conditions")}
        </a>
        <a href={t("privacy-link")} className="hover:text-blue-950">
          {t("privacy")}
        </a>
      </div>
      <div>
        <img src="/flag.svg" className="h-8 w-full block" />
      </div>
    </footer>
  );
}
