"use client";

import { usePathname } from "next/navigation";
import Breadcrumb from "./Breadcrumb";

type Props = {
  lng: string;
};

export default function BreadcrumbClient({ lng }: Props) {
  let path = usePathname();
  let crumbs = path.split("/").slice(2);
  if (crumbs.at(0) !== "home") crumbs.unshift("home");
  crumbs.unshift("canada.ca");
  return <Breadcrumb lng={lng} crumbs={crumbs} />;
}
