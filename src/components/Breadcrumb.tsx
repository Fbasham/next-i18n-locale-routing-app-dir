import { useTranslation } from "@/app/i18n";
import Link from "next/link";

type Props = {
  lng: string;
  crumbs: string[];
};

export default async function Breadcrumb({ lng, crumbs }: Props) {
  const { t } = await useTranslation(lng, "common");

  return (
    <ul className="list-disc list-inside flex my-5 text-sm text-blue-950 hover:text-blue-900">
      {crumbs.map((crumb, i) => (
        <li className="mr-2 first:list-none" key={crumb}>
          <Link
            href={
              i === 0
                ? "https://www.canada.ca/"
                : crumbs.slice(crumb === "home" ? 1 : 2, i + 1).join("/")
            }
          >
            {i === 0 ? crumb : t(crumb)}
          </Link>
        </li>
      ))}
    </ul>
  );
}
