"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default async function Breadcrumb() {
  let path = usePathname();
  let crumbs = path.split("/").slice(2);
  if (crumbs.at(0) !== "home") crumbs.unshift("home");
  crumbs.unshift("canada.ca");

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
            {i === 0 ? crumb : crumb}
          </Link>
        </li>
      ))}
    </ul>
  );
}
